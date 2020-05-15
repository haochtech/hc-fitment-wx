Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.reportFormID = function(e) {
    e && "the formId is a mock one" !== e && (o.add(e), t());
}, exports.reportUserBehavior = function(e, o) {
    (0, r.reportUserBehavior)(e, o), console.log("reportUserBehavior", e, o);
};

var e = require("50e3aa130a4f97a42ee2cf111c7b1d9d.js"), r = require("f5b982310b35490b3be56a448dd2faf8.js"), o = new Set(), t = (0, 
e.throttling)(function() {
    (0, r.commitFormID)(Array.from(o)), o.clear();
}, 1e3);