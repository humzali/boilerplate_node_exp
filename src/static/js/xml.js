
// GET REQUEST TO GITHUB to grab data

$.getJSON("https://api.github.com/users/mralexgray/repos", function(data) {

    // display id's to console
    for(i=0; i<data.length; i++) {
        console.log(data[i].id);
    }

    var repoid = data[0].id;
    var name = data[0].name;
    var fullname = data[0].full_name;

    var repo = {
        "repoid" : repoid,
        "name" : name,
        "fullname" : fullname
    };


    // POST REQUEST to our local server to CREATE new repo
    // with data grabbed from first entry in JSON from github

    $.post('http://localhost:7777/newRepo', repo, function(result) {
            console.log(result);

    });
});

// GET REQUEST to find user with officialid (taken from mongo) ... for some reason console.log(data)
// is printing null TODO ask BB
$.get('http://localhost:7777/findRepo', { officialid : "578323763a0b38199ba58bd4" }, function(data) {
    console.log("get success")
    console.log(data);
});

//UPDATE REQUEST
$.post('http://localhost:7777/updateRepo', { officialid: "578323763a0b38199ba58bd4"}, function(data) {
    console.log("update success");
    console.log(data);
});


// DELETE REQUEST
$.ajax({
    url: 'http://localhost:7777/deleteRepo',
    type: 'DELETE',
    data: {officialid: "57831fb53a0b38199ba58bd3"},
    success: function(result) {
        console.log("delete success")
    }
});




