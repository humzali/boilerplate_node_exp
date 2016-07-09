

function loadDoc() {



    // make new httprequest object
    var xhttp = new XMLHttpRequest();
  	xhttp.onreadystatechange = function() {
  
  		if (xhttp.readyState == 4 && xhttp.status == 200) {
		
  			// take JSON object, turn into local object
			var data = JSON.parse(xhttp.responseText);
			console.log(data);
			var text = "";
			var i;

			var id = "ID:  ";
			var name = "  Name:   ";
			var fullname = "  Full Name:   ";	
			var login = "  Login   ";

			// start the parsing
			for(i = 0; i < data.length;i++) {
				text += id.bold() + data[i].id + name.bold() + data[i].name 
				+ fullname.bold() + data[i].full_name + login.bold() + 
				data[i].owner.login + "<br>";
			}

			document.getElementById("data").innerHTML = text;
    	}	
  
  	};

    xhttp.open("GET",  "https://api.github.com/users/mralexgray/repos", true);
    xhttp.send();


    /* trying to set up a post request */
    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {

        // add in console.log error messages to find if some issues
        if(xhttp2.readyState == 4 && xhttp2.status == 201) {

            console.log('update succesful');
        }


    }



    /* what does this do?? */
    var Repo = require('./static/model/repo');
    


}


