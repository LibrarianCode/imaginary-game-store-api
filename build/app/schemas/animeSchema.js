"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AnimeSchema = new mongoose_1.Schema({
    nameAnime: { type: String, required: true },
    descriptionAnime: { type: String, required: true },
    seasonsAnime: { type: Number, required: true },
    releaseDateAnime: { type: Date, required: true },
    imageAnime: { type: String, required: true },
    base64Anime: { type: String, required: false, maxlength: 5000000 }
});
exports.default = (0, mongoose_1.model)("Anime", AnimeSchema, "Anime");
