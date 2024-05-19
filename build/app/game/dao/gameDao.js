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
const gameSchema_1 = __importDefault(require("../../schemas/gameSchema"));
class GameDao {
    // Variables
    // Functions
    static addGame(res, objGame) {
        return __awaiter(this, void 0, void 0, function* () {
            gameSchema_1.default.create(objGame).then((answer) => {
                res.status(200).json({ message: "Success Game registered", id: answer._id });
            }).catch((myErrorsito) => {
                console.log(myErrorsito);
                res.status(400).json({ message: "Failure to register game" });
            });
        });
    }
    static getAllGames(res) {
        return __awaiter(this, void 0, void 0, function* () {
            gameSchema_1.default.find().sort({ nameGame: 1 })
                .then((answer) => {
                res.status(200).json(answer);
            }).catch((myErrorsito) => {
                res.status(400).json({ message: "Failure to get all games" });
            });
        });
    }
    static getGameByIndex(res, codGame) {
        return __awaiter(this, void 0, void 0, function* () {
            gameSchema_1.default.findById(codGame)
                .then((answer) => {
                res.status(200).json(answer);
            }).catch((myErrorsito) => {
                res.status(400).json({ message: "Failure to get game" });
            });
        });
    }
    static updateGame(res, codGame, objGame) {
        return __awaiter(this, void 0, void 0, function* () {
            gameSchema_1.default.updateOne({ _id: codGame }, objGame)
                .then((answer) => {
                res.status(200).json({ message: "Success updating game", modified: answer.modifiedCount });
            }).catch((myErrorsito) => {
                console.log(myErrorsito);
                res.status(400).json({ message: "Failure updating game" });
            });
        });
    }
    static deleteGame(res, codGame) {
        return __awaiter(this, void 0, void 0, function* () {
            gameSchema_1.default.deleteOne({ _id: codGame })
                .then((answer) => {
                res.status(200).json({ message: "Success deleting game", modified: answer.deletedCount });
            }).catch((myErrorsito) => {
                res.status(400).json({ message: "Failure deleting game" });
            });
        });
    }
}
exports.default = GameDao;
