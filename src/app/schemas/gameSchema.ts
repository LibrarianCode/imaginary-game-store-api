import { model, Schema } from "mongoose";
import Game from "../model/Game";

const GameSchema = new Schema<Game>(
    {
        nameGame: { type: String, required: true },
        descriptionGame: { type: String, required: true },
        valueGame: { type: Number, required: true },
        releaseDateGame: { type: Date, required: true },
        imageGame: { type: String, required: true },
        base64Game: { type: String, required: false, maxlength: 5000000 }
    }
);

export default model("Game", GameSchema, "Game");