     // function to calculate the results

    
    function validateForm() {
        var startLengthFeet = Number(document.getElementById("startLengthFeet").value);
        var endLengthFeet = Number(document.getElementById("endLengthFeet").value);
        var startBreadthFeet = Number(document.getElementById("startBreadthFeet").value);
        var endBreadthFeet = Number(document.getElementById("endBreadthFeet").value);
        if (startLengthFeet >= endLengthFeet) {
            alert("Starting Length should be less than Ending Length");
            return false;
        }
        if (startBreadthFeet >= endBreadthFeet) {
            alert("Starting Breadth should be less than Ending Breadth");
            return false;
        }
        return true;
    }

     function calculateResults()
     {
                 // get the input values
                 var startLengthFeet = Number(document.getElementById("startLengthFeet").value);
                // var startLengthInches = Number(document.getElementById("startLengthInches").value);
                 var endLengthFeet = Number(document.getElementById("endLengthFeet").value);
                // var endLengthInches = Number(document.getElementById("endLengthInches").value);
                 var startBreadthFeet = Number(document.getElementById("startBreadthFeet").value);
                 //var startBreadthInches = Number(document.getElementById("startBreadthInches").value);
                 var endBreadthFeet = Number(document.getElementById("endBreadthFeet").value);
                 //var endBreadthInches = Number(document.getElementById("endBreadthInches").value);
                 var selectNumber = Number(document.getElementById("selectNumber").value);
                 
                 // clear the results table
                 var table = document.getElementById("resultsTable");
                 while (table.rows.length > 1)
                  {
                     table.deleteRow(1);
                  }
                 startLengthInches=0;
                 startBreadthInches=0;
                 endBreadthInches=11;
                 endLengthInches=11;
                 // loop through the length and breadth values
                 for (var lengthFeet = startLengthFeet; lengthFeet <= endLengthFeet; lengthFeet++) {
                   for (var breadthFeet = startBreadthFeet; breadthFeet <= endBreadthFeet; breadthFeet++){
                     for (var lengthInches = startLengthInches; lengthInches <= 11; lengthInches++) {
                             for (var breadthInches = startBreadthInches; breadthInches <= 11; breadthInches++) {
                                 // calculate the total length and breadth in feet
                                 var length = Number(lengthFeet) + (Number(lengthInches) / 12);
                                 var breadth = Number(breadthFeet) + (Number(breadthInches) / 12);
                                 
                                 // calculate the Aya Shesha, Dhana Shesha, Runa Shesha, and Ayush Shesha values
                                 var aya_shesha = ((Number(length) * Number(breadth) * 9) % 8);
                                 var dhana_shesha =((Number(length) * Number(breadth) * 8) % 12);
                                 var runa_shesha = ((Number(length) * Number(breadth) * 3) % 8);
                                 var ayush_shesha = ((Number(length) * Number(breadth) * 9) % 120);
                                 if(dhana_shesha==0)
                                 {
                                   dhana_shesha=12;
                                 }
                                 if(runa_shesha==0)
                                 {
                                   runa_shesha=8;
                                 }
                                 if(ayush_shesha==0)
                                 {
                                   ayush_shesha=120;
                                 }
                                 var maxi=Number(selectNumber) + 0.2;
                                 var mini=Number(selectNumber) - 0.2;
                                 // check the conditions and add the values to the table
                                 if ((aya_shesha>mini && aya_shesha<maxi) && dhana_shesha > runa_shesha && ayush_shesha > 50) 
                                 {
                                     var newRow = table.insertRow();
                                     console.log(aya_shesha,selectNumber+0.2)
                                     newRow.insertCell().innerHTML = lengthFeet;
                                     newRow.insertCell().innerHTML = lengthInches;
                                     newRow.insertCell().innerHTML = breadthFeet
                                     newRow.insertCell().innerHTML = breadthInches
                                     newRow.insertCell().innerHTML = aya_shesha.toFixed(2);
                                     newRow.insertCell().innerHTML = dhana_shesha.toFixed(2);
                                     newRow.insertCell().innerHTML = runa_shesha.toFixed(2);
                                     newRow.insertCell().innerHTML = ayush_shesha.toFixed(2);
         
         // check the conditions and add the values to the table
         if (aya_shesha == selectNumber && dhana_shesha > runa_shesha && ayush_shesha > 50)
          {
         document.getElementById("resultsTable").appendChild(newRow);
          }
         }
         }
         }
         }
     }
         
         // display the table
         document.getElementById("resultsTable").style.display = "block";
         }