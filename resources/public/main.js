var CLOSURE_UNCOMPILED_DEFINES = {};
var CLOSURE_NO_DEPS = true;
if(typeof goog == "undefined") document.write('<script src="js/compiled/out/goog/base.js"></script>');
document.write('<script src="js/compiled/out/goog/deps.js"></script>');
document.write('<script src="js/compiled/out/cljs_deps.js"></script>');
document.write('<script>if (typeof goog == "undefined") console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?");</script>');
document.write('<script>goog.require("process.env");</script>');

document.write("<script>if (typeof goog != \"undefined\") { goog.require(\"figwheel.connect.build_dev\"); }</script>");
document.write('<script>goog.require("lein_tizen.core");</script>');