(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['three', 'D.js'], factory);
  }
  else if (typeof module === 'object' && module.exports) {
    module.exports = factory(require('three'), require('d.js'));
  }
  else {
    root.PhotoSphereViewer = factory(root.THREE, root.D);
  }
}(this, function(THREE, D) {
"use strict";

@@js

return PhotoSphereViewer;
}));
