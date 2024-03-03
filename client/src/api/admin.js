/**
 * Imports the axios instance from the API configuration file.
 */
import { axiosInstance } from "../api/apiConfig";


/**
 * Gets all users from the API.
 *
 * This makes a GET request to the /admin/allUsers endpoint to retrieve all users.
 *
 * @returns {Promise} Promise that resolves with the array of user objects.
 */
export const viewAllUsers = async () => {
    try {
        const res = await axiosInstance.get("/admin/allUsers");
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

/**
 * Gets a single user by ID from the API.
 *
 * This makes a GET request to the /admin/allUser/:id endpoint to retrieve a specific user.
 *
 * @param {number} id - The ID of the user to retrieve.
 * @returns {Promise} Promise that resolves with the user object.
 */
export const viewSingleUser = async (id) => {
    try {
        const res = await axiosInstance.get("/admin/allUser/" + id);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

/**
 * Updates a user by ID in the API.
 *
 * This makes a PUT request to the /admin/updateUser/:id endpoint
 * to update a user's data.
 *
 * @param {number} id - The ID of the user to update.
 * @param {object} data - The user data to update.
 * @returns {Promise} Promise that resolves with the updated user object.
 */
export const updateUser = async (id, data) => {
    try {
        const res = await axiosInstance.put("/admin/updateUser/" + id, data);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

/**
 * Deletes a user by ID from the API.
 *
 * This makes a DELETE request to the /admin/deleteUser/:id endpoint
 * to delete a user.
 *
 * @param {number} id - The ID of the user to delete.
 * @returns {Promise} Promise that resolves if delete succeeded.
 */
export const deleteUser = async (id) => {
    try {
        const res = await axiosInstance.delete("/admin/deleteUser/" + id);
        return res.data;
    } catch (error) {
        console.log(error);
    }
};

/**
 * Retrieves all sellers from the API.
 *
 * This makes a GET request to the /admin/allSeller endpoint
 * to get a list of all sellers.
 *
 * @returns {Promise} Promise that resolves with the array of seller objects.
 */
export const viewAllSellers = async () => {
    try {
        const res = await axiosInstance.get("/admin/allSeller");
        return res.data;
    } catch (error) {
        console.log(error);
    }
}


