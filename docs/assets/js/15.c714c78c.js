(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{394:function(t,e,a){"use strict";a.r(e);var r=a(26),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"unified-asset-installer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unified-asset-installer"}},[t._v("#")]),t._v(" Unified Asset Installer")]),t._v(" "),a("p",[t._v("phpDocumentor relies on specific directory locations for templates and plugins.\nBy default "),a("a",{attrs:{href:"http://getcomposer.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("Composer"),a("OutboundLink")],1),t._v(" is unable to install in an other\ndirectory than /vendor except when using a\n"),a("a",{attrs:{href:"http://getcomposer.org/doc/articles/custom-installers.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Custom Installer"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("p",[t._v("This Custom Installer for Composer will trigger on the following library types\nand provide custom behaviour for those.")]),t._v(" "),a("ul",[a("li",[a("em",[t._v("phpdocumentor-template")]),t._v(", install files into /data/template instead of /vendor")])]),t._v(" "),a("h2",{attrs:{id:"usage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),a("p",[t._v("In order to tell a template to use this installer you need to add the following\n"),a("em",[t._v("composer.json")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{\n    "name": "phpdocumentor/template-$NAME$",\n    "type": "phpdocumentor-template",\n    "license": "MIT"\n    "repositories":[\n        { "type":"git", "url":"http://github.com/phpDocumentor/UnifiedAssetInstaller" }\n    ],\n    "require": {\n        "phpdocumentor/unified-asset-installer":"*"\n    }\n}\n')])])]),a("p",[t._v("The type element will instruct Composer to use this Custom Installer.")]),t._v(" "),a("h2",{attrs:{id:"todo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#todo"}},[t._v("#")]),t._v(" TODO")]),t._v(" "),a("ul",[a("li",[t._v("Add the "),a("em",[t._v("phpdocumentor-plugin")]),t._v(" library type as well.")]),t._v(" "),a("li",[t._v("install a custom Packagist or Satis instance instead of using the direct git\nrepo")])]),t._v(" "),a("h2",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),a("h2",{attrs:{id:"what-s-up-with-the-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-up-with-the-name"}},[t._v("#")]),t._v(" What's up with the name?")]),t._v(" "),a("p",[t._v("Due to a "),a("a",{attrs:{href:"https://github.com/composer/composer/issues/655",target:"_blank",rel:"noopener noreferrer"}},[t._v("bug in Composer"),a("OutboundLink")],1),t._v(" at\ntime of writing of this document must the name be alphabetically LATER than the\nword "),a("em",[t._v("template")]),t._v(".")])])}),[],!1,null,null,null);e.default=s.exports}}]);