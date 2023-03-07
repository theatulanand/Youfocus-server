const userModel = require('../Models/userModel');

class UserService {
    async createUser(data) {
        try {
            await userModel.create(data);
        } catch (error) {
            console.log(error)
            throw Error(error);
        }
    }

    async findUser(filter) {
        let user;
        try {
            user = await userModel.findOne(filter);
            return user;
        } catch (error) {
            console.log(error)
            throw Error(error);
        }


    }
}

module.exports = new UserService();