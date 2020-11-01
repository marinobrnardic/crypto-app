<template>
	<div class="view-wrapper">
		<div class="view">
				<div class="view--container">
					<h1 class="view--title">Top 10 Crypto</h1>
				</div>
				<div class="view--container view--container__overflow">
					<table class="view--table">
						<thead class="view--table-header">
							<tr class="view--table-header-row">
								<th class="view--table-heading sticky-col" align="left">Name</th>
								<th class="view--table-heading" align="right">Price</th>
								<th class="view--table-heading" align="right">Change 24h</th>
								<th class="view--table-heading" align="right">Market Cap</th>
								<th class="view--table-heading" align="right">Volume</th>
							</tr>
						</thead>
						<tbody class="view--table-body">
							<tr v-for="crypto in cryptos" :key="crypto.id" class="view--table-row">
								<td class="view--table-data view--table-data__flex sticky-col" align="left"><img class="view--table-icon" :src="crypto.image"><router-link :to="{name: 'DisplayCurrency', params: {id: crypto.symbol}}" class="view--table-link">{{ crypto.name }}</router-link></td>
								<td class="view--table-data" align="right">{{ crypto.current_price | currency('USD', 'en-US') }}</td>
								<td class="view--table-data view--table-data__percentage" :class="{ 'view--table-data__green': (crypto.price_change_percentage_24h > 0) }" align="right">{{ crypto.price_change_percentage_24h }}</td>
								<td class="view--table-data" align="right">{{ crypto.market_cap | currency('USD', 'en-US') }}</td>
								<td class="view--table-data" align="right">{{ crypto.total_volume | currency('USD', 'en-US')}}</td>
							</tr>
						</tbody>
					</table> 
				</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
	computed: mapState(['cryptos']),
	created(){
		this.$store.dispatch('loadCryptos')
	}
};
</script>

<style lang="sass">
@import "../assets/styles/styles"
</style>