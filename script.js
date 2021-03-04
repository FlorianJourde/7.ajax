$(document).ready(function () {
  let getFiles = function (pathValue) {
    $.post(
      "function.php",
      {
        path: pathValue,
      },
      function (data) {
        $(".pageContent").html(data);
        $(".path").click(function () {
          let currentPathValue = $("#currentPath").val();
          if (currentPath !== "/") {
            newPath = currentPathValue + "/" + this.id;
          } else {
            newPath = currentPathValue + this.id;
          }
          $("#currentPath").val(newPath);
          getFiles(newPath + "/");
        });
      }
    );
  };

  getFiles("/");

  $("#previous").click(function () {
    let currentPathValue = $("#currentPath").val();
    let pathToArray = currentPathValue.split("/");
    pathToArray.pop();
    let newPath = pathToArray.join("/");
    $("#currentPath").val(newPath);
    getFiles(newPath + "/");
  });
});
