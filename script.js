$(document).ready(function () {
  $(".page").click(function () {
    let directory = $(".page").val();
    $.post(
      "functions.php",
      {
        search: searchValue,
      },
      function (data) {
        $("#directory").html(data);
      }
    );
  });
});
