(function(window) {
  var trackFn = function() {
    if (typeof(window.s_dtm) === 'undefined') {
      setTimeout(trackFn, 100);
    } else {
      var pathname = false ? "" : window.location.pathname;
      var t = dtm_s || {};
      t.pageName = "ftr:" + pathname.substr(1);
      t.pageURL = window.location.href;
      window.s_dtm.trackData(t);
    }
  };
  trackFn();
})(window);
