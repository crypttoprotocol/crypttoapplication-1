exports.install = function() {
  F.route('/', view_main);
  F.route('/sky', image_download);
};

function view_main() {
  var self = this;
  self.view('index');
}


function image_download() {
  this.image('images/sky.jpg', function(image) {
    image.resize('150%');
    image.minify();
  });
}
