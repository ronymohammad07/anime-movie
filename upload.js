document.querySelector('.movie-image-div').addEventListener('click', function() {
    // Trigger a click on the hidden input[type="file"]
    
    document.getElementById('image').click(); 
  });
  
  // Listen for changes on the file input and display the selected file name
  document.getElementById('image').addEventListener('change', function() {
    const fileName = this.files[0] ? this.files[0].name : "No file chosen";
    console.log(fileName); // Log the file name to the console
    const fileNameDisplay = document.querySelector('.movie-image-div span');
    fileNameDisplay.textContent = fileName; // Update the text inside the span
  });
  