<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Add Bridge
        <b-link href="#/bridge-list">(Bridge List)</b-link>
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Name"
                  description="name of your bridge">
          <b-form-input id="name" :state="state" v-model.trim="bridge.name"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Webhook URL"
                  description="Discord Webhook URL">
          <b-form-input id="discord_webhook_url" :state="state" :disabled="true" v-model.trim="bridge.discord_webhook_url"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Twitter IDs"
                  description="Twitter IDs of the to be tracked Twitter users">
          <b-form-input id="twitter_ids" :state="state" :disabled="true" v-model.trim="bridge.twitter_ids"></b-form-input>
        </b-form-group>
        <b-form-checkbox id="checkbox1"
                 v-model="bridge.include_reply_to_user">
          Include reply to user
        </b-form-checkbox>
        <b-form-checkbox id="checkbox2"
                 v-model="bridge.include_user_reply">
          Include user reply
        </b-form-checkbox>
        <b-form-checkbox id="checkbox3"
                 v-model="bridge.include_retweet">
          Include retweet
        </b-form-checkbox>
        <b-button type="submit" variant="primary">Save</b-button>
      </b-form>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button class="btn btn-outline-secondary" type="button">Add</button>
          <button class="btn btn-outline-secondary" type="button">Delete</button>
        </div>
        <input type="text" class="form-control" placeholder="Discord Webhook URL" aria-label="" aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button class="btn btn-outline-secondary" type="button">Add</button>
          <button class="btn btn-outline-secondary" type="button">Delete</button>
        </div>
        <input type="text" class="form-control" placeholder="Twitter ID" aria-label="" aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button class="btn btn-outline-secondary" type="button">Add</button>
          <button class="btn btn-outline-secondary" type="button">Delete</button>
        </div>
        <input type="text" class="form-control" placeholder="Twitter username" aria-label="" aria-describedby="basic-addon1">
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <button class="btn btn-outline-secondary" type="button">Add</button>
          <button class="btn btn-outline-secondary" type="button">Delete</button>
        </div>
        <input type="text" class="form-control" placeholder="Twitter List URL" aria-label="" aria-describedby="basic-addon1">
      </div>
      <div>State: <strong>{{bridge}}</strong></div>

    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'CreateBridge',
  data () {
    return {
      bridge: {
        name: 'cool bridge',
        discord_webhook_url: ['yo', 'no'],
        twitter_ids: [121321,1231321,1231321],
        include_reply_to_user: true,
        include_user_reply: true,
        include_retweet: true,
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.post(`http://localhost:3000/bridge`, this.bridge)
      .then(response => {
        this.$router.push({
          name: 'ShowBridge',
          params: { id: response.data._id }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    },
    details (bridge) {
      this.$router.push({
        name: 'ShowBridge',
        params: { id: bridge._id }
      })
    }
  },
  computed: {
  }
}
</script>
