"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const animeController_1 = __importDefault(require("../controller/animeController"));
class AnimeRoute {
    // Constructor
    constructor() {
        this.apiRouteAnime = (0, express_1.Router)();
        this.loadRoutes();
    }
    //Functions
    loadRoutes() {
        this.apiRouteAnime.get("/all", animeController_1.default.obtainAllAnimes);
        this.apiRouteAnime.get("/one/:codAnime", animeController_1.default.obtainOneAnime);
        this.apiRouteAnime.post("/add", animeController_1.default.addNewAnime);
        this.apiRouteAnime.put("/update/:codAnime", animeController_1.default.updateAnAnime);
        this.apiRouteAnime.delete("/delete/:codAnime", animeController_1.default.deleteAnAnime);
    }
}
const animeRoute = new AnimeRoute();
exports.default = animeRoute.apiRouteAnime;
