import { Router } from "express";
import animeController from "../controller/animeController";

class AnimeRoute {

    // Variables
    public apiRouteAnime: Router;

    // Constructor
    constructor() {
        this.apiRouteAnime = Router();
        this.loadRoutes();
    }

    //Functions
    private loadRoutes(): void {
        this.apiRouteAnime.get("/all", animeController.obtainAllAnimes);
        this.apiRouteAnime.get("/one/:codAnime", animeController.obtainOneAnime);
        this.apiRouteAnime.post("/add", animeController.addNewAnime);
        this.apiRouteAnime.put("/update/:codAnime", animeController.updateAnAnime);
        this.apiRouteAnime.delete("/delete/:codAnime", animeController.deleteAnAnime);
    }
}

const animeRoute = new AnimeRoute();
export default animeRoute.apiRouteAnime;