$(document).ready(function(){
	console.log("Working");
	coinMarketCapAPICall();
});

  setTimeout(function(){
    location = ''
  },600000)

function coinMarketCapAPICall(){
	var queryUrl = "https://api.coinmarketcap.com/v1/ticker/?limit=0";
	$.ajax({
		url: queryUrl,
		method: "GET"
	}).done(function(response){
		console.log(response);

		// Looping through all the data from our API call. And creating a new object for each
		// cryptocurrency.
		for(var i=0; i<response.length; i++){
			var newCryptoRow = {
				currency_id: response[i].id,
				name: response[i].name,
				symbol: response[i].symbol,
				rank: response[i].rank,
				price_usd: response[i].price_usd,
				price_btc: response[i].price_btc,
				// twentyfour_volume_usd: response[i].24h_volume_usd,
				market_cap_usd: response[i].market_cap_usd,
				available_supply: response[i].available_supply,
				total_supply: response[i].total_supply,
				max_supply: response[i].max_supply,
				percent_change_1h: response[i].percent_change_1h,
				percent_change_24h: response[i].percent_change_24h,
				percent_change_7d: response[i].percent_change_7d,
				last_updated: response[i].last_updated
			}

			$.ajax("/api/crypto-data",{
				type: "POST",
				data: newCryptoRow
			});
		}
	})

	

}