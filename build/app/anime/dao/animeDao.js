"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const animeSchema_1 = __importDefault(require("../../schemas/animeSchema"));
class AnimeDao {
    // Variables
    // Functions
    static addAnime(res, objAnime) {
        return __awaiter(this, void 0, void 0, function* () {
            animeSchema_1.default.create(objAnime).then((answer) => {
                res.status(200).json({ message: "Success Anime registered", id: answer._id });
            }).catch((myErrorsito) => {
                console.log(myErrorsito);
                res.status(400).json({ message: "Failure to register anime" });
            });
        });
    }
    static getAllAnimes(res) {
        return __awaiter(this, void 0, void 0, function* () {
            animeSchema_1.default.find().sort({ nameAnime: 1 })
                .then((answer) => {
                res.status(200).json(answer);
            }).catch((myErrorsito) => {
                res.status(400).json({ message: "Failure to get all animes" });
            });
        });
    }
    static getAnimeByIndex(res, codAnime) {
        return __awaiter(this, void 0, void 0, function* () {
            animeSchema_1.default.findById(codAnime)
                .then((answer) => {
                res.status(200).json(answer);
            }).catch((myErrorsito) => {
                res.status(400).json({ message: "Failure to get anime" });
            });
        });
    }
    static updateAnime(res, codAnime, objAnime) {
        return __awaiter(this, void 0, void 0, function* () {
            animeSchema_1.default.updateOne({ _id: codAnime }, objAnime)
                .then((answer) => {
                res.status(200).json({ message: "Success updating anime", modified: answer.modifiedCount });
            }).catch((myErrorsito) => {
                console.log(myErrorsito);
                res.status(400).json({ message: "Failure updating anime" });
            });
        });
    }
    static deleteAnime(res, codAnime) {
        return __awaiter(this, void 0, void 0, function* () {
            animeSchema_1.default.deleteOne({ _id: codAnime })
                .then((answer) => {
                res.status(200).json({ message: "Success deleting anime", modified: answer.deletedCount });
            }).catch((myErrorsito) => {
                res.status(400).json({ message: "Failure deleting anime" });
            });
        });
    }
}
exports.default = AnimeDao;
