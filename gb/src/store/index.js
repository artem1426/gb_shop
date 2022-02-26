import {createStore} from 'vuex'

export default createStore({
    state: {
        productList: [
            {id: 1, name: 'Product1', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', cost: 99},
            {id: 2, name: 'Product2', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', cost: 199},
            {id: 3, name: 'Product3', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', cost: 299},
            {id: 4, name: 'Product4', info: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', cost: 399},
        ],
        basketList: [],
    },
    getters: {},
    mutations: {
        setBasket(state, list) {
            state.basketList = list;
        },
    },
    actions: {},
    modules: {}
});
