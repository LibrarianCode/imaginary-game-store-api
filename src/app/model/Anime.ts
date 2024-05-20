class Anime {
    // Variables
    public nameAnime: string;
    public descriptionAnime: string;
    public seasonsAnime: number;
    public releaseDateAnime: Date;
    public imageAnime: string;
    public base64Anime: string;

    // Constructor
    constructor(nom: string, des: string, sea: number, rel: Date, ima: string, bas: string) {
        this.nameAnime = nom;
        this.descriptionAnime = des;
        this.seasonsAnime = sea;
        this.releaseDateAnime = rel;
        this.imageAnime = ima;
        this.base64Anime = bas;
    }
}

export default Anime;