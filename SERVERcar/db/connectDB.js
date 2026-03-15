const mongoose = require('mongoose')

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_live_URl, {
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000,
        });
        console.log('DataBase connected :)')
    } catch (error) {
        console.log('DB Error:', error)
    }
}

module.exports = connectdb