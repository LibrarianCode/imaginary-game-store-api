"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// Functions
const connectionDB = () => {
    const url = String(process.env.URL_MONGO);
    (0, mongoose_1.connect)(url)
        .then(() => {
        console.log("Connection estblished with " + url);
    }).catch((myErrorsito) => {
        console.log(myErrorsito);
    });
};
exports.default = connectionDB;
