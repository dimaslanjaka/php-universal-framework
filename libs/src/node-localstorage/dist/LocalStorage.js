var JSONStorage, KEY_FOR_EMPTY_STRING, LocalStorage, MetaKey, QUOTA_EXCEEDED_ERR, StorageEvent, _emptyDirectory, _escapeKey, _rm, createMap, dirname, events, fs, path, writeSync;

path = require('path');

dirname = path.dirname;

fs = require('fs');

events = require('events');

writeSync = require('write-file-atomic').sync;

KEY_FOR_EMPTY_STRING = '---.EMPTY_STRING.---'; // Chose something that no one is likely to ever use

_emptyDirectory = function(target) {
  var i, len, p, ref, results;
  ref = fs.readdirSync(target);
  results = [];
  for (i = 0, len = ref.length; i < len; i++) {
    p = ref[i];
    results.push(_rm(path.join(target, p)));
  }
  return results;
};

_rm = function(target) {
  if (!fs.existsSync(dirname(target))) {
    fs.mkdirSync(dirname(target));
  }
  if (fs.statSync(target).isDirectory()) {
    _emptyDirectory(target);
    return fs.rmdirSync(target);
  } else {
    return fs.unlinkSync(target);
  }
};

_escapeKey = function(key) {
  var newKey;
  if (key === '') {
    newKey = KEY_FOR_EMPTY_STRING;
  } else {
    newKey = key.toString();
  }
  return newKey;
};

QUOTA_EXCEEDED_ERR = class QUOTA_EXCEEDED_ERR extends Error {
  constructor(message = 'Unknown error.') {
    super();
    this.message = message;
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.name = this.constructor.name;
  }

  toString() {
    return `${this.name}: ${this.message}`;
  }

};

StorageEvent = class StorageEvent {
  constructor(key1, oldValue1, newValue1, url, storageArea = 'localStorage') {
    this.key = key1;
    this.oldValue = oldValue1;
    this.newValue = newValue1;
    this.url = url;
    this.storageArea = storageArea;
  }

};

MetaKey = class MetaKey { // MetaKey contains key and size
  constructor(key1, index1) {
    this.key = key1;
    this.index = index1;
    if (!(this instanceof MetaKey)) {
      return new MetaKey(this.key, this.index);
    }
  }

};

createMap = function() { // createMap contains Metakeys as properties
  var Map;
  Map = function() {};
  Map.prototype = Object.create(null);
  return new Map();
};

LocalStorage = (function() {
  var instanceMap;

  class LocalStorage extends events.EventEmitter {
    constructor(_location, quota = 5 * 1024 * 1024) {
      var handler;
      super();
      this._location = _location;
      this.quota = quota;
      // super(_location, quota)
      // @_location = _location
      // @quota = quota
      if (!(this instanceof LocalStorage)) {
        return new LocalStorage(this._location, this.quota);
      }
      this._location = path.resolve(this._location);
      if (instanceMap[this._location] != null) {
        return instanceMap[this._location];
      }
      this.length = 0; // !TODO: Maybe change this to a property with __defineProperty__
      this._bytesInUse = 0;
      this._keys = [];
      this._metaKeyMap = createMap();
      this._eventUrl = "pid:" + process.pid;
      this._init();
      this._QUOTA_EXCEEDED_ERR = QUOTA_EXCEEDED_ERR;
      if (typeof Proxy !== "undefined" && Proxy !== null) {
        handler = {
          set: (receiver, key, value) => {
            if (this[key] != null) {
              return this[key] = value;
            } else {
              return this.setItem(key, value);
            }
          },
          get: (receiver, key) => {
            if (this[key] != null) {
              return this[key];
            } else {
              return this.getItem(key);
            }
          }
        };
        instanceMap[this._location] = new Proxy(this, handler);
        return instanceMap[this._location];
      }
      // else it'll return this
      instanceMap[this._location] = this;
      return instanceMap[this._location];
    }

    _init() {
      var _MetaKey, _decodedKey, _keys, e, i, index, k, len, stat;
      try {
        stat = fs.statSync(this._location);
        if ((stat != null) && !stat.isDirectory()) {
          throw new Error(`A file exists at the location '${this._location}' when trying to create/open localStorage`);
        }
        // At this point, it exists and is definitely a directory. So read it.
        this._bytesInUse = 0;
        this.length = 0;
        _keys = fs.readdirSync(this._location);
        for (index = i = 0, len = _keys.length; i < len; index = ++i) {
          k = _keys[index];
          _decodedKey = decodeURIComponent(k);
          this._keys.push(_decodedKey);
          _MetaKey = new MetaKey(k, index);
          this._metaKeyMap[_decodedKey] = _MetaKey;
          stat = this._getStat(k);
          if ((stat != null ? stat.size : void 0) != null) {
            _MetaKey.size = stat.size;
            this._bytesInUse += stat.size;
          }
        }
        this.length = _keys.length;
      } catch (error) {
        e = error;
        // If it errors, that might mean it didn't exist, so try to create it
        if (e.code !== "ENOENT") {
          throw e;
        }
        try {
          fs.mkdirSync(this._location, {
            recursive: true
          });
        } catch (error) {
          e = error;
          if (e.code !== "EEXIST") {
            throw e;
          }
        }
      }
    }

    setItem(key, value) {
      var encodedKey, evnt, existsBeforeSet, filename, hasListeners, metaKey, oldLength, oldValue, valueString, valueStringLength;
      hasListeners = events.EventEmitter.listenerCount(this, 'storage');
      oldValue = null;
      if (hasListeners) {
        oldValue = this.getItem(key);
      }
      key = _escapeKey(key);
      encodedKey = encodeURIComponent(key);
      filename = path.join(this._location, encodedKey);
      valueString = value.toString();
      valueStringLength = valueString.length;
      metaKey = this._metaKeyMap[key];
      existsBeforeSet = !!metaKey;
      if (existsBeforeSet) {
        oldLength = metaKey.size;
      } else {
        oldLength = 0;
      }
      if (this._bytesInUse - oldLength + valueStringLength > this.quota) {
        throw new QUOTA_EXCEEDED_ERR();
      }
      writeSync(filename, valueString, 'utf8');
      if (!existsBeforeSet) {
        metaKey = new MetaKey(encodedKey, (this._keys.push(key)) - 1);
        metaKey.size = valueStringLength;
        this._metaKeyMap[key] = metaKey;
        this.length += 1;
        this._bytesInUse += valueStringLength;
      }
      if (hasListeners) {
        evnt = new StorageEvent(key, oldValue, value, this._eventUrl);
        return this.emit('storage', evnt);
      }
    }

    getItem(key) {
      var filename, metaKey;
      key = _escapeKey(key);
      metaKey = this._metaKeyMap[key];
      if (!!metaKey) {
        filename = path.join(this._location, metaKey.key);
        if (fs.existsSync(filename)) {
          return fs.readFileSync(filename, 'utf8');
        } else {
          return false;
        }
      } else {
        return null;
      }
    }

    _getStat(key) {
      var filename;
      key = _escapeKey(key);
      filename = path.join(this._location, encodeURIComponent(key));
      try {
        return fs.statSync(filename);
      } catch (error) {
        return null;
      }
    }

    removeItem(key) {
      var evnt, filename, hasListeners, k, meta, metaKey, oldValue, ref, v;
      key = _escapeKey(key);
      metaKey = this._metaKeyMap[key];
      if (!!metaKey) {
        hasListeners = events.EventEmitter.listenerCount(this, 'storage');
        oldValue = null;
        if (hasListeners) {
          oldValue = this.getItem(key);
        }
        delete this._metaKeyMap[key];
        this.length -= 1;
        this._bytesInUse -= metaKey.size;
        filename = path.join(this._location, metaKey.key);
        this._keys.splice(metaKey.index, 1);
        ref = this._metaKeyMap;
        for (k in ref) {
          v = ref[k];
          meta = this._metaKeyMap[k];
          if (meta.index > metaKey.index) {
            meta.index -= 1;
          }
        }
        _rm(filename);
        if (hasListeners) {
          evnt = new StorageEvent(key, oldValue, null, this._eventUrl);
          return this.emit('storage', evnt);
        }
      }
    }

    key(n) {
      var rawKey;
      rawKey = this._keys[n];
      if (rawKey === KEY_FOR_EMPTY_STRING) {
        return '';
      } else {
        return rawKey;
      }
    }

    clear() {
      var evnt;
      _emptyDirectory(this._location);
      this._metaKeyMap = createMap();
      this._keys = [];
      this.length = 0;
      this._bytesInUse = 0;
      if (events.EventEmitter.listenerCount(this, 'storage')) {
        evnt = new StorageEvent(null, null, null, this._eventUrl);
        return this.emit('storage', evnt);
      }
    }

    _getBytesInUse() {
      return this._bytesInUse;
    }

    _deleteLocation() {
      delete instanceMap[this._location];
      _rm(this._location);
      this._metaKeyMap = {};
      this._keys = [];
      this.length = 0;
      return this._bytesInUse = 0;
    }

  };

  instanceMap = {};

  return LocalStorage;

}).call(this);

JSONStorage = class JSONStorage extends LocalStorage {
  setItem(key, value) {
    var newValue;
    newValue = JSON.stringify(value);
    return super.setItem(key, newValue);
  }

  getItem(key) {
    return JSON.parse(super.getItem(key));
  }

};

exports.LocalStorage = LocalStorage;

exports.JSONStorage = JSONStorage;

exports.QUOTA_EXCEEDED_ERR = QUOTA_EXCEEDED_ERR;
