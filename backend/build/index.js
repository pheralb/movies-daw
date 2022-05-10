"use strict";

var _app = _interopRequireDefault(require("./app"));

require("./models/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("dotenv").config(); // Start the server on port... ->


var port = process.env.PORT || 3000;

_app["default"].listen(port);

console.log("🚀 [backend] Server listening on port:", port);