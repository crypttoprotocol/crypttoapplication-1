NEWSCHEMA('User').make(function(schema) {
        schema.define('email', 'Email', true);
        schema.define('password', 'String(30)', true);
        schema.define('wallet', 'String(1000)', true);
        schema.addWorkflow('login', function(error, model, controller, callback) {
            // TODO: Implement the login flow and store into mongo db.
        });
});

