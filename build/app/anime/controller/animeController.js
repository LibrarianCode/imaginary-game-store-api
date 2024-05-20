"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const animeDao_1 = __importDefault(require("../dao/animeDao"));
class AnimeController extends animeDao_1.default {
    // Variables
    // Functions
    addNewAnime(req, res) {
        delete req.body._id;
        const objAnime = req.body;
        AnimeController.addAnime(res, objAnime);
    }
    obtainAllAnimes(req, res) {
        AnimeController.getAllAnimes(res);
    }
    obtainOneAnime(req, res) {
        const codigo = String(req.params.codAnime);
        if (codigo != null) {
            AnimeController.getAnimeByIndex(res, codigo);
        }
        else {
            res.status(400).json({ message: "Invalid index for obtaining anime" });
        }
    }
    deleteAnAnime(req, res) {
        const codigo = String(req.params.codAnime);
        if (codigo != null) {
            AnimeController.deleteAnime(res, codigo);
        }
        else {
            res.status(400).json({ message: "Invalid index for deleting anime" });
        }
    }
    updateAnAnime(req, res) {
        const objAnime = req.body;
        const codigo = String(req.params.codAnime);
        if (codigo != null) {
            AnimeController.updateAnime(res, codigo, objAnime);
        }
        else {
            res.status(400).json({ message: "Invalid index for updating anime" });
        }
    }
}
const animeController = new AnimeController();
exports.default = animeController;
