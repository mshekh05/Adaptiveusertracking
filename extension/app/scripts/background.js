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
    alert("hello1")
    logAction( request.action,request.actionLink,request.actionDesc);
  }
});


chrome.runtime.onMessageExternal.addListener(
  function(request, sender, sendResponse) {
    alert("Mill gaya bawa")
    if (sender.url == blacklistedWebsite)
      return;  // don't allow this web page access
    if (request.openUrlInEditor)
      openUrl(request.openUrlInEditor);
  });




function logAction( action,link,actionDesc){
  var actionLog = {action:action, actionLink:link, actionDesc:actionDesc};
  var username=localStorage.getItem("username")
  alert("hello" + username)
  
 
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200){
      console.log("Success");
    }
    else{
      console.log("Not successful");
    }
  };
  xmlhttp.open("POST", "http://localhost:8080/action");
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify(actionLog));
}

