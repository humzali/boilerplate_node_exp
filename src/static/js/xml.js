
// GET REQUEST TO GITHUB to grab data + CREATE post to server with new data
function getRepos() {

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

  /*      // TEST repo to populate with stuff to delete
        var repo = {
            "repoid" : "0000",
            "name" : "to_be_deleted",
            "fullname" : "gayboyz"
        };
 */
        // POST REQUEST to our local server to CREATE new repo
        // with data grabbed from first entry in JSON from github

        $.post('http://localhost:7777/newRepo', repo, function(result) {
            console.log("success");
            console.log(result);

        });
    });
}


// GET REQUEST to find user with officialid (from MONGO)
function findRepo() {
    $.get('http://localhost:7777/findRepo', {officialid: "57843a00250aefabaf7ec9c8"}, function (data) {
        console.log("get success");
        console.log(data);
    });
}


//UPDATE REQUEST
function updateRepo() {
    $.post('http://localhost:7777/updateRepo', {officialid: "57843a00250aefabaf7ec9c8"}, function (data) {
        console.log("update success");
        console.log(data);
    });
}


// DELETE REQUEST
function deleteRepo() {
    $.ajax({
       url: 'http://localhost:7777/deleteRepo',
       type: 'DELETE',
       data: {officialid: "57843a00250aefabaf7ec9c8"},
       success: function(result) {
           $("#div1").html(result);
           console.log("delete success");
       }});
}