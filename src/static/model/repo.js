/**
 Created by Humza under supreme guidance of BB.
 Learning CRUD
 **/

/* not sure what this does .. */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var repoSchema = new Schema({
    id: Number,
    name: String,
    fullname: String
});


var Repo = mongoose.model('Repo', repoSchema);

module.exports = Repo;



// old shit from other file
// module.exports = mongoose.model('Repo', RepoScheme);

