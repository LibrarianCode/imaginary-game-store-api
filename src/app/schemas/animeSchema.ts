import { model, Schema } from "mongoose";
import Anime from "../model/Anime";

const AnimeSchema = new Schema<Anime>(
    {
        nameAnime: { type: String, required: true },
        descriptionAnime: { type: String, required: true },
        seasonsAnime: { type: Number, required: true },
        releaseDateAnime: { type: Date, required: true },
        imageAnime: { type: String, required: true },
        base64Anime: { type: String, required: false, maxlength: 5000000 }
    }
);

export default model("Anime", AnimeSchema, "Anime");