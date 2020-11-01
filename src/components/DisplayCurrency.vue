<template>
    <div class="view-wrapper">
        <div class="view">
            <div class="view--container">
                <h1 class="view--title view--title__flex"> <img :src="currentCrypto.image" :alt="currentCrypto.name" style="max-width: 3rem; margin-right: 1rem;"> <span>{{ currentCrypto.name }}</span></h1>
            </div>
            <div class="view--container view--container__flex">
                <div class="flex-item">
                    <h3 class="view--title">Current Price</h3>
                    <p class="view--paragraph">{{ currentCrypto.current_price | currency('USD', 'en-US') }}</p>
                </div>
                <div class="flex-item">
                     <h3 class="view--title">Circulating Supply</h3>
                    <p class="view--paragraph">{{ currentCrypto.circulating_supply | currency('USD', 'en-US') }}</p>
                </div>
                <div class="flex-item">
                    <h3 class="view--title">Total Supply</h3>
                    <p class="view--paragraph">{{ currentCrypto.total_supply | currency('USD', 'en-US') }}</p>
                </div>
                <div class="flex-item">
                    <h3 class="view--title">Market Cap</h3>
                    <p class="view--paragraph">{{ currentCrypto.market_cap | currency('USD', 'en-US') }}</p>
                </div>
                <div class="flex-item">
                    <h3 class="view--title">High 24h</h3>
                    <p class="view--paragraph">{{ currentCrypto.high_24h | currency('USD', 'en-US') }}</p>
                </div>
                <div class="flex-item">
                    <h3 class="view--title">Low 24h</h3>
                    <p class="view--paragraph">{{ currentCrypto.low_24h | currency('USD', 'en-US') }}</p>
                </div>
                <div class="flex-item">
                    <h3 class="view--title">All Time High</h3>
                    <p class="view--paragraph">{{ currentCrypto.ath | currency('USD', 'en-US') }}</p>
                </div>
                <div class="flex-item">
                    <h3 class="view--title">All Time Low</h3>
                    <p class="view--paragraph">{{ currentCrypto.atl | currency('USD', 'en-US') }}</p>
                </div>
                <div class="flex-item">
                    <h3 class="view--title">Price Change 24h</h3>
                    <p class="view--paragraph">{{ currentCrypto.price_change_24h | currency('USD', 'en-US') }}</p>
                </div>
            </div>
            <div class="view--container">
                <router-link to="/" class="view--button">Go back</router-link>
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