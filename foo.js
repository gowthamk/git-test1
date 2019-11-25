/*some computation on data */

$.ajax({
    type: "POST",
    url: url,
    data: sha256(data),
    success: function(response) {
        $(".result").html(response);
    }),
    dataType: "text"
});
