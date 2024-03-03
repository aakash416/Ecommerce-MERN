/**
 * Imports Profile model, bcryptjs for password hashing,
 * and jsonwebtoken for generating JWTs for authentication.
 */
import Profile from "../Model/profileModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

/**
 * Registers a new user profile.
 *
 * @param {Object} req - Express request object 
 * @param {string} req.body.firstName - User first name
 * @param {string} req.body.lastName - User last name 
 * @param {string} req.body.email - User email
 * @param {string} req.body.password - User password
 * @param {string} req.body.phone - User phone number
 * @param {string} req.body.address - User address
 * @param {string} req.body.gender - User gender
 * @param {string} req.body.role - User role
 * @param {string} req.body.image - User image
 * 
 * @param {Object} res - Express response object
 * @returns {Object} res.status - HTTP response status code 
 * @returns {Object} res.json - JSON response body
 */
export const userRegister = async (req, res) => {
    try {
        /**
* Destructures the user profile fields from the request body.
*/
        const {
            firstName,
            lastName,
            email,
            password,
            phone,
            address,
            gender,
            role,
            image,
        } = req.body;

        /**
* Finds an existing user profile with the given email.
*/
        const existingProfile = await Profile.findOne({ email });

        /**
* Checks if a profile with the given email already exists.
* If so, returns a 409 conflict response with a message.
*/
        if (existingProfile) {
            return res.status(409).json({ message: "Profile already exists" });
        }
        /**
    * Hashes the given password using bcryptjs with 10 salt rounds.
    * Creates a new user profile in the database using the hashed password
    * and other profile details.
    */
        const passwordHash = await bcryptjs.hash(password, 10);
        /**
* Creates a new user profile in the database
* using the hashed password and other profile details.
*/
        const profile = await Profile.create({
            firstName,
            lastName,
            email,
            password: passwordHash,
            phone,
            address,
            gender,
            role,
            image,
        });
        /**
* Returns a 201 response with the created user profile
* and a success message.
*/
        return res
            .status(201)
            .json({ profile, message: "Profile created successfully" });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}

/**
 * Logs in an existing user.
 *
 * @param {Object} req - Express request object
 * @param {string} req.body.email - User email
 * @param {string} req.body.password - User password
 *
 * @param {Object} res - Express response object
 * @returns {Object} res.status - HTTP response status code
 * @returns {Object} res.json - JSON response body
 */
export const userLogin = async (req, res) => {
    try {
        /**
     * Destructures email and password from the request body.
     */
        const { email, password } = req.body;
        /**
         * Checks if a profile with the given email already exists.
         * If no profile is found, returns a 401 error response.
         */
        const existingProfile = await Profile.findOne({ email });
        if (!existingProfile) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        /**
     * Compares the hashed password from the database with the
     * plaintext password from the request body.
     *
     * Returns 401 Unauthorized response if passwords do not match.
     */
        const isMatch = await bcryptjs.compare(password, existingProfile.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        /**
     * Generates a signed JWT token containing the user ID that expires in 1 hour.
     */
        const token = jwt.sign(
            { _id: existingProfile._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        /**
     * Sends a successful 200 response with the JWT token,
     * user profile, and success message.
     */
        return res
            .status(200)
            .json({ token, existingProfile, message: "Login successful" });
    } catch (error) {
        /**
         * Logs any error to the console.
         *
         * Returns a 500 Internal Server Error response with a generic error message.
         */
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
};

/**
 * Updates a user profile.
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 *
 * @returns {Promise}
 */
export const updateProfile = async (req, res) => {
    try {
        /**
     * Destructures the user profile fields from the request body.
     * This extracts the named properties into their own variables for use later.
     */
        const {
            firstName,
            lastName,
            email,
            password,
            phone,
            address,
            gender,
            role,
            image,
        } = req.body;

        /**
       * Finds an existing user profile by ID.
       *
       * Checks if a profile exists for the given ID from the request.
       * Returns 401 unauthorized if no profile found.
       */
        const existingProfile = await Profile.findOne({ _id: req.id });
        if (!existingProfile) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        /**
      * Compares the provided password with the hashed password stored in the user's profile.
      * Returns 401 unauthorized if the passwords do not match.
      */
        const isMatch = await bcryptjs.compare(password, existingProfile.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        /**
       * Signs a JSON Web Token (JWT) containing the user ID.
       * This generates a signed token that expires in 1 hour.
       */
        const token = jwt.sign(
            { _id: existingProfile._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        /**
      * Hashes the given password using bcryptjs with 10 rounds.
      */
        const passwordHash = await bcryptjs.hash(password, 10);

        /**
      * Updates the user profile with the given ID using findByIdAndUpdate.
      * Sets the profile fields to the values provided in the request body.
      * Returns the updated profile.
      */
        const updated = await Profile.findByIdAndUpdate(
            req.id,
            {
                firstName,
                lastName,
                email,
                password: passwordHash,
                phone,
                address,
                gender,
                role,
                image,
            },
            { new: true }
        );
        /**
     * Returns a 200 OK response with the updated user profile,
     * signed JWT token, and success message.
     */
        return res
            .status(200)
            .json({ token, updated, message: "Profile updated successfully" });
    } catch (error) {
        /**
     * Logs the error to the console.
     * Returns a 500 status code with an error message.
     */
        console.log(error);
        return res.status(500).json({ message: "Something went wrong" });
    }
}