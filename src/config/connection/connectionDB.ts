import { connect } from "mongoose";

// Functions
const connectionDB = () => {
    const url = String(process.env.URL_MONGO);
    connect(url)
        .then(() => {
            console.log("Connection estblished with " + url);
        }).catch((myErrorsito) => {
            console.log(myErrorsito);
        })
}

export default connectionDB;