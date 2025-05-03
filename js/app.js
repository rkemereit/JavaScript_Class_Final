/**
 * @date 12/8/24
 * @author Richard Kemereit
 * @file app.js
 * 
 */


"use strict";

$(document).ready(function() {
    // Initialize the accordion
    $("#polka").accordion({
        heightStyle: "content", 
        collapsible: true,
        icons: {
            header: 'ui-icon-circle-plus',
            activeHeader: 'ui-icon-circle-minus'
        },
        active: 0, // Open the "Personal Info" tab by default
        beforeActivate: function(event, ui) {
            if (event.originalEvent && event.originalEvent.target.tagName === "H3") {
                return false; // Prevent the default activation of panels if a header is clicked
            }
        }
    });

    // Initialize the jQuery Validation plugin
    $("#jobApp").validate({
        rules: {
            lastName: "required",
            firstName: "required",
            dob: "required",
            streetAddress: "required",
            city: "required",
            email: "required",
            phone: "required",
            education: "required",
            school: "required",
            title1: "required",
            employer1: "required",
            startDate1: "required",
            endDate1: "required",
            description1: "required"


        },
        messages: {
            lastName: "The last name is required.",
            firstName: "The first name is required.",
            streetAddress: "The street address is required.",
            city: "The city is required.",
            email: "An email is required.",
            phone: "A phone number is required.",
            education: "Please select an education level.",
            school: "Please enter your last school.",
            title1: "Please enter the title of your last job.",
            employer1: "Please enter the name of your last employer.",
            startDate1: "Please enter the start date of your last job.",
            endDate1: "Please enter the end date of your last job",
            description1: "Please enter a brief description of your last job"
        }
    }); // end validate()

    // Function to validate fields and go to the next tab
    function goToNextTab(currentIndex) {
        var currentPanel = $("#polka").children(".ui-accordion-content").eq(currentIndex);

        if ($("#jobApp").valid()) {
            var nextIndex = currentIndex + 1;
            $("#polka").accordion("option", "active", nextIndex);
        } else {
            alert("Please fill out all required fields before proceeding.");
        }
    }

    // Event listeners for the "Next" buttons
    $("#next1").on("click", function() {
        goToNextTab(0);
    });

    $("#next2").on("click", function() {
        goToNextTab(1);
    });

    $("#next3").on("click", function() {
        goToNextTab(2);
    });

    // Ensure the first tab is active when the page loads
    $("#polka").accordion("option", "active", 0);
    
    // Handle form submission
    $("#jobApp").on("submit", function(event) {
        if (!$(this).valid()) {
            event.preventDefault(); // Prevent the default form submission if the form is invalid
            alert("Please fill out all required fields before submitting.");
        } else {
            // Hide the form and show the message
            $("#jobApp").hide();
            $("#message").show();
        }
    });
});
