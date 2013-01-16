
var uuid = require("node-uuid")
  , db = require("simple-db");

exports.list = function(user, cb) {
  db.all(user, function(err, apps) {
    if(err) return cb(err);
    cb(null, apps);
  });
};

exports.get = function(name, cb) {
  db.all("apps", name, cb);
};

exports.create = function(newApp, user, cb) {
  newApp.id = uuid.v4();
  newApp.name = newApp.name || uuid.v4();
  var now = new Date();
  newApp.created_at = newApp.updated_at =
    now.getUTCFullYear()+"/"+
    now.getUTCMonth()+"/"+
    now.getUTCDate()+" "+
    now.getUTCHours()+":"+
    now.getUTCMinutes()+":"+
    now.getUTCSeconds()+":"+
    now.getUTCSeconds()+": "+
    now.getTimezoneOffset()

  db.put("apps", newApp.name, newApp, function() {
    cb(null, newApp);
  });
};

exports.transfer = function(name, transfer_owner, user, cb) {
  cb(null, {
    name: name
  });
};

exports.rename = function(name, newName, user, cb) {
  apps[0].name = newName;
  cb(null, {
    name: newName
  });
};

exports.maintenance = function(name, mode, user, cb) {
  cb(null);
};

exports.destroy = function(name, user, cb) {
  cb(null);
};
