var MC = require('mongodb').MongoClient;
var DB = null;

F.wait('database');

MC.connect(CONFIG('database'), function(err, db) {
  if (err) {
    throw err;
  }

  DB = db.db('total');
  F.wait('database');

  add_admin();
});

F.database = function(collection) {
  return collection ? DB.collection(collection) : DB;
};

// Add the admin into the database.
function add_admin()
{
  var users = DATABASE('users');
  var data = {id: CONFIG('admin-id'), password: CONFIG('admin-password'), wallet: CONFIG('admin-wallet'), role: 'admin'};
  users.findOne(data, function(err, result) {
      if (err) throw err;

      if (result == null) {
        users.insert(data);
      } else {
        console.log('there is the admin.');
      }
  });
}
