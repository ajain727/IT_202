$(document).ready(function() {
    $("#confirmButton").click(function() {
        var email1 = $("#email1").val();
        var email2 = $("#email2").val();
        $(".required").hide();
        if (email1 === "") {
            $("#email1Error").text("This field is required.").show();
        } else {
            $("#email1Error").hide();
        }
        if (email2 === "") {
            $("#email2Error").text("This field is required.").show();
        } else {
            $("#email2Error").hide();
        }
        if (email1 !== "" && email2 !== "") {
            if (email1 === email2) {
                alert("Email confirmation Successful");
            } else {
                $("#email2Error").text("The email addresses must match.").show();
            }
        }
    });
});