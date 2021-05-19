# [Universal Framework PHP Documentation](../home.md)

# Class: \Filemanager\file
### Namespace: [\Filemanager](../namespaces/Filemanager.md)
---
---
### Constants
* No constants found
---
### Properties
* [public $content](../classes/Filemanager.file.md#property_content)
* [public $modified](../classes/Filemanager.file.md#property_modified)
* [public $created](../classes/Filemanager.file.md#property_created)
---
### Methods
* [public __construct()](../classes/Filemanager.file.md#method___construct)
* [public withPath()](../classes/Filemanager.file.md#method_withPath)
* [public tmp()](../classes/Filemanager.file.md#method_tmp)
* [public folder()](../classes/Filemanager.file.md#method_folder)
* [public emptyDir()](../classes/Filemanager.file.md#method_emptyDir)
* [public delete()](../classes/Filemanager.file.md#method_delete)
* [public deleteDirectory()](../classes/Filemanager.file.md#method_deleteDirectory)
* [public write()](../classes/Filemanager.file.md#method_write)
* [public file()](../classes/Filemanager.file.md#method_file)
* [public determineContent()](../classes/Filemanager.file.md#method_determineContent)
* [public remove()](../classes/Filemanager.file.md#method_remove)
* [public deleteFile()](../classes/Filemanager.file.md#method_deleteFile)
* [public get()](../classes/Filemanager.file.md#method_get)
* [public cleanDump()](../classes/Filemanager.file.md#method_cleanDump)
* [public createFile()](../classes/Filemanager.file.md#method_createFile)
* [public smartFilePath()](../classes/Filemanager.file.md#method_smartFilePath)
* [public createFolder()](../classes/Filemanager.file.md#method_createFolder)
* [public isWin()](../classes/Filemanager.file.md#method_isWin)
* [public mkdir()](../classes/Filemanager.file.md#method_mkdir)
* [public __istatic()](../classes/Filemanager.file.md#method___istatic)
* [public destroy_old_files()](../classes/Filemanager.file.md#method_destroy_old_files)
---
### Details
* File: [Filemanager\file.php](../files/Filemanager.file.md)
* Package: Default
* Class Hierarchy:
  * \Filemanager\file
---
## Properties
<a name="property_content"></a>
#### public $content : 
---
**Type:** 

**Details:**


<a name="property_modified"></a>
#### public $modified : 
---
**Type:** 

**Details:**


<a name="property_created"></a>
#### public $created : 
---
**Type:** 

**Details:**



---
## Methods
<a name="method___construct" class="anchor"></a>
#### public __construct() 

```
public __construct() 
```

**Details:**
* Inherited From: [\Filemanager\file](../classes/Filemanager.file.md)




<a name="method_withPath" class="anchor"></a>
#### public withPath() 

```
Static public withPath(  $filepath) 
```

**Summary**

Initialize File (Alternative Multiple Constructor).

**Details:**
* Inherited From: [\Filemanager\file](../classes/Filemanager.file.md)
* See Also:
 * [https://stackoverflow.com/a/1701337](https://stackoverflow.com/a/1701337)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $filepath  |  |




<a name="method_tmp" class="anchor"></a>
#### public tmp() : mixed

```
Static public tmp() : mixed
```

**Summary**

Get TMP Folder.

**Details:**
* Inherited From: [\Filemanager\file](../classes/Filemanager.file.md)

**Returns:** mixed


<a name="method_folder" class="anchor"></a>
#### public folder() : mixed

```
Static public folder(  $path) : mixed
```

**Details:**
* Inherited From: [\Filemanager\file](../classes/Filemanager.file.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $path  |  |

**Returns:** mixed


<a name="method_emptyDir" class="anchor"></a>
#### public emptyDir() 

```
Static public emptyDir(  $dir) 
```

**Summary**

Flush directory.

**Details:**
* Inherited From: [\Filemanager\file](../classes/Filemanager.file.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $dir  |  |



##### Tags
| Tag | Version | Description |
| --- | ------- | ----------- |
| todo |  | empty the directory, deleting all files except directory |

<a name="method_delete" class="anchor"></a>
#### public delete() 

```
Static public delete(string  $path) 
```

**Summary**

Recursive delete.

**Details:**
* Inherited From: [\Filemanager\file](../classes/Filemanager.file.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code>string</code> | $path  | files or folder |




<a name="method_deleteDirectory" class="anchor"></a>
#### public deleteDirectory() : boolean

```
Static public deleteDirectory(  $dir) : boolean
```

**Summary**

Delete Non-Empty Directory.

**Details:**
* Inherited From: [\Filemanager\file](../classes/Filemanager.file.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $dir  |  |

**Returns:** boolean


<a name="method_write" class="anchor"></a>
#### public write() 

```
Static public write(  $path,   $content = &#039;&#039;,   $append = false) 
```

**Details:**
* Inherited From: [\Filemanager\file](../classes/Filemanager.file.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $path  |  |
| <code></code> | $content  |  |
| <code></code> | $append  |  |




<a name="method_file" class="anchor"></a>
#### public file() : string

```
Static public file(  $path, boolean  $create = true, boolean  $force = false, boolean  $append = false, boolean  $dump = false) : string
```

**Summary**

Create file nested.

**Details:**
* Inherited From: [\Filemanager\file](../classes/Filemanager.file.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $path  |  |
| <code>boolean</code> | $create  | content |
| <code>boolean</code> | $force  |  |
| <code>boolean</code> | $append  |  |
| <code>boolean</code> | $dump  |  |

**Returns:** string


<a name="method_determineContent" class="anchor"></a>
#### public determineContent() 

```
public determineContent(  $create) 
```

**Details:**
* Inherited From: [\Filemanager\file](../classes/Filemanager.file.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $create  |  |




<a name="method_remove" class="anchor"></a>
#### public remove() 

```
Static public remove(  $str) 
```

**Details:**
* Inherited From: [\Filemanager\file](../classes/Filemanager.file.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $str  |  |




<a name="method_deleteFile" class="anchor"></a>
#### public deleteFile() : boolean

```
public deleteFile(  $file) : boolean
```

**Summary**

Delete file.

**Details:**
* Inherited From: [\Filemanager\file](../classes/Filemanager.file.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $file  |  |

**Returns:** boolean


<a name="method_get" class="anchor"></a>
#### public get() 

```
Static public get(  $file,   $parse_json = false) 
```

**Details:**
* Inherited From: [\Filemanager\file](../classes/Filemanager.file.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $file  |  |
| <code></code> | $parse_json  |  |




<a name="method_cleanDump" class="anchor"></a>
#### public cleanDump() 

```
public cleanDump(  $c,   $_) 
```

**Details:**
* Inherited From: [\Filemanager\file](../classes/Filemanager.file.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $c  |  |
| <code></code> | $_  |  |




<a name="method_createFile" class="anchor"></a>
#### public createFile() : string

```
public createFile(string  $path, boolean  $create = true, boolean  $force = false, boolean  $append = false,   $dump = false) : string
```

**Summary**

Create file and directory recursively.

**Details:**
* Inherited From: [\Filemanager\file](../classes/Filemanager.file.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code>string</code> | $path  | File Path |
| <code>boolean</code> | $create  | * true to create
                      * false to abort create |
| <code>boolean</code> | $force  | * true force overwrite
                      * false not create if exists |
| <code>boolean</code> | $append  | append to file |
| <code></code> | $dump  |  |

**Returns:** string - filepath

##### Tags
| Tag | Version | Description |
| --- | ------- | ----------- |
| todo |  | mkdir if not exists then file_put_contents |

<a name="method_smartFilePath" class="anchor"></a>
#### public smartFilePath() : string

```
public smartFilePath(string  $path) : string
```

**Summary**

Normalize Path To Linux Format.

**Details:**
* Inherited From: [\Filemanager\file](../classes/Filemanager.file.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code>string</code> | $path  |  |

**Returns:** string - $dir


<a name="method_createFolder" class="anchor"></a>
#### public createFolder() : string

```
public createFolder(string  $d, mixed  $root = null, boolean  $noroot = null,   $dump = false) : string
```

**Summary**

Create folder recursively.

**Details:**
* Inherited From: [\Filemanager\file](../classes/Filemanager.file.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code>string</code> | $d  | pathname or dirname |
| <code>mixed</code> | $root  | root directory
                      * default $_SERVER['DOCUMENT_ROOT'] |
| <code>boolean</code> | $noroot  | false will return begins with $root |
| <code></code> | $dump  |  |

**Returns:** string


<a name="method_isWin" class="anchor"></a>
#### public isWin() : boolean

```
Static public isWin() : boolean
```

**Summary**

Is Device Windows?

**Details:**
* Inherited From: [\Filemanager\file](../classes/Filemanager.file.md)

**Returns:** boolean


<a name="method_mkdir" class="anchor"></a>
#### public mkdir() 

```
public mkdir(  $x) 
```

**Summary**

Create folder 777.

**Details:**
* Inherited From: [\Filemanager\file](../classes/Filemanager.file.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $x  |  |




<a name="method___istatic" class="anchor"></a>
#### public __istatic() 

```
public __istatic() 
```

**Details:**
* Inherited From: [\Filemanager\file](../classes/Filemanager.file.md)




<a name="method_destroy_old_files" class="anchor"></a>
#### public destroy_old_files() 

```
public destroy_old_files(  $dir,   $sec = 3600,   $prefix = null) 
```

**Details:**
* Inherited From: [\Filemanager\file](../classes/Filemanager.file.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $dir  |  |
| <code></code> | $sec  |  |
| <code></code> | $prefix  |  |





---

### Top Namespaces

* [\Accounting](../namespaces/Accounting.md)
* [\AGC](../namespaces/AGC.md)
* [\agc_service](../namespaces/agc_service.md)
* [\Bulletproof](../namespaces/Bulletproof.md)
* [\Cookie](../namespaces/Cookie.md)
* [\Crypto](../namespaces/Crypto.md)
* [\DB](../namespaces/DB.md)
* [\DDOS](../namespaces/DDOS.md)
* [\Extender](../namespaces/Extender.md)
* [\Facebook](../namespaces/Facebook.md)
* [\Filemanager](../namespaces/Filemanager.md)
* [\GoogleExt](../namespaces/GoogleExt.md)
* [\HTML](../namespaces/HTML.md)
* [\IMEI](../namespaces/IMEI.md)
* [\img](../namespaces/img.md)
* [\Indosat](../namespaces/Indosat.md)
* [\JSON](../namespaces/JSON.md)
* [\MrShan0](../namespaces/MrShan0.md)
* [\MVC](../namespaces/MVC.md)
* [\Naneau](../namespaces/Naneau.md)
* [\Netscape](../namespaces/Netscape.md)
* [\Office](../namespaces/Office.md)
* [\PHPWee](../namespaces/PHPWee.md)
* [\Proxy](../namespaces/Proxy.md)
* [\Session](../namespaces/Session.md)
* [\simplehtmldom](../namespaces/simplehtmldom.md)
* [\Telkomsel](../namespaces/Telkomsel.md)
* [\TestBootstrap](../namespaces/TestBootstrap.md)
* [\Typehint](../namespaces/Typehint.md)
* [\UniversalFramework](../namespaces/UniversalFramework.md)
* [\User](../namespaces/User.md)

---

### Reports
* [Errors - 1884](../reports/errors.md)
* [Markers - 8](../reports/markers.md)
* [Deprecated - 0](../reports/deprecated.md)

---

This document was automatically generated from source code comments on 2021-05-19 using [phpDocumentor](http://www.phpdoc.org/) and [fr3nch13/phpdoc-markdown](https://github.com/fr3nch13/phpdoc-markdown)