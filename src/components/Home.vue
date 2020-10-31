<template>
	<div class="view-wrapper">
		<div class="home">
				<div class="home--container">
					<h1 class="home--title">Top 10 Crypto</h1>
				</div>
				<div class="home--container home--container__overflow">
					<table class="home--table">
						<thead class="home--table-header">
							<tr class="home--table-header-row">
								<th class="home--table-heading" align="left">Name</th>
								<th class="home--table-heading" align="right">Price</th>
								<th class="home--table-heading" align="right">Change 24h</th>
								<th class="home--table-heading" align="right">Market Cap</th>
								<th class="home--table-heading" align="right">Volume</th>
							</tr>
						</thead>
						<tbody class="home--table-body">
							<tr v-for="crypto in cryptos" :key="crypto.id" class="home--table-row">
								<td class="home--table-data home--table-data__flex" align="left"><img class="home--table-icon" :src="crypto.image"><router-link :to="{name: 'DisplayCurrency', params: {id: crypto.symbol}}" class="home--table-link">{{ crypto.name }}</router-link></td>
								<td class="home--table-data" align="right">{{ crypto.current_price | currency('USD', 'en-US') }}</td>
								<td class="home--table-data" align="right">{{ crypto.price_change_percentage_24h }}</td>
								<td class="home--table-data" align="right">{{ crypto.market_cap | currency('USD', 'en-US') }}</td>
								<td class="home--table-data" align="right">{{ crypto.total_volume | currency('USD', 'en-US')}}</td>
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
@import "../assets/styles/vars"


.home
	min-height: 100vh
	margin: 0 auto
.home--container
	width: 1400px
	margin: 0 auto
	padding: 1rem 0
.home--title
	color: $dark-grey
	font-size: $fs-heading-1
	line-height: 2
.home--table
	width: 1400px
	cellpadding: 0
	cellspacing: 0
.home--table-header
	text-align: left
	font-size: 14px
	color: $grey
.home--table-header-row
	height: 2rem
.home--table-row
	height: 3rem
	&:nth-child(odd)
		background-color: $light-grey
.home--table-heading
	vertical-align: middle
.home--table-icon
	max-width: 1rem
	margin-right: 1rem
.home--table-data
	color: #2d2727
	vertical-align: middle
	&:nth-child(1)
		padding-left: 1rem
	&:last-child
		padding-right: 1rem
.home--table-link
	color: $blue
	text-decoration: none
	transition: 0.5s
	&:hover
		color: darken($blue, 10%)
@media screen and (max-width: 320px)
	.home--container
		width: 280px
		&__overflow
			overflow: scroll
	.home--title
		font-size: 1.5rem
</style>