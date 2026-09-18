require("dotenv").config()
const app = require("./app")
const connectToDb = require("./config/db")

const PORT = process.env.PORT || 4000

const start = async () => {
    try {
        await connectToDb()
        app.listen(PORT, () => {
            console.log(`server running on ${PORT}`)
        })
    } catch (err) {
        console.log(err);

    }
}
start()