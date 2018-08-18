var mongoose = require('mongoose');

var BridgeSchema = new mongoose.Schema({
  name: String,
  discord_webhook_url: String,
  twitter_ids: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Bridge', BridgeSchema);
