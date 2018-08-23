var mongoose = require('mongoose');

var BridgeSchema = new mongoose.Schema({
  name: String,
  discord_webhook_url: [String],
  twitter_ids: [Number],
  include_reply_to_user: Boolean,
  include_user_reply: Boolean,
  include_reply_tweet:  Boolean,
  include_retweet: Boolean,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Bridge', BridgeSchema);
