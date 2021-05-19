# [Universal Framework PHP Documentation](../home.md)

# Class: \PHPWee\CssAtKeyframesRulesetStartToken
### Namespace: [\PHPWee](../namespaces/PHPWee.md)
---
**Summary:**

This {@link aCssToken CSS token} represents the start of a ruleset of a @keyframes at-rule block.

**Description:**

Every token has to extend this class.

---
### Constants
* No constants found
---
### Properties
* [public $Selectors](../classes/PHPWee.CssAtKeyframesRulesetStartToken.md#property_Selectors)
---
### Methods
* [public __toString()](../classes/PHPWee.CssAtKeyframesRulesetStartToken.md#method___toString)
* [public __construct()](../classes/PHPWee.CssAtKeyframesRulesetStartToken.md#method___construct)
---
### Details
* File: [phpwee\src\CssMin\CssMin.php](../files/phpwee.src.CssMin.CssMin.md)
* Package: Default
* Class Hierarchy:  
  * [\PHPWee\aCssToken](../classes/PHPWee.aCssToken.md)
  * [\PHPWee\aCssRulesetStartToken](../classes/PHPWee.aCssRulesetStartToken.md)
  * \PHPWee\CssAtKeyframesRulesetStartToken
* See Also:
  * [http://code.google.com/p/cssmin/](http://code.google.com/p/cssmin/)
---
### Tags
| Tag | Version | Description |
| --- | ------- | ----------- |
| author |  | Joe Scylla <joe.scylla@gmail.com> |
| copyright |  | 2008 - 2011 Joe Scylla <joe.scylla@gmail.com> |
| license |  | http://opensource.org/licenses/mit-license.php MIT License |
| version | 3.0.1 |  |
---
## Properties
<a name="property_Selectors"></a>
#### public $Selectors : array
---
**Summary**

Array of selectors.

**Type:** array

**Details:**



---
## Methods
<a name="method___toString" class="anchor"></a>
#### public __toString() : string

```
public __toString() : string
```

**Summary**

Implements {@link aCssToken::__toString()}.

**Details:**
* Inherited From: [\PHPWee\CssAtKeyframesRulesetStartToken](../classes/PHPWee.CssAtKeyframesRulesetStartToken.md)

**Returns:** string


<a name="method___construct" class="anchor"></a>
#### public __construct() : void

```
public __construct(array  $selectors = array()) : void
```

**Summary**

Set the properties of a ruleset token.

**Details:**
* Inherited From: [\PHPWee\CssAtKeyframesRulesetStartToken](../classes/PHPWee.CssAtKeyframesRulesetStartToken.md)
##### Parameters:
| Type | Name | Description |
| ---- | ---- | ----------- |
| <code>array</code> | $selectors  | Selectors of the ruleset |

**Returns:** void



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