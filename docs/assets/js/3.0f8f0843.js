(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{407:function(e,t,n){},443:function(e,t,n){"use strict";n(407)},455:function(e,t,n){"use strict";n.r(t);var r=n(177),a=(n(225),{components:{ParentLayout:n(453).a},computed:{defaultTheme:function(){var e=this.$themeConfig.overrideTheme,t=this.$themeConfig.prefersTheme,n=!window.matchMedia("(prefers-color-scheme: light)").matches&&!window.matchMedia("(prefers-color-scheme: dark)").matches;if("object"===Object(r.a)(e)){var a=(new Date).getHours(),o=!1;for(var i in e){var s=e[i];if(s[0]<=s[1]){if(s[0]<=a&&a<s[1]){o=i;break}}else if(s[0]<=a&&a<24||0<=a&&a<s[1]){o=i;break}}return o}return"string"==typeof e?e:!(!t||!n)&&t}},beforeMount:function(){this.defaultTheme&&document.getElementsByTagName("html")[0].setAttribute("theme",this.defaultTheme)}}),o=(n(443),n(29)),i=Object(o.a)(a,(function(){var e=this.$createElement;return(this._self._c||e)("ParentLayout")}),[],!1,null,null,null);t.default=i.exports}}]);