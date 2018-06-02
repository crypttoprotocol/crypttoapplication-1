NEWSCHEMA('User').make(function(schema) {
  schema.define('email', 'Email', true);
  schema.define('password', 'String(30)', true);
  schema.define('wallet', 'String(1000)', true);
  schema.addWorkflow('login', function(error, model, controller, callback) {
    // TODO: Implement the login flow and store into mongo db.

    // Get the collection called 'users'
    var users = DATABASE('users');
    var data = {id: model.email, password: model.password, wallet: model.wallet};

    users.findOne(data, function(err, result) {
      if (err) throw err;

      if (result == null) {
        // Insert account data
        // We have to check the wallet into the block chain whether it is valid or not.
        users.insert(data);
        callback(SUCCESS(true));
      } else {
        // Fail creating a account.
        // TODO: Make the redirection to signup page.
        callback(SUCCESS(false));
      }
    });
  });
});

