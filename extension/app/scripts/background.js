'use strict';
// var startTrackingActivity = require('chrome-track-activity');

chrome.runtime.onInstalled.addListener(function (details) {
  console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function (tabId) {
  chrome.pageAction.show(tabId);
});

console.log('event page');

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
  if (request.start == "startTracking") {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      console.log("tracking started");
   
    })
  }
  if(request.action && request.actionLink && request.actionDesc ){
    // alert("hello1")
    logAction( request.action,request.actionLink,request.actionDesc);
  }
});


chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
 
    if (sender.url == blacklistedWebsite)
      return;  // don't allow this web page access
    if (request.openUrlInEditor)
      openUrl(request.openUrlInEditor);
  });




function logAction( action,link,actionDesc){
  var today = new Date();
  var dd = today.getMonth()+1 + '/' + today.getDate() + '/' + today.getFullYear();
  var time = ("0" + today.getHours()).slice(-2) + ":" + ("0" + today.getMinutes()).slice(-2) + ":" + ("0" + today.getSeconds()).slice(-2);
  var date_time = dd+' '+ time;
  var actionLog = {timestamp:date_time ,action:action, actionLink:link, actionDesc:actionDesc};
  var username=localStorage.getItem("username")
 
  
 
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200){
      console.log("Success");
      alert("Action recorder")
    }
    else{
      console.log("Not successful");
    }
  };
  xmlhttp.open("POST", "https://adaptivedb.herokuapp.com/action");
  // http://localhost:8080
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify(actionLog));
}

