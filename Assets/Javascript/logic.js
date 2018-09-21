
firebase.initializeApp(config);


// Create a variable to reference the database.
var database = firebase.database();

// --------------------------------------------------------------
// Link to Firebase Database for viewer tracking


// --------------------------------------------------------------
// Initial Values
var employeeName = 0;
var role = "";
var startDate = "";
var monthlyRate = 0;

// Capture Button Click
$("#add-employee").on("click", function (event) {
  event.preventDefault();
  // Grabbed values from input boxes
  employeeName = $("#employeeName-input").val().trim();
  role = $("#role-input").val().trim();
  startDate = $("#startDate-input").val().trim();
  monthlyRate = $("#monthlyRate-input").val();

  database.ref().push({
    employeeName: employeeName,
    role: role,
    startDate: startDate,
    monthlyRate: monthlyRate
  });

    // Firebase watcher + initial loader HINT: .on("value")
    database.ref().on("child_added", function(childsnapshot) { 
            // Log everything that's coming out of snapshot
            console.log(childsnapshot.val());
            console.log(childsnapshot.val().employeeName);
            console.log(childsnapshot.val().role);
            console.log(childsnapshot.val().startDate);
            console.log(childsnapshot.val().monthlyRate);  
            
          // Change the HTML to reflect
          $("#employeeName").text(childsnapshot.val().employeeName);
          $("#role").text(childsnapshot.val().role);
          $("#startDate").text(childsnapshot.val().startDate);
          $("#monthlyRate").text(childsnapshot.val().monthlyRate);
    
      // Handle the errors
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });


});
