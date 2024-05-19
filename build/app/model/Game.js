"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Game {
    // Constructor
    constructor(nom, des, val, rel, ima, bas) {
        this.nameGame = nom;
        this.descriptionGame = des;
        this.valueGame = val;
        this.releaseDateGame = rel;
        this.imageGame = ima;
        this.base64Game = bas;
    }
}
exports.default = Game;
