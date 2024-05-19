"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const connectionDB_1 = __importDefault(require("../connection/connectionDB"));
/* Routes Location */
const gameRoute_1 = __importDefault(require("../../app/game/route/gameRoute"));
class Server {
    // Constructor
    constructor() {
        this.app = (0, express_1.default)();
        dotenv_1.default.config({ path: ".env" });
        (0, connectionDB_1.default)();
        this.initializeServer();
        this.initializeRoutes();
    }
    // Functions
    initializeServer() {
        this.app.set("PORT", process.env.PORT);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)("dev"));
        this.app.use(express_1.default.json({ limit: "100mb" }));
        this.app.use(express_1.default.urlencoded({
            extended: true
        }));
    }
    initializeRoutes() {
        this.app.use("/api/public/game", gameRoute_1.default);
    }
    loadServer() {
        this.app.listen(this.app.get("PORT"), () => {
            const puerto = this.app.get("PORT");
            console.log("Server working on the port: " + puerto);
        });
    }
}
exports.default = Server;
