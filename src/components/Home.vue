<template>
  <div class="home">
		<h1 class="home--title">Top 10 Cryptocurrencies</h1>
			<!-- <table class="home--table">
				<thead class="home--table-header">
					<tr>
						<th class="home--table-heading"></th>
						<th class="home--table-heading">Name</th>
						<th class="home--table-heading">Price</th>
						<th class="home--table-heading">Change 24h</th>
						<th class="home--table-heading">Market Cap</th>
						<th class="home--table-heading" align="right">Volume</th>
					</tr>
				</thead>
				<tbody class="home--table-body">
					<tr v-for="crypto in cryptos" :key="crypto.id">
						<td><img class="home--table-icon" :src="crypto.image" alt=""></td>
						<td><router-link :to="{name: 'DisplayCurrency', params: {id: crypto.symbol}}" class="home--table-link">{{ crypto.name }}</router-link></td>
						<td>{{ crypto.current_price | currency('USD', 'en-US') }}</td>
						<td>{{ crypto.price_change_percentage_24h }}</td>
						<td>{{ crypto.market_cap | currency('USD', 'en-US') }}</td>
						<td align="right">{{ crypto.total_volume | currency('USD', 'en-US')}}</td>
					</tr>
				</tbody>
			</table> -->
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
@import "../assets/styles/vars"

.home
	font-family: $font-oswald
	max-width: 1400px
	margin: 0 auto	
.home--table
	width: 100%
	cellpadding: 0
	cellspacing: 0
.home--table-header
	text-align: left
	border-bottom: 1px solid red
	font-size: 14px
	color: $dark-grey
.home--table-icon
	max-width: 2rem

.home--table-link
	color: $blue
	text-decoration: none
	&:hover
		color: darken($blue, 10%)
</style>