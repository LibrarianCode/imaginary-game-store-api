"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const gameDao_1 = __importDefault(require("../dao/gameDao"));
class GameController extends gameDao_1.default {
    // Variables
    // Functions
    addNewGame(req, res) {
        delete req.body._id;
        const objGame = req.body;
        GameController.addGame(res, objGame);
    }
    obtainAllGames(req, res) {
        GameController.getAllGames(res);
    }
    obtainOneGame(req, res) {
        const codigo = String(req.params.codGame);
        if (codigo != null) {
            GameController.getGameByIndex(res, codigo);
        }
        else {
            res.status(400).json({ message: "Invalid index for obtaining game" });
        }
    }
    deleteAGame(req, res) {
        const codigo = String(req.params.codGame);
        if (codigo != null) {
            GameController.deleteGame(res, codigo);
        }
        else {
            res.status(400).json({ message: "Invalid index for deleting game" });
        }
    }
    updateAGame(req, res) {
        const objGame = req.body;
        const codigo = String(req.params.codGame);
        if (codigo != null) {
            GameController.updateGame(res, codigo, objGame);
        }
        else {
            res.status(400).json({ message: "Invalid index for updating game" });
        }
    }
}
const gameController = new GameController();
exports.default = gameController;
