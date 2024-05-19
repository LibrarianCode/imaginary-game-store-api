import { Router } from "express";
import gameController from "../controller/gameController";

class GameRoute {

    // Variables
    public apiRouteGame: Router;

    // Constructor
    constructor() {
        this.apiRouteGame = Router();
        this.loadRoutes();
    }

    //Functions
    private loadRoutes(): void {
        this.apiRouteGame.get("/all", gameController.obtainAllGames);
        this.apiRouteGame.get("/one/:codGame", gameController.obtainOneGame);
        this.apiRouteGame.post("/add", gameController.addNewGame);
        this.apiRouteGame.put("/update/:codGame", gameController.updateAGame);
        this.apiRouteGame.delete("/delete/:codGame", gameController.deleteAGame);
    }
}

const gameRoute = new GameRoute();
export default gameRoute.apiRouteGame;