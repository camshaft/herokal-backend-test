
var config = {};

exports.list = function(app, cb) {
  cb(null, config[app] || {});
};

exports.add = function(app, params, cb) {
  for (var key in params) {
    config[app][key] = params[key];
  }
  cb(null, config[app]);
};

exports.remove = function(app, key, cb) {
  if (!config[app]) return cb(null, {});
  
  delete config[app][key];
  cb(null, config[app]);
};
