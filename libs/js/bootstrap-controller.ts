if (!isnode()) {
  $(document).ready(function (e) {
    $(document).on("click", "[data-trigger]", function (e) {
      e.preventDefault();
      const t = $(this);
      switch (t.data("trigger")) {
        case "modal":
          var target = $(t.data("target"));
          console.log(`open modal ${t.data("target")}`);
          if (target.length) {
            target.modal("show");
          }
          break;
      }
    });
    //href hyperlink button
    $(document).on("click", "button[href].btn-link", function (e) {
      e.preventDefault();
      location.href = $(this).attr("href");
    });
    /**
     * open in new tab
     */
    $(document.body).on(
      "click",
      'a[id="newtab"],[newtab],[data-newtab]',
      function (e) {
        e.preventDefault();
        const t = $(this);
        if (t.attr("href")) {
          if (t.data("newtab")) {
            //data-newtab hide referrer
            window
              .open("http://href.li/?" + $(this).data("newtab"), "newtab")
              .focus();
          } else {
            openInNewTab(
              t.attr("href"),
              t.data("name") ? t.data("name") : "_blank"
            );
          }
        }
      }
    );
  });
}

/**
 * open in new tab
 * @param url
 * @param name
 */
function openInNewTab(url: string, name: string) {
  if (typeof url != "undefined" && typeof name != "undefined") {
    var win = window.open(url, name);
    win.focus();
  }
}
