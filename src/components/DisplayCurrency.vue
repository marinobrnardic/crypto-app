<template>
    <div class="view-wrapper">
        <div class="view">
            <div class="view--container">
                <h1 class="view--title" style="display: flex; flex-direction: row; align-items: center;"> <img :src="currentCrypto.image" :alt="currentCrypto.name" style="max-width: 3rem; margin-right: 1rem;"> <span>{{ currentCrypto.name }}</span></h1>
                <router-link to="/" class="view--table-link">Go back</router-link>
            </div>
            <div class="view--container" style="display: flex; flex-direction: row; justify-content: space-between;">
                <div>
                    <h3 class="view--title">Current price</h3>
                    <p class="view--paragraph">{{ currentCrypto.current_price | currency('USD', 'en-US') }}</p>
                </div>
                <div>
                    <h3 class="view--title">All Time High</h3>
                    <p class="view--paragraph">{{ currentCrypto.ath | currency('USD', 'en-US') }}</p>
                </div>
                <div>
                     <h3 class="view--title">Circulating supply</h3>
                    <p class="view--paragraph">{{ currentCrypto.circulating_supply | currency('USD', 'en-US') }}</p>
                </div>
                <div>
                    <h3 class="view--title">Total supply</h3>
                    <p class="view--paragraph">{{ currentCrypto.total_supply | currency('USD', 'en-US') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {  
    data() {
        return {
           
        }
    },
    methods: mapActions(['loadCryptos']),
    computed: {
       currentCrypto(){
            let curr = this.$store.state.cryptos.find(c => c.symbol === this.$route.params.id);
    	    return curr ? curr : {};
       }
    },
    created(){
        this.loadCryptos();
    }
};
</script>

<style lang="sass">
@import "../assets/styles/styles"
</style>