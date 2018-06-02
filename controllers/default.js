exports.install = function() {
  F.route('/', view_main);
  F.route('/signup', view_signup);
  F.route('/signup', json_login, ['post', '*User']);
  //F.route('/sky', image_download);
};

function view_main() {
  var self = this;
  self.view('index');
}

function view_signup() {
  var self = this;
  self.view('signup');
}

function json_login() {
  var self = this;
  // TODO : Implement workflow about the id and wallet.
  self.body.$workflow('login', self, self.callback());
}

function image_download() {
  this.image('images/sky.jpg', function(image) {
    image.resize('150%');
    image.minify();
  });
}
