/*some computation on data */

$.ajax({
    type: "POST",
    url: url,
    data: data,
    success: function(response) {
        $(".result").html(response);
    }),
    dataType: "text"
});
