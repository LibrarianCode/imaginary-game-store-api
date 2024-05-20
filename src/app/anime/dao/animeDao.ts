import { Response } from "express";
import Anime from "../../model/Anime";
import animeSchema from "../../schemas/animeSchema";

class AnimeDao {
    // Variables

    // Functions
    protected static async addAnime(res: Response, objAnime: Anime): Promise<any> {
        animeSchema.create(objAnime).then((answer) => {
            res.status(200).json({ message: "Success Anime registered", id: answer._id })
        }).catch((myErrorsito) => {
            console.log(myErrorsito);
            res.status(400).json({ message: "Failure to register anime" });
        })
    }

    protected static async getAllAnimes(res: Response): Promise<any> {
        animeSchema.find().sort({ nameAnime: 1 })
            .then((answer) => {
                res.status(200).json(answer);
            }).catch((myErrorsito) => {
                res.status(400).json({ message: "Failure to get all animes" });
            })
    }

    protected static async getAnimeByIndex(res: Response, codAnime: string): Promise<any> {
        animeSchema.findById(codAnime)
            .then((answer) => {
                res.status(200).json(answer);
            }).catch((myErrorsito) => {
                res.status(400).json({ message: "Failure to get anime" });
            })
    }

    protected static async updateAnime(res: Response, codAnime: string, objAnime: Anime): Promise<any> {
        animeSchema.updateOne({_id:codAnime}, objAnime)
            .then((answer) => {
                res.status(200).json({ message: "Success updating anime", modified:answer.modifiedCount });
            }).catch((myErrorsito) => {
                console.log(myErrorsito);
                res.status(400).json({ message: "Failure updating anime" });
            })
    }

    protected static async deleteAnime(res: Response, codAnime: string): Promise<any> {
        animeSchema.deleteOne({_id:codAnime})
            .then((answer) => {
                res.status(200).json({ message: "Success deleting anime", modified:answer.deletedCount });
            }).catch((myErrorsito) => {
                res.status(400).json({ message: "Failure deleting anime" });
            })
    }

}

export default AnimeDao;