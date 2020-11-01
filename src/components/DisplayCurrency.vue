<template>
    <div class="view-wrapper">
        <div class="view">
            <div class="view--container view--container__border">
                <h1 class="view--title view--title__flex"> <img :src="currentCrypto.image" :alt="currentCrypto.name" class="view--title-image"> <span>{{ currentCrypto.name }}</span></h1>
            </div>
            <div class="view--container view--container__flex view--container__border">
                <div class="flex-item">
                    <h3 class="view--title">{{ currentCrypto.current_price | currency('USD', 'en-US') }}</h3>
                </div>
                <div class="flex-item">
                    <h3 class="view--title"><div class="market-cap-rank">&#35;{{ currentCrypto.market_cap_rank }}</div></h3>
                </div>
                <div class="flex-item view--container__overflow">
					<table class="view--table view--table__small">
						<thead class="view--table-header">
							<tr class="view--table-header-row">
								<th class="view--table-heading " align="left">Circulating Supply</th>
								<th class="view--table-heading" align="right">Total Supply</th>
								<th class="view--table-heading" align="right">Change 24h</th>
								<th class="view--table-heading" align="right">High 24h</th>
								<th class="view--table-heading" align="right">Low 24h</th>
                                <th class="view--table-heading" align="right">All Time High</th>
                                <th class="view--table-heading" align="right">All Time Low</th>
							</tr>
						</thead>
						<tbody class="view--table-body">
							<tr class="view--table-row">
								<td class="view--table-data view--table-data__flex" align="left">{{ currentCrypto.circulating_supply | currency('USD', 'en-US') }}</td>
								<td class="view--table-data" align="right">{{ currentCrypto.total_supply | currency('USD', 'en-US') }}</td>
								<td class="view--table-data view--table-data__percentage" :class="{ 'view--table-data__green': (currentCrypto.price_change_percentage_24h > 0) }" align="right">{{ currentCrypto.price_change_percentage_24h }}</td>
								<td class="view--table-data" align="right">{{ currentCrypto.high_24h | currency('USD', 'en-US') }}</td>
								<td class="view--table-data" align="right">{{ currentCrypto.low_24h | currency('USD', 'en-US') }}</td>
                                <td class="view--table-data" align="right">{{ currentCrypto.ath | currency('USD', 'en-US') }}</td>
                                <td class="view--table-data" align="right">{{ currentCrypto.atl | currency('USD', 'en-US') }}</td>
							</tr>
						</tbody>
					</table> 
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