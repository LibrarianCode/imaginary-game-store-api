import cors from "cors";
import morgan from "morgan";
import express from "express";
import dotenv from "dotenv";
import connectionDB from "../connection/connectionDB";

/* Routes Location */
import apiRoutesGame from '../../app/game/route/gameRoute';
import apiRoutesAnime from '../../app/anime/route/animeRoute';

class Server {

    // Variables
    public app: express.Application;

    // Constructor
    constructor() {
        this.app = express();
        dotenv.config({ path: ".env" });
        connectionDB();
        this.initializeServer();
        this.initializeRoutes();
    }

    // Functions
    private initializeServer(): void {
        this.app.set("PORT", process.env.PORT);
        this.app.use(cors());
        this.app.use(morgan("dev"));
        this.app.use(express.json({ limit: "100mb" }));
        this.app.use(express.urlencoded({
            extended: true
        }));
    }

    private initializeRoutes(): void {
        this.app.use("/api/public/game", apiRoutesGame);
        this.app.use("/api/public/anime", apiRoutesAnime);
    }

    public loadServer(): void {
        this.app.listen(this.app.get("PORT"), () => {
            const puerto = this.app.get("PORT");
            console.log("Server working on the port: " + puerto);
        });
    }
}

export default Server;