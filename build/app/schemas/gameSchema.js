"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GameSchema = new mongoose_1.Schema({
    nameGame: { type: String, required: true },
    descriptionGame: { type: String, required: true },
    valueGame: { type: Number, required: true },
    releaseDateGame: { type: Date, required: true },
    imageGame: { type: String, required: true },
    base64Game: { type: String, required: false, maxlength: 5000000 }
});
exports.default = (0, mongoose_1.model)("Game", GameSchema, "Game");
