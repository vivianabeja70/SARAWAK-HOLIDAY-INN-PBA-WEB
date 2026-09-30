$(document).ready(function () {


    /* =================================================
       BOOK THIS PACKAGE
       ================================================= */

    $(".book-package").on("click", function () {

        var selectedPackage =
            $(this).attr("data-package");


        setTimeout(function () {

            $("#package")
                .val(selectedPackage)
                .selectmenu("refresh");

        }, 500);

    });



    /* =================================================
       BOOKING FORM
       ================================================= */

    $("#bookingForm").on("submit", function (event) {

        event.preventDefault();


        var name =
            $("#name").val().trim();


        var phone =
            $("#phone").val().trim();


        var email =
            $("#email").val().trim();


        var travelDate =
            $("#travelDate").val();


        var participants =
            $("#participants").val();


        var packageName =
            $("#package").val();


        var agree =
            $("#agree").is(":checked");



        $("#bookingMessage")
            .removeClass(
                "success-message error-message"
            )
            .hide()
            .html("");



        /* CHECK AGREEMENT */

        if (!agree) {

            $("#bookingMessage")
                .addClass("error-message")
                .html(
                    "You must agree first."
                )
                .show();

            return;
        }



        /* CHECK EMPTY FIELD */

        if (
            name === "" ||
            phone === "" ||
            email === "" ||
            travelDate === "" ||
            participants === "" ||
            packageName === ""
        ) {

            $("#bookingMessage")
                .addClass("error-message")
                .html(
                    "Please complete all booking details."
                )
                .show();

            return;
        }



        /* CHECK PARTICIPANTS */

        if (parseInt(participants) < 1) {

            $("#bookingMessage")
                .addClass("error-message")
                .html(
                    "Participants must be at least 1 person."
                )
                .show();

            return;
        }



        /* SUCCESS MESSAGE */

        $("#bookingMessage")
            .addClass("success-message")
            .html(

                "<strong>Booking submitted successfully!</strong><br><br>" +

                "Name: " + name + "<br>" +

                "Phone: " + phone + "<br>" +

                "Email: " + email + "<br>" +

                "Travel Date: " + travelDate + "<br>" +

                "Participants: " + participants + "<br>" +

                "Package: " + packageName

            )
            .show();

    });



    /* =================================================
       CLEAR BOOKING FORM
       ================================================= */

    $("#bookingForm").on("reset", function () {

        setTimeout(function () {

            $("#bookingMessage")
                .removeClass(
                    "success-message error-message"
                )
                .hide()
                .html("");

        }, 100);

    });



    /* =================================================
       CONTACT FORM
       ================================================= */

    $("#contactForm").on("submit", function (event) {

        event.preventDefault();


        var name =
            $("#contactName").val().trim();


        var email =
            $("#contactEmail").val().trim();


        var message =
            $("#message").val().trim();



        $("#contactMessage")
            .removeClass(
                "success-message error-message"
            )
            .hide()
            .html("");



        /* CHECK EMPTY FIELD */

        if (
            name === "" ||
            email === "" ||
            message === ""
        ) {

            $("#contactMessage")
                .addClass("error-message")
                .html(
                    "Please complete all contact details."
                )
                .show();

            return;
        }



        /* SUCCESS */

        $("#contactMessage")
            .addClass("success-message")
            .html(

                "<strong>Message sent successfully!</strong><br>" +

                "Thank you, " +
                name +
                ". We will contact you soon."

            )
            .show();



        $("#contactForm")[0].reset();

    });

});