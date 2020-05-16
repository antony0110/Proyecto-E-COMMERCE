import axios from 'axios';
import store from './store';
import { API_URL } from '../api-config'
export const login = async(user) => {
    const res = await axios.post(API_URL + '/user/login', user);
    localStorage.setItem('authToken', res.data.token); //guardamos el token en localstorage
    store.dispatch({ //this.userService.setUser(res.user)
        type: 'LOGIN',
        payload: res.data.user
    });
}
    export const logout = async() => {
        const res = await axios.get(API_URL + '/user/logout', {
            headers: {
                Authorization: localStorage.getItem('authToken')
            }
        })
        localStorage.removeItem('authToken');
        store.dispatch({
            type: 'LOGOUT'
        })
        return res;
    }
    export const addCart = (product) => {

        store.dispatch({
            type: 'ADD_CART',
            payload: product
        })
    }
    export const getAllProducts = () => {
        return  axios.get(API_URL + '/product')
        .then(res => store.dispatch({
            type:'GET_ALL_PRODUCTS',
        payload: res.data
        }))

    }
 