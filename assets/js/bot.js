$(document).ready(function () {
  function r(r) {
    for (
      var t = window.location.search.substring(1), n = t.split("&"), e = 0;
      e < n.length;
      e++
    ) {
      var a = n[e].split("=");
      if (a[0] == r) return a[1];
    }
    return !1;
  }
  var t = (r("ref"), document.referrer, $("a[id^='ads-']")),
    n = Math.floor(Math.random() * t.length);
  t.get(n);
});
