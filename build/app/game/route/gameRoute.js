"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const gameController_1 = __importDefault(require("../controller/gameController"));
class GameRoute {
    // Constructor
    constructor() {
        this.apiRouteGame = (0, express_1.Router)();
        this.loadRoutes();
    }
    //Functions
    loadRoutes() {
        this.apiRouteGame.get("/all", gameController_1.default.obtainAllGames);
        this.apiRouteGame.get("/one/:codGame", gameController_1.default.obtainOneGame);
        this.apiRouteGame.post("/add", gameController_1.default.addNewGame);
        this.apiRouteGame.put("/update/:codGame", gameController_1.default.updateAGame);
        this.apiRouteGame.delete("/delete/:codGame", gameController_1.default.deleteAGame);
    }
}
const gameRoute = new GameRoute();
exports.default = gameRoute.apiRouteGame;
