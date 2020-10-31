<template>
  <div class="home">
		<h1 class="home--title">Top 10 cryptocurrencies</h1>
		<table class="home--table">
			<thead class="home--table-header">
				<tr>
					<th>Name</th>
					<th>Price</th>
					<th>Market Cap</th>
					<th>Volume</th>
				</tr>
			</thead>
			<tbody class="home--table-body">
				<tr v-for="crypto in cryptos" :key="crypto.id">
					<td>{{ crypto.name }}</td>
					<td>{{ crypto.current_price }}</td>
					<td>{{ crypto.market_cap }}</td>
					<td>{{crypto.total_volume}}</td>
				</tr>
			</tbody>
		</table>
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
	width: 90%
	margin: 0 auto	
.home--table
	width: 100%
.home--table-header
	text-align: left
	border-bottom: 1px solid red
</style>