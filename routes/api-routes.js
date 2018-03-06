var db = require("../models");

// create new row for data. 

module.exports = function(app){
	app.post("/api/crypto-data", function(req, res){
		// console.log(req.body);
		// console.log("This is Working");
		db.Pricing.create({
			currency_id: req.body.currency_id,
			name: req.body.name,
			symbol: req.body.symbol,
			rank: req.body.rank,
			price_usd: req.body.price_usd,
			price_btc: req.body.price_btc,
			twentyfour_volume_usd: req.body.twentyfour_volume_usd,
			market_cap_usd: req.body.market_cap_usd,
			available_supply: req.body.available_supply,
			total_supply: req.body.total_supply,
			max_supply: req.body.max_supply,
			percent_change_1h: req.body.percent_change_1h,
			percent_change_24h: req.body.percent_change_24h,
			percent_change_7d: req.body.percent_change_7d,
			last_update: req.body.last_update
		}).then(function(dbPost){
			res.json(dbPost);
			console.log(dbPost);
		});
	});

	// Scrape - Post Route
	app.post("/api/exchange-volume", function(req, res){
		db.exchangeVolume.create({
			exchange_name: req.body.exchangeName,
			twentyfour_hour_volume: req.body.exchangeTwentyHourVolume,
			website: "www."+req.body.exchangeName+".com"
		}).then(function(dbPost){
			res.json(dbPost);
			console.log(dbPost);
		})
	})



}