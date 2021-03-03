$(document).ready(function () {
  $.post(
    "function.php",
    {
      path: "/",
    },
    function (data) {
      $(".page").html(data);
      $(".path").click(function () {
        let dirPath = this.id;
        $.post(
          "function.php",
          {
            path: "/" + dirPath,
          },
          function (data) {
            $(".page").html(data);
          }
        );
      });
    }
  );
});
