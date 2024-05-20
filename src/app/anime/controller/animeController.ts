import { Response, Request } from "express";
import AnimeDao from "../dao/animeDao";
import Anime from "../../model/Anime";

class AnimeController extends AnimeDao {

    // Variables

    // Functions
    public addNewAnime(req: Request, res: Response): void {
        delete req.body._id;
        const objAnime: Anime = req.body;
        AnimeController.addAnime(res, objAnime);
    }

    public obtainAllAnimes(req: Request, res: Response): void {
        AnimeController.getAllAnimes(res);
    }

    public obtainOneAnime(req: Request, res: Response): void {
        const codigo = String(req.params.codAnime);
        if (codigo != null) {
            AnimeController.getAnimeByIndex(res, codigo);
        }
        else {
            res.status(400).json({ message: "Invalid index for obtaining anime" });
        }
    }

    public deleteAnAnime(req: Request, res: Response): void {
        const codigo = String(req.params.codAnime);
        if (codigo != null) {
            AnimeController.deleteAnime(res, codigo);
        }
        else {
            res.status(400).json({ message: "Invalid index for deleting anime" });
        }
    }

    public updateAnAnime(req: Request, res: Response): void {
        const objAnime: Anime = req.body;
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
export default animeController;