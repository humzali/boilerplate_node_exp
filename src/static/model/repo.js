/**
 Created by Humza under supreme guidance of BB.
 Learning CRUD
 **/

/* not sure what this does .. */

'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RepoScheme = new Schema({
    id: Number,
    name: String,
    fullname: String
});

module.exports = mongoose.model('Repo', RepoScheme);



