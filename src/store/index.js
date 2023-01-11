import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
    state: {
        currentUser: {
            isAuthUser: false,
            name: '',
        },
        banners: [],
        menu: [],
        currentProduct: {},
        currentProductReviews: [],
    },
    getters: {
        currentUser(state) {
            return state.currentUser;
        },
        bannerList(state) {
            return state.banners;
        },
        menuList(state) {
            return state.menu;
        },
        currentProduct(state) {
            return state.currentProduct;
        },
        currentProductReviews(state) {
            return state.currentProductReviews;
        },
    },
    mutations: {
        toggleAuthUser(state, payload) {
            state.currentUser.isAuthUser = !state.currentUser.isAuthUser;
        },
        setCurrentUserName(state, payload) {
            state.currentUser.name = payload;
        },
        setBanner(state, payload) {
            state.banners = payload;
        },
        setMenu(state, payload) {
            state.menu = payload;
        },
        setCurrentProduct(state, payload) {
            state.currentProduct = payload;
        },
        setCurrentProductReviews(state, payload) {
            state.currentProductReviews = payload;
        },
    },
    actions: {
        async getRecipes(context) {
            const response = await axios.get('http://localhost:3001/banners');
            const data = await response.data;
            context.commit('setBanner', data);
        },
        async getMenu(context) {
            const response = await axios.get('http://localhost:3001/menu');
            const data = await response.data;
            context.commit('setMenu', data);
        },
        async getMenuByFilter(context, filter) {
            let response;
            if (filter !== 'Все') {
                response = await axios.get(`http://localhost:3001/menu?type=${filter}`);
            } else {
                response = await axios.get('http://localhost:3001/menu');
            }
            const data = await response.data;
            context.commit('setMenu', data);
        },
        async getCurrentProduct(context, id) {
            const response = await axios.get(`http://localhost:3001/menu/${id}`);
            const data = await response.data;
            context.commit('setCurrentProduct', data);
        },
        async postCall(context, userData) {
            const response = await axios.post('http://localhost:3001/calls', userData);
            const data = await response.data;
            console.log('Ответ от сервера: ', userData);
        },
        async postReview(context, review) {
            const response = await axios.post('http://localhost:3001/reviews', review);
            const data = await response.data;
            console.log('Ответ от сервера: ', data)
        },
        async postProduct(context, product) {
            const response = await axios.post('http://localhost:3001/menu', product);
            const data = await response.data;
            console.log('Ответ от сервера: ', data)
        },
        async getCurrentProductReviews(context, id) {
            const response = await axios.get(`http://localhost:3001/reviews?product_id=${id}`);
            const data = await response.data
            context.commit('setCurrentProductReviews', data);
        },
    },
    modules: {}
})