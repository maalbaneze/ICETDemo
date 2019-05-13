import axios from "axios";

const api_url = "https://project3routes.herokuapp.com";


export default {
    // Anonymnous users can use these CRUD operations
    getMeals: () => {
        return axios.get(`${api_url}/api/meals`)
    },
    getRestaurants: () => {
        return axios.get(`${api_url}/api/restaurants`)
    },
    saveMeal: (mealObj) => {
        console.log(mealObj)
        return axios.post(`${api_url}/api/meals`, mealObj)
    },
    saveRestaurant: (restaurantObj) => {
        console.log(restaurantObj)
        return axios.post(`${api_url}/api/restaurants`, restaurantObj)
        // .then(response => response.json())
        // .then(res => this.setState({ data: res.data }))
    },
    // For users with a login and administrator
    createUser: (userObj) => {
        console.log(userObj)
        return axios.post(`${api_url}/api/users`, userObj)
    },
    // logout: () => {
    //     return axios.post(`${api_url}/api/users`)
    // },
    getUser: (userId) => {
        return axios.get(`${api_url}/api/users`, userId)
    },
    getUsers: () => {
        return axios.get(`${api_url}/api/users`)
    },
    // registerUser: (userObj) => {
    //     return axios.post(`${api_url}/auth/signup`, userObj)
    // },
    getUserMeals: (userId) => {
        return axios.get(`${api_url}/api/meals`, userId)
    },
    getUserRestaurants: (userId) => {
        return axios.get(`${api_url}/api/restaurants`, userId)
    },
    saveUserMeal: (mealObj, userId) => {
        console.log(mealObj, userId)
        return axios.post(`${api_url}/api/meals`, userId, mealObj)
    },
    saveUserRestaurant: (restaurantObj, userId) => {
        console.log(restaurantObj, userId)
        return axios.post(`${api_url}/api/restaurants`, userId, restaurantObj)
    },
    updateUser: (userId) => {
        return axios.put(`${api_url}/api/users`, userId)
    },
    updateUserMeal: (mealObj, userId) => {
        return axios.put(`${api_url}/api/meals`, userId, mealObj)
    },
    updateUserRestaurant: (restaurantObj, userId) => {
        return axios.put(`${api_url}/api/restaurants`, userId, restaurantObj)
    },
    updateMeal: (mealObj) => {
        return axios.put(`${api_url}/api/meals`, mealObj)
    },
    updateRestaurant: (restaurantObj) => {
        return axios.put(`${api_url}/api/restaurants`, restaurantObj)
    },
    deleteUserMeal: (mealObj, userId) => {
        return axios.delete(`${api_url}/api/meals`, userId, mealObj)
    },
    deleteUserRestaurant: (restaurantObj, userId) => {
        return axios.delete(`${api_url}/api/restaurants`, userId, restaurantObj)
    },
    deleteUser: (userId) => {
        return axios.delete(`${api_url}/api/users`, userId)
    },
    deleteMeal: (mealObj) => {
        return axios.delete(`${api_url}/api/meals`, mealObj)
    },
    deleteRestaurant: (restaurantObj) => {
        return axios.delete(`${api_url}/api/restaurants`, restaurantObj)
    },

}
