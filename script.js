$(document).ready(function () {
  let getFiles = function (pathValue) {
    $.post(
      "function.php",
      {
        path: pathValue,
      },
      function (data) {
        $("#currentPath").val(pathValue);
        $(".pageContent").html(data);
        $(".path").click(function () {
          let currentPathValue = $("#currentPath").val();
          let newPathValue = currentPathValue + this.id + "/";
          $("#currentPath").val(newPathValue);
          getFiles(newPathValue);
        });
      }
    );
  };
  getFiles("/");
});
