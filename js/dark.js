$(document).ready(function () {
  $("#toggle").click(function () {
    var dark = Cookies.get("dark");
    var domain = window.location.origin;
    url = domain.replace(/(https?:\/\/)?(www.)?/i, '');
    url = url.split('.');
    url = url.slice(url.length - 2).join('.');

    if (dark) {
      $("link[href='css/tema-dark.css']").remove();
      Cookies.remove("dark", {
        domain: `.${url}`,
        sameSite: 'strict',
        secure: true
      });
    } else {
      $('head').append('<link rel="stylesheet" href="css/tema-dark.css" type="text/css" />');
      Cookies.set("dark", 1, {
        expires: 31,
        domain: `.${url}`,
        sameSite: 'strict',
        secure: true
      });
    }
    return false;
  });
});