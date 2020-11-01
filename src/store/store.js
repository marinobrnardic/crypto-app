import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        cryptos: []
    },
    mutations: {
        SET_CRYPTOS (state, cryptos) {
            state.cryptos = cryptos;
        }
    },
    actions: {
        loadCryptos ({commit}){
            axios
                .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10', {
                })
                .then(response => {
                    commit('SET_CRYPTOS', response.data);
                    console.log(response.data);
                })
        }
    }
});