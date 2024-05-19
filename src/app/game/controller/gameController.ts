import { Response, Request } from "express";
import GameDao from "../dao/gameDao";
import Game from "../../model/Game";

class GameController extends GameDao {

    // Variables

    // Functions
    public addNewGame(req: Request, res: Response): void {
        delete req.body._id;
        const objGame: Game = req.body;
        GameController.addGame(res, objGame);
    }

    public obtainAllGames(req: Request, res: Response): void {
        GameController.getAllGames(res);
    }

    public obtainOneGame(req: Request, res: Response): void {
        const codigo = String(req.params.codGame);
        if (codigo != null) {
            GameController.getGameByIndex(res, codigo);
        }
        else {
            res.status(400).json({ message: "Invalid index for obtaining game" });
        }
    }

    public deleteAGame(req: Request, res: Response): void {
        const codigo = String(req.params.codGame);
        if (codigo != null) {
            GameController.deleteGame(res, codigo);
        }
        else {
            res.status(400).json({ message: "Invalid index for deleting game" });
        }
    }

    public updateAGame(req: Request, res: Response): void {
        const objGame: Game = req.body;
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
export default gameController;