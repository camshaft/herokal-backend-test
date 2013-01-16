

module.exports.isAllowed = function(user, name, action, cb) {
  // This is a single tenant system; they always have permission
  cb(null, true);
};