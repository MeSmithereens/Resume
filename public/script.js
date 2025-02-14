$(document).ready(function() {
    // Show the input field and overlay when the 'Organize Your Life' button is clicked
    $('#organizeButton').click(function() {
        $('#folderinputdiv').show(); // Show the input modal
        $('#overlay').show(); // Show the overlay
    });

    // Create a new folder button when the 'Submit' button is clicked
    $('#submitFolderName').click(function() {
        var folderName = $('#folderNameInput').val().trim(); // Get the folder name
        
        // Check if folder name is not empty
        if (folderName) {
            // Create a new folder button
            var newFolderButton = $('<button></button>')
                .addClass('folderButton')
                .text(folderName)
                .click(function() {
                    alert('You clicked the folder: ' + folderName);
                });
            
            // Append the new button to the folder container
            $('#folderContainer').append(newFolderButton);

            // Clear the input field and hide the modal and overlay
            $('#folderNameInput').val('');
            $('#folderinputdiv').hide();
            $('#overlay').hide();
        } else {
            alert("Please enter a folder name.");
        }
    });

    // Close the modal if the overlay is clicked
    $('#overlay').click(function() {
        $('#folderinputdiv').hide();
        $('#overlay').hide();
    });
});
