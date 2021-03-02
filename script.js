$(document).ready(function () {
  $.post(
    "function.php",
    {
      folder: "/",
    },
    function (data) {
      $(".page").html(data);
      $(".folder").click(function () {
        let dirFolder = this.id;
        $.post(
          "function.php",
          {
            folder: "/" + dirFolder,
          },
          function (data) {
            $(".page").html(data);
          }
        );
      });
    }
  );
});
