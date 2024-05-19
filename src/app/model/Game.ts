class Game {
    // Variables
    public nameGame: string;
    public descriptionGame: string;
    public valueGame: number;
    public releaseDateGame: Date;
    public imageGame: string;
    public base64Game: string;

    // Constructor
    constructor(nom: string, des: string, val: number, rel: Date, ima: string, bas: string) {
        this.nameGame = nom;
        this.descriptionGame = des;
        this.valueGame = val;
        this.releaseDateGame = rel;
        this.imageGame = ima;
        this.base64Game = bas;
    }
}

export default Game;