"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_dispatcher_1 = require("./api/main-dispatcher");
var express = require("express");
var app = express();
app.use(main_dispatcher_1.router);
app.listen(5050, function () { return console.log("Server has been started...!"); });
//# sourceMappingURL=main.js.map