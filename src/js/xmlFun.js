
alert("work");

function loadDoc() {
  alert("hey1")	

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  
  	if(xhttp.readyState == 0) {

  		alert("RS0");
  	}
  	if(xhttp.readyState == 1) {
  		alert("RS1");

  	
  	/*
  	xhttp.setRequestHeader("Content-type", "application...");
	*/
  		
  	}
  	if(xhttp.readyState == 2) {
  		alert("RS2");
  		
  	}
  	if(xhttp.readyState == 3) {
  		alert("RS3");
  	
  	}

    


    if (xhttp.readyState == 4 && xhttp.status == 200) {
    	alert("hey2");
      document.getElementById("demo").innerHTML = xhttp.responseText;
    }
    
  };
  xhttp.open("GET", "http://www.google.com", true);
  xhttp.send();
}


/*
var xhr = new XMLHttpRequest();

xhr.open("POST", "https://feeds.finance.yahoo.com/rss/2.0/headline?s=yhoo&region=US&lang=en-US", true);
xhr.send();

xhr.addEventListener("readystatechange", processRequest, false);
		alert("test");

function processRequest(e) {
	
		// check for necesary conditions 

	if (xhr.readyState == 4 && xhr.status == 200) {

		// alert to check if we enter the if statement.. which we do... 

		alert("lol");

		// but for some reason , never get this alert to work 
		var response = JSON.parse(xhr.responseText);
		alert(xhr.responseText);

	}
}
*/

/* another approach... didnt work */
/*
function xmlFun() {

	var xhttp = new XMLHttpRequest(); 

	xhttp.onreadystatechange = xmlFun;

	xhttp.onreadystatechange = function() {

		if(xhttp.readyState == 4 && xhttp.status == 200) {
			document.getElementById("demo").innerHTML = xhttp.responseText;
		}
	};

	xhttp.open("GET","https://feeds.finance.yahoo.com/rss/2.0/headline?s=yhoo&region=US&lang=en-US", true);
	xhttp.send();

}
*/

