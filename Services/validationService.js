class ValidationService {
    validateRegistrationForm({ name, email, mobile, password }) {

        //console.log(name, email, mobile, password)

        if (!name || !email || !mobile || !password) {
            const message = "All fields are required"
            return {
                status: false,
                message
            }
        }



        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        const mobileRegex = /^[0-9]{10}$/;


        // Check if name is not empty
        if (name === "") {
            const message = "Name must be filled out";
            return { status: false, message };
        }

        // Check if email is not empty and matches the email regex
        if (email === "" || !emailRegex.test(email)) {
            const message = "Invalid email address";
            return { status: false, message };
        }

        // Check if password is not empty, 8 characters long and contains at least one special character
        if (password === "" || !passwordRegex.test(password)) {
            const message = "Password must be at least 8 characters long and Strong for example : abc@1234";
            return { status: false, message };
        }

        // Check if mobile is not empty and matches the mobile number regex
        if (mobile === "" || !mobileRegex.test(mobile)) {
            const message = "Invalid mobile number";
            return { status: false, message };
        }

        return {
            status: true,
            Message: "Form are valid"
        };
    }
}

module.exports = new ValidationService()