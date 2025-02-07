// Function to create a box for each category and populate it with interactive elements
function createBox(category) {
    // Clear main content
    const mainContainer = document.querySelector('.main-container');
    mainContainer.innerHTML = `
      <div class="box">
        <h2>${category}</h2>
        <p>Organize your ${category.toLowerCase()} efficiently.</p>
        
        <div class="tools">
          <button onclick="addNotes()">Add Notes</button>
          <button onclick="addCalendar()">Add Calendar</button>
          <button onclick="addSpreadsheet()">Add Spreadsheet</button>
          <button onclick="addList()">Add List</button>
        </div>
      </div>
    `;
  }
  
  // Placeholder functions for each feature (Notes, Calendar, Spreadsheet, Lists)
  function addNotes() {
    alert("Adding Notes section...");
    // You can replace this with a dynamic section for notes management
  }
  
  function addCalendar() {
    alert("Adding Calendar section...");
    // You can replace this with a calendar library or custom calendar
  }
  
  function addSpreadsheet() {
    alert("Adding Spreadsheet section...");
    // You can implement an editable table here
  }
  
  function addList() {
    alert("Adding List section...");
    // You can implement an interactive list here
  }
  