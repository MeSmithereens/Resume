$(document).ready(function() {
    // Initially hide the AboutMe div
    $("#AboutMe").hide();
    
    // Set the initial button text to "About Me!"
    $("#HideAbout").text("About Me!");
    
    // When the "HideAbout" button is clicked
    $("#HideAbout").click(function() {
        // If the AboutMe div is visible, hide it and change button text
        if ($("#AboutMe").is(":visible")) {
            $("#AboutMe").slideUp(500); // Hide the AboutMe div with a slide-up effect
            $("#HideAbout").text("About Me!"); // Change the button text to "About Me!"
        } else {
            // If the AboutMe div is hidden, show it and change button text back
            $("#AboutMe").slideDown(500); // Show the AboutMe div with a slide-down effect
            $("#HideAbout").text("Hide"); // Change the button text to "Show"
        }
    });

    // Dark mode toggle logic (unchanged)
    $("#darkModeToggle").click(function() {
        $("body").toggleClass("dark-mode");
        if ($("body").hasClass("dark-mode")) {
            $("#darkModeToggle").text("🍂");
            $("html").css("background-image", "url('https://codehs.com/uploads/e1572e0d0f5c52ca4d3ec46237ae7942')");
        } else {
            $("#darkModeToggle").text("❄️");
            $("html").css("background-image", "url('https://codehs.com/uploads/d879f800ffe85090486ab36085f70a23')");
        }
    });
    
    // Toggle functionality for other sections (unchanged)
    $(".info-content").hide();
    function toggleContent(content, cover) {
        $(cover).click(function() {
            $(cover).slideUp(500, function() {
                $(content).fadeIn(500);
            });
        });

        $(content).click(function() {
            $(content).fadeOut(500, function() {
                $(cover).slideDown(500);
            });
        });
    }

    toggleContent("#WhatIveDone", "#WhatIveDoneCover");
    toggleContent("#AwardsAchievements", "#AwardsAchievementsCover");
    toggleContent("#Skills", "#SkillsCover");
    toggleContent("#References", "#ReferencesCover");
});