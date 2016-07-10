
// maybe this line belongs in server.js?? TODO ask BB
// var Repo = require('./static/model/repo');

// GET REQUEST TO GITHUB to grab data

$.getJSON("https://api.github.com/users/mralexgray/repos", function(data) {
    for(i=0; i<data.length; i++) {
        console.log(data[i].id);
    }
});

// POST IS NOW SUCCESFUL, BUT json not showing up in terminal, and no new files in DB

// test repo to POST, see if shows up in db
var repo = {
    "id": "0101",
    "name": "humza",
    "fullname" : "humza ali"
};

// CREATE -- POST request to local node.js to create new repo
$.post('http://localhost:7777/newRepo',

    repo,

    function() {
        console.log('success');
    }
);


/*
 // READ
 $.ajax({
 url: 'http://localhost:7777/findRepo',
 type: 'GET',
 success: function(result) {

 // do something with result
 // update html page with some shit
 }
 });

 // UPDATE
 $.ajax({
 url: 'http://localhost:7777/updateRepo'
 type: 'POST',
 success: function(result) {


 }
 });


 // DELETE
 $.ajax({
 url: 'http://localhost:7777/deleteRepo',
 type: 'DELETE',
 success: function(result) {
 // do something with the result
 }
 });


 */




// OLD JS for http requests

/*

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

*/
    /* trying to set up a post request
    var xhttp2 = new XMLHttpRequest();
    xhttp2.onreadystatechange = function() {

        // add in console.log error messages to find if some issues
        if(xhttp2.readyState == 4 && xhttp2.status == 201) {

            console.log('update succesful');
        }


    }
*/

//}


