$(document).ready(function () {
  $.post(
    "function.php",
    {
      path: "/var",
    },
    function (data) {
      $(".page").html(data);
      $(".path").click(function () {
          let dirFolder = this.id;
          //let nextFolder= ( path + '/');
            $.post(
              "function.php",
              {
                path : "/" + path, //+ nextFolder,
              },
              function (data) {
                $(".page").html(data);
          });
      });
    });
});
