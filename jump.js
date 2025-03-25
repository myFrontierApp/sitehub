$(document).ready(function () {
  // Jump to other web sites.
  $("#jump_selection").change(function() {
    var newv = $(this).val();
    if (newv && newv.length > 0) {
      window.location.href = newv;
    }
  });
});
