var count = 0;
$("btnAjaxCall").click(function () {
    fetchDataAndDisplay();
})
function fetchDataAndDisplay() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "GET",
    }).done(function (e) {
        var start = count > 0 ? 5 * count : count;
        var end = start + 5;
        var str = '';
        for (var i = start; i < end; i++) {
            str = '<div class="item-details">' + 'USER ID is=' + e[i].userID + '<br/>' + 'Title is =' + e[i].title + '<br/>' + "</div>";
        }
        if (start >= e.length - 5) {
            count = 0;
            $(".display-data").append("List Traver over");
            return;
        }
        count++;
        $(".display-data").empty();
        $(".display-data").append(str);
    });
}