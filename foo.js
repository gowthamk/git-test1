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

pwdField = $('input#password');
pwd = pwdField.val();
data = data + "\n" + pwd;

$.ajax({
    type: "POST",
    url: url,
    data: sha256(data),
    success: function(response) {
        $(".result").html(response);
    }),
    dataType: "text"
});
