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
				<tr>
					<td>Bitcoin</td>
					<td>100</td>
					<td>200</td>
					<td>300</td>
				</tr>
				<tr>
					<td>Ethereum</td>
					<td>100</td>
					<td>200</td>
					<td>300</td>
				</tr>
				<tr>
					<td>Cardano</td>
					<td>100</td>
					<td>200</td>
					<td>300</td>
				</tr>
			</tbody>
		</table>
  </div>
</template>

<script>
export default {

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