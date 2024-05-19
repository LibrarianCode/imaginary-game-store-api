import { Response } from "express";
import Game from "../../model/Game";
import gameSchema from "../../schemas/gameSchema";

class GameDao {
    // Variables

    // Functions
    protected static async addGame(res: Response, objGame: Game): Promise<any> {
        gameSchema.create(objGame).then((answer) => {
            res.status(200).json({ message: "Success Game registered", id: answer._id })
        }).catch((myErrorsito) => {
            console.log(myErrorsito);
            res.status(400).json({ message: "Failure to register game" });
        })
    }

    protected static async getAllGames(res: Response): Promise<any> {
        gameSchema.find().sort({ nameGame: 1 })
            .then((answer) => {
                res.status(200).json(answer);
            }).catch((myErrorsito) => {
                res.status(400).json({ message: "Failure to get all games" });
            })
    }

    protected static async getGameByIndex(res: Response, codGame: string): Promise<any> {
        gameSchema.findById(codGame)
            .then((answer) => {
                res.status(200).json(answer);
            }).catch((myErrorsito) => {
                res.status(400).json({ message: "Failure to get game" });
            })
    }

    protected static async updateGame(res: Response, codGame: string, objGame: Game): Promise<any> {
        gameSchema.updateOne({_id:codGame}, objGame)
            .then((answer) => {
                res.status(200).json({ message: "Success updating game", modified:answer.modifiedCount });
            }).catch((myErrorsito) => {
                console.log(myErrorsito);
                res.status(400).json({ message: "Failure updating game" });
            })
    }

    protected static async deleteGame(res: Response, codGame: string): Promise<any> {
        gameSchema.deleteOne({_id:codGame})
            .then((answer) => {
                res.status(200).json({ message: "Success deleting game", modified:answer.deletedCount });
            }).catch((myErrorsito) => {
                res.status(400).json({ message: "Failure deleting game" });
            })
    }

}

export default GameDao;