
$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});

document.getElementById("login-submit").onclick = function (event) { 
    event.preventDefault();
	alert("hello2");


	var username = document.getElementById("log-username").value;
    var password  = document.getElementById("log-password").value;
        alert(username)
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            // alert(JSON.parse(xmlHttp.responseText).quote);
            
            if (JSON.parse(xmlHttp.responseText).response == "Success"){
                alert("Login Success")
                // myStorage = window.localStorage;
                // // chrome.storage.local.set({'username1': username});
                
                // localStorage.setItem('username', username);
                window.location.replace('Main.html');
            }
            else{
                alert("Login Failed")
           
            }
        }
    }
     xmlHttp.open("POST","/login" , true); // true for asynchronous 
     xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
     xmlHttp.send(JSON.stringify({
      "username":String(username),
      "password":String(password),
      
    }));
     

};



document.getElementById("signup-submit").onclick = function (event) { 
    event.preventDefault();
	alert("hello");

    var fname = document.getElementById("signup-fname").value;
    var lname = document.getElementById("signup-lname").value;
    var email = document.getElementById("signup-email").value;
	var username = document.getElementById("signup-username").value;
    var password  = document.getElementById("signup-password").value;
   
  var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            // alert(JSON.parse(xmlHttp.responseText).quote);
            
            if (JSON.parse(xmlHttp.responseText).response == "Success"){
                alert("new user created")
                window.location.replace('Main.html?username=username');
            }
            else{
                alert(JSON.parse(xmlHttp.responseText).response)
           
            }
            // window.location.replace(xmlHttp.responseText);
            // callback(xmlHttp.responseText);
        }
    }
    
    
     xmlHttp.open("POST","/signup" , true); // true for asynchronous 
     xmlHttp.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
     xmlHttp.send(JSON.stringify({
      
      "fname":String(fname),
      "lname":String(lname),
      "email":String(email),
      "username":String(username),
      "password":String(password),
      
    }));
    
 
    

};