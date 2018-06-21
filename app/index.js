/*
 * Entry point for the watch app
 */
import { me as device } from "device";
import document from "document";

let syncTime = document.getElementById("sync-Time");
let day = document.getElementById("Day");
let mL = document.getElementById("MonthLable");
let month = document.getElementById("Month");
let DOMlable = document.getElementById("DOMlable");
let DOM = document.getElementById("DOM");
let tl = document.getElementById("TimeLable");
let myTime = document.getElementById("Time");

var time = device.lastSyncTime;

console.log("Last sync time was... " + device.lastSyncTime);

function refreshData() {
  

  syncTime.text = "Day";
  
  var whatDay = time.getDay();
  if(whatDay == 0){
     day.text = "Sun";
     }
  else if(whatDay == 1){
          day.text = "Mon";
          }
  else if(whatDay == 2){
          day.text = "Tues";
          }
  else if(whatDay == 3){
          day.text = "Wed";
          }
  else if(whatDay == 4){
          day.text = "Thur";
          }
  else if(whatDay == 5){
          day.text = "Fri";
          }
  else if(whatDay == 6){
          day.text = "Sat";
          }
  
  mL.text = "Month";
  
  var whatMonth = time.getMonth();
  
  if(whatMonth == 0){
     month.text = "Jan";
     }
  else if(whatMonth == 1){
    month.text = "Feb";
  }
  else if(whatMonth == 2){
    month.text = "Mar";
  }
  else if(whatMonth == 3){
    month.text = "Apr";
  }
  else if(whatMonth == 4){
    month.text = "May";
  }
  else if(whatMonth == 5){
    month.text = "Jun";
  }
  else if(whatMonth == 6){
    month.text = "Jul";
  }
  else if(whatMonth == 7){
    month.text = "Aug";
  }
  else if(whatMonth == 8){
    month.text = "Sep";
  }
  else if(whatMonth == 9){
    month.text = "Oct";
  }
  else if(whatMonth == 10){
    month.text = "Nov";
  }
  else if(whatMonth == 11){
    month.text = "Dec";
  }
  
  var whatDOM = time.getDate();
  
  DOMlable.text = "Date";
  
  DOM.text = whatDOM;
  
  tl.text = "Time";
  
  myTime.text = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  
}

refreshData();
setInterval(refreshData, 1000);
