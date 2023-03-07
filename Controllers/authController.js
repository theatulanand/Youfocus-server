const validationService = require("../Services/validationService");
const userService = require("../Services/userService")
class AuthController {
    async register(req, res) {
        let { name, email, mobile, password } = req.body;

        // validation
        let validationResult = validationService.validateRegistrationForm({ name, email, mobile, password })

        if (!validationResult.status) { // If registration form data is not valid 
            res.status(400).send(validationResult.message);
            return;
        }

        // If user is already exist
        let user;

        try {
            user = await userService.findUser({ email });
        } catch (error) {
            console.log(error)
        }

        if (user) {
            res.status(400).send({
                status: 400,
                message: "User Already Exists"
            });

            return;
        } else {

            try {
                await userService.createUser({ name, email, mobile, password });
                res.status(200).send({
                    status: 200,
                    message: "User Registered"
                })
            } catch (error) {
                res.status(500).send({
                    status: 500,
                    message: "Something went wrong from server"
                })
            }

        }


    }

    async login() {

    }
}

module.exports = new AuthController();