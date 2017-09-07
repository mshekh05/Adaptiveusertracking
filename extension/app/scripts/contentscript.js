'use strict';

console.log('Start of content script');

chrome.runtime.sendMessage({start:"startTracking"});

var question = document.getElementsByClassName('question-hyperlink');

for (var i=0; i < question.length; i++) {
  question[i].onclick = function(){
    alert(this.innerHTML);
    var link=this.innerHTML
    var action="Question selected"
    var description = "User selected a question"
    alert(link +' **** ' + action  +'  ' +  description)
    chrome.runtime.sendMessage({action:action,actionLink:link,actionDesc:description});
  }
}

var post_tag = document.getElementsByClassName('post-tag');

for(var i=0; i<post_tag.length; i++){
  post_tag[i].onclick = function () {
    var action="Post selected"
    var description = "User selected a Post"
    var link = this.innerHTML;
    chrome.runtime.sendMessage({action:action,actionLink:link,actionDesc:description});
  }
}

var tabs = document.getElementsByClassName('js-gps-track');
for(var i=0; i<tabs.length; i++){
  tabs[i].onclick = function () {
    var action="Tab Changed"
    var description = "User selected a Different Tab"
    var link = this.innerHTML;
    chrome.runtime.sendMessage({action:action,actionLink:link,actionDesc:description});
  }
}


var pages = document.getElementsByClassName('page-numbers');
for(var i=0; i<pages.length; i++){
  pages[i].onclick = function () {
    var action="Pagenumber selected"
    var description = "User selected a Pagenumber"
    var link = this.innerHTML;
    chrome.runtime.sendMessage({action:action,actionLink:link,actionDesc:description});
  }
}


var jobs = document.getElementsByClassName('jobs');
for(var i=0; i<jobs.length; i++){
  jobs[i].onclick = function () {
    var action="Jobs"
    var description = "User selected a browsing jobs"
    var link = "https://stackoverflow.com//jobs?med=site-ui&ref=jobs-tab";
    chrome.runtime.sendMessage({action:action,actionLink:link,actionDesc:description});
  }
}


var comments = document.getElementsByClassName('comments-link');
for(var i=0; i<comments.length;i++){
  comments[i].onclick = function () {
    var action="Comment selected"
    var description = "User selected a Comment"
    var link = this.innerHTML;
    chrome.runtime.sendMessage({action:action,actionLink:link,actionDesc:description});
  }
}

var search = document.getElementsByClassName('js-search-submit');
for(var i=0;i<search.length;i++){
  search[i].onclick = function () {
    var action="Searched"
    var description = "User is Searching"
    var link = document.getElementsByClassName('js-search-field')[0].value;
    chrome.runtime.sendMessage({action:action,actionLink:link,actionDesc:description});
  }
}

var submit = document.getElementById('submit-button');
if(submit != undefined){
  submit.onclick = function () {
    var title = document.getElementsById('title');
    var question = document.getElementById('wmd-input').value();
    if(title == ""){
      var action="Answer posted"
      var description = "User Answered a question"
      var link = question;
    }
    else{
      var action="Question posted"
      var description = "User posted a Question"
      var link = title+"\n"+question;
    }
    chrome.runtime.sendMessage({action:action,actionLink:link,actionDesc:description});
  }
}



var vote_up = document.getElementsByClassName('vote-up-off');
var question_text = document.getElementsByClassName('question_hyperlink');
for(var i=0;i<vote_up.length;i++){
  vote_up[i].onclick = function () {
    var link = question_text.innerHTML;
    var action="Vote-up"
    var description = "User Voted up on a post or comment"
    chrome.runtime.sendMessage({action:action,actionLink:link,actionDesc:description});
  }
}

var vote_down = document.getElementsByClassName('vote-down-off');
var question_text = document.getElementsByClassName('question_hyperlink');
for(var i=0;i<vote_down.length;i++){
  vote_down[i].onclick = function () {
    var link = question_text.innerHTML;
    var action="Vote-down"
    var description = "User Voted down on a post or comment"
    chrome.runtime.sendMessage({action:action,actionLink:link,actionDesc:description});
  }
}


var favorite = document.getElementsByClassName('star-off');
var question_text = document.getElementsByClassName('question_hyperlink');
for(var i=0;i<favorite.length;i++){
  favorite[i].onclick = function () {
    var link = question_text.innerHTML;
    var action="Star"
    var description = "User saved on a post or comment"
    chrome.runtime.sendMessage({action:action,actionLink:link,actionDesc:description});
  }
}
