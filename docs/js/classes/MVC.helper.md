# [Universal Framework PHP Documentation](../home.md)

# Class: \MVC\helper
### Namespace: [\MVC](../namespaces/MVC.md)
---
---
### Constants
* No constants found
---
### Properties
* [public $key](../classes/MVC.helper.md#property_key)
* [public $expire](../classes/MVC.helper.md#property_expire)
* [public $router](../classes/MVC.helper.md#property_router)
* [public $arch](../classes/MVC.helper.md#property_arch)
---
### Methods
* [public __construct()](../classes/MVC.helper.md#method___construct)
* [public env()](../classes/MVC.helper.md#method_env)
* [public config()](../classes/MVC.helper.md#method_config)
* [public HeaderAccept()](../classes/MVC.helper.md#method_HeaderAccept)
* [public cleanBuffer()](../classes/MVC.helper.md#method_cleanBuffer)
* [public require_method()](../classes/MVC.helper.md#method_require_method)
* [public url2host()](../classes/MVC.helper.md#method_url2host)
* [public is_url()](../classes/MVC.helper.md#method_is_url)
* [public parse_url2()](../classes/MVC.helper.md#method_parse_url2)
* [public include_asset()](../classes/MVC.helper.md#method_include_asset)
* [public asset_find()](../classes/MVC.helper.md#method_asset_find)
* [public sass()](../classes/MVC.helper.md#method_sass)
* [public is_windows()](../classes/MVC.helper.md#method_is_windows)
* [public fixSlash()](../classes/MVC.helper.md#method_fixSlash)
* [public php_error_log()](../classes/MVC.helper.md#method_php_error_log)
* [public is_header()](../classes/MVC.helper.md#method_is_header)
* [public babel()](../classes/MVC.helper.md#method_babel)
* [public clean_special_characters()](../classes/MVC.helper.md#method_clean_special_characters)
* [public clean_multiple_hypens()](../classes/MVC.helper.md#method_clean_multiple_hypens)
* [public clean_whitespace()](../classes/MVC.helper.md#method_clean_whitespace)
* [public webkit_asset()](../classes/MVC.helper.md#method_webkit_asset)
* [public base_url()](../classes/MVC.helper.md#method_base_url)
* [public load_asset()](../classes/MVC.helper.md#method_load_asset)
* [public headerExt()](../classes/MVC.helper.md#method_headerExt)
* [public getOrigin()](../classes/MVC.helper.md#method_getOrigin)
* [public get_canonical()](../classes/MVC.helper.md#method_get_canonical)
* [public geturl()](../classes/MVC.helper.md#method_geturl)
* [public get_clean_uri()](../classes/MVC.helper.md#method_get_clean_uri)
* [public setcookie()](../classes/MVC.helper.md#method_setcookie)
* [public getcookie()](../classes/MVC.helper.md#method_getcookie)
* [public delcookie()](../classes/MVC.helper.md#method_delcookie)
* [public request_data()](../classes/MVC.helper.md#method_request_data)
* [public platformSlashes()](../classes/MVC.helper.md#method_platformSlashes)
* [public cors()](../classes/MVC.helper.md#method_cors)
* [public isLocal()](../classes/MVC.helper.md#method_isLocal)
* [public ip_in_multirange()](../classes/MVC.helper.md#method_ip_in_multirange)
* [public ip_in_range()](../classes/MVC.helper.md#method_ip_in_range)
* [public is_google()](../classes/MVC.helper.md#method_is_google)
* [public getRequestIP()](../classes/MVC.helper.md#method_getRequestIP)
* [public isCloudflare()](../classes/MVC.helper.md#method_isCloudflare)
* [public _cloudflare_CheckIP()](../classes/MVC.helper.md#method__cloudflare_CheckIP)
* [public _cloudflare_Requests_Check()](../classes/MVC.helper.md#method__cloudflare_Requests_Check)
* [public get_client_ip()](../classes/MVC.helper.md#method_get_client_ip)
* [public useragent()](../classes/MVC.helper.md#method_useragent)
* [public print_server()](../classes/MVC.helper.md#method_print_server)
* [public get_url_path()](../classes/MVC.helper.md#method_get_url_path)
* [public ddos_key()](../classes/MVC.helper.md#method_ddos_key)
* [public sanitize_output()](../classes/MVC.helper.md#method_sanitize_output)
* [public trycatch()](../classes/MVC.helper.md#method_trycatch)
---
### Details
* File: [MVC\helper.php](../files/MVC.helper.md)
* Package: Default
* Class Hierarchy:
  * \MVC\helper
---
## Properties
<a name="property_key"></a>
#### public $key : 
---
**Type:** 

**Details:**


<a name="property_expire"></a>
#### public $expire : 
---
**Type:** 

**Details:**


<a name="property_router"></a>
#### public $router : 
---
**Type:** 

**Details:**


<a name="property_arch"></a>
#### public $arch : array
---
**Summary**

Class architecture database.

**Type:** array

**Details:**



---
## Methods
<a name="method___construct" class="anchor"></a>
#### public __construct() 

```
public __construct() 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)




<a name="method_env" class="anchor"></a>
#### public env() : string&amp;#124;boolean

```
Static public env(string  $for) : string&amp;#124;boolean
```

**Summary**

```php
if (env('dev')) return boolean; //is development environtment or not
```
Get environtment framework.

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code>string</code> | $for  | dev or prod |

**Returns:** string&#124;boolean


<a name="method_config" class="anchor"></a>
#### public config() 

```
Static public config() 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)




<a name="method_HeaderAccept" class="anchor"></a>
#### public HeaderAccept() : void

```
Static public HeaderAccept() : void
```

**Summary**

Get Header Request Accept.

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)

**Returns:** void


<a name="method_cleanBuffer" class="anchor"></a>
#### public cleanBuffer() : void

```
Static public cleanBuffer() : void
```

**Summary**

Clean output buffers.

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)

**Returns:** void


<a name="method_require_method" class="anchor"></a>
#### public require_method() 

```
Static public require_method(  $method) 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $method  |  |




<a name="method_url2host" class="anchor"></a>
#### public url2host() : string&amp;#124;null

```
Static public url2host(  $url, mixed  $fallback = null) : string&amp;#124;null
```

**Summary**

transfor url to host (domain only).

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $url  |  |
| <code>mixed</code> | $fallback  | if url is not valid return $fallback value |

**Returns:** string&#124;null


<a name="method_is_url" class="anchor"></a>
#### public is_url() : boolean

```
Static public is_url(string  $url) : boolean
```

**Summary**

is url ?

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code>string</code> | $url  |  |

**Returns:** boolean


<a name="method_parse_url2" class="anchor"></a>
#### public parse_url2() : \MVC\parse_url

```
Static public parse_url2(string  $url, boolean  $encoded = false) : \MVC\parse_url
```

**Summary**

Parse URL deeper.

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code>string</code> | $url  |  |
| <code>boolean</code> | $encoded  |  |

**Returns:** \MVC\parse_url


<a name="method_include_asset" class="anchor"></a>
#### public include_asset() 

```
Static public include_asset(  $fn,   $fn2 = null,   $callback = null) 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $fn  |  |
| <code></code> | $fn2  |  |
| <code></code> | $callback  |  |




<a name="method_asset_find" class="anchor"></a>
#### public asset_find() 

```
Static public asset_find(array  $fn = array()) 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code>array</code> | $fn  |  |




<a name="method_sass" class="anchor"></a>
#### public sass() 

```
Static public sass(  $path) 
```

**Summary**

Sass Compiler.

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $path  |  |



##### Tags
| Tag | Version | Description |
| --- | ------- | ----------- |
| requires |  | shell_exec |

<a name="method_is_windows" class="anchor"></a>
#### public is_windows() : boolean

```
Static public is_windows() : boolean
```

**Summary**

Detect current OS is Windows.

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)

**Returns:** boolean


<a name="method_fixSlash" class="anchor"></a>
#### public fixSlash() : string

```
Static public fixSlash(  $path,   $maxlength = 10) : string
```

**Summary**

Fix path string `default OS` separate slash and replaced by `/`
* WIN (\\)
* LINUX (/).

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $path  |  |
| <code></code> | $maxlength  |  |

**Returns:** string


<a name="method_php_error_log" class="anchor"></a>
#### public php_error_log() : string&amp;#124;null

```
Static public php_error_log(  $onlypath = false) : string&amp;#124;null
```

**Summary**

GET PHP ERROR LOG.

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $onlypath  |  |

**Returns:** string&#124;null


<a name="method_is_header" class="anchor"></a>
#### public is_header() : string&amp;#124;null

```
Static public is_header(  $any) : string&amp;#124;null
```

**Summary**

Check if header request has $any.

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $any  |  |

**Returns:** string&#124;null


<a name="method_babel" class="anchor"></a>
#### public babel() 

```
Static public babel(  $path) 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $path  |  |




<a name="method_clean_special_characters" class="anchor"></a>
#### public clean_special_characters() : string

```
Static public clean_special_characters(  $string, string  $replace = &#039;&#039;) : string
```

**Summary**

Clean special characters from string.

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $string  |  |
| <code>string</code> | $replace  |  |

**Returns:** string


<a name="method_clean_multiple_hypens" class="anchor"></a>
#### public clean_multiple_hypens() 

```
Static public clean_multiple_hypens(  $string) 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $string  |  |




<a name="method_clean_whitespace" class="anchor"></a>
#### public clean_whitespace() 

```
Static public clean_whitespace(  $str) 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $str  |  |




<a name="method_webkit_asset" class="anchor"></a>
#### public webkit_asset() 

```
Static public webkit_asset(  $path,   $alternative = null) 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $path  |  |
| <code></code> | $alternative  |  |




<a name="method_base_url" class="anchor"></a>
#### public base_url() : string

```
Static public base_url(string  $path, boolean  $forceSSL = false) : string
```

**Summary**

Get path base URL
* example (/cookie/file.md) -> (https://httpbin.org/cookie/file.md).

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code>string</code> | $path  | pathname from base url |
| <code>boolean</code> | $forceSSL  | force https protocol returned
                        * true or false or null |

**Returns:** string - protocol://origin/pathname


<a name="method_load_asset" class="anchor"></a>
#### public load_asset() 

```
Static public load_asset(  $path) 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $path  |  |




<a name="method_headerExt" class="anchor"></a>
#### public headerExt() 

```
Static public headerExt(  $ext) 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $ext  |  |




<a name="method_getOrigin" class="anchor"></a>
#### public getOrigin() 

```
Static public getOrigin() 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)




<a name="method_get_canonical" class="anchor"></a>
#### public get_canonical() : void

```
Static public get_canonical(string  $url = null, boolean  $whos = true) : void
```

**Summary**

get canonical url.

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code>string</code> | $url  | null for current page |
| <code>boolean</code> | $whos  | include host or not (http://domain) |

**Returns:** void


<a name="method_geturl" class="anchor"></a>
#### public geturl() : string

```
Static public geturl(boolean  $forceSSL = false) : string
```

**Summary**

Get current URL.

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code>boolean</code> | $forceSSL  | force https protocol returned
                      * true or false or null |

**Returns:** string - protocol://origin/pathname


<a name="method_get_clean_uri" class="anchor"></a>
#### public get_clean_uri() : string

```
Static public get_clean_uri(string  $url = null) : string
```

**Summary**

Get `request uri` without parameter.

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code>string</code> | $url  |  |

**Returns:** string


<a name="method_setcookie" class="anchor"></a>
#### public setcookie() 

```
Static public setcookie(  $name, mixed  $value = true, integer&amp;#124;float  $day, string  $path = &#039;/&#039;, string  $domain = &#039;&#039;, boolean  $secure = false, boolean  $httponly = false) 
```

**Summary**

Set cookie helper.

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $name  |  |
| <code>mixed</code> | $value  |  |
| <code>integer&#124;float</code> | $day  |  |
| <code>string</code> | $path  |  |
| <code>string</code> | $domain  |  |
| <code>boolean</code> | $secure  |  |
| <code>boolean</code> | $httponly  |  |




<a name="method_getcookie" class="anchor"></a>
#### public getcookie() 

```
Static public getcookie(  $name) 
```

**Summary**

Get Cookie By Name.

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $name  |  |




<a name="method_delcookie" class="anchor"></a>
#### public delcookie() 

```
Static public delcookie(  $name) 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $name  |  |




<a name="method_request_data" class="anchor"></a>
#### public request_data() : string&amp;#124;null

```
Static public request_data(string  $type = &#039;get&#039;, mixed  $name) : string&amp;#124;null
```

**Summary**

Get request data
* $_GET[$name]
* $_REQUEST[$name]
* $_POST[$name].

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code>string</code> | $type  | request method
                    * get = only accept get
                    * post = only accept post
                    * any = accept all request |
| <code>mixed</code> | $name  | What data requests will you take? |

**Returns:** string&#124;null


<a name="method_platformSlashes" class="anchor"></a>
#### public platformSlashes() 

```
Static public platformSlashes(  $path) 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $path  |  |




<a name="method_cors" class="anchor"></a>
#### public cors() 

```
Static public cors(boolean  $print_server = false) 
```

**Summary**

Cors domain verify, detect AJAX, and validate AJAX CORS.

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code>boolean</code> | $print_server  | Debug mode |



##### Tags
| Tag | Version | Description |
| --- | ------- | ----------- |
| todo |  | only allow CORS request |

<a name="method_isLocal" class="anchor"></a>
#### public isLocal() : boolean

```
Static public isLocal(string  $regex = null) : boolean
```

**Summary**

Check if current is localhost.

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code>string</code> | $regex  | new regex |

**Returns:** boolean


<a name="method_ip_in_multirange" class="anchor"></a>
#### public ip_in_multirange() 

```
Static public ip_in_multirange(  $ip, array  $ranges) 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $ip  |  |
| <code>array</code> | $ranges  |  |




<a name="method_ip_in_range" class="anchor"></a>
#### public ip_in_range() : boolean

```
Static public ip_in_range(string  $ip, string  $range) : boolean
```

**Summary**

Check if a given ip is in a network.

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
* See Also:
 * [https://gist.github.com/ryanwinchester/578c5b50647df3541794](https://gist.github.com/ryanwinchester/578c5b50647df3541794)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code>string</code> | $ip  | IP to check in IPV4 format eg. 127.0.0.1 |
| <code>string</code> | $range  | IP/CIDR netmask eg. 127.0.0.0/24, also 127.0.0.1 is accepted and /32 assumed |

**Returns:** boolean - true if the ip is in this range / false if not


<a name="method_is_google" class="anchor"></a>
#### public is_google() : boolean

```
Static public is_google() : boolean
```

**Summary**

Check if request is google.

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)

**Returns:** boolean


<a name="method_getRequestIP" class="anchor"></a>
#### public getRequestIP() 

```
Static public getRequestIP() 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)




<a name="method_isCloudflare" class="anchor"></a>
#### public isCloudflare() 

```
Static public isCloudflare() 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)




<a name="method__cloudflare_CheckIP" class="anchor"></a>
#### public _cloudflare_CheckIP() 

```
Static public _cloudflare_CheckIP(  $ip) 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $ip  |  |




<a name="method__cloudflare_Requests_Check" class="anchor"></a>
#### public _cloudflare_Requests_Check() 

```
Static public _cloudflare_Requests_Check() 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)




<a name="method_get_client_ip" class="anchor"></a>
#### public get_client_ip() 

```
Static public get_client_ip() 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)




<a name="method_useragent" class="anchor"></a>
#### public useragent() : string

```
Static public useragent() : string
```

**Summary**

Get Useragent.

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)

**Returns:** string


<a name="method_print_server" class="anchor"></a>
#### public print_server() 

```
Static public print_server() 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)




<a name="method_get_url_path" class="anchor"></a>
#### public get_url_path() : string

```
Static public get_url_path(string&amp;#124;array  $path, boolean  $cache = null) : string
```

**Summary**

Get URL from local file.

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code>string&#124;array</code> | $path  | destinations
                           * `array` will be looped, which found first, return them |
| <code>boolean</code> | $cache  |  |

**Returns:** string - if empty == not found


<a name="method_ddos_key" class="anchor"></a>
#### public ddos_key() 

```
Static public ddos_key() 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)




<a name="method_sanitize_output" class="anchor"></a>
#### public sanitize_output() 

```
Static public sanitize_output(string  $buffer) 
```

**Summary**

Minify HTML.

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code>string</code> | $buffer  |  |




<a name="method_trycatch" class="anchor"></a>
#### public trycatch() 

```
Static public trycatch(  $try) 
```

**Details:**
* Inherited From: [\MVC\helper](../classes/MVC.helper.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code></code> | $try  |  |





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