<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Bridge
        <router-link :to="{ name: 'ShowBridge', params: { id: bridge._id } }">(Show Bridge)</router-link>
      </h2>
      <b-form @submit="onSubmit">
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter name of the bridge">
          <b-form-input id="name" :state="state" v-model.trim="bridge.name"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Discord Webhook URL">
          <b-form-input id="discord_webhook_url" :state="state" v-model.trim="bridge.discord_webhook_url"></b-form-input>
        </b-form-group>
        <b-form-group id="fieldsetHorizontal"
                  horizontal
                  :label-cols="4"
                  breakpoint="md"
                  label="Enter Twitter IDs">
          <b-form-input id="twitter_ids" :state="state" v-model.trim="bridge.twitter_ids"></b-form-input>
        </b-form-group>
        <b-button type="submit" variant="primary">Update</b-button>
      </b-form>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'EditBridge',
  data () {
    return {
      bridge: {}
    }
  },
  created () {
    axios.get(`http://localhost:3000/bridge/` + this.$route.params.id)
    .then(response => {
      this.bridge = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      axios.put(`http://localhost:3000/bridge/` + this.$route.params.id, this.bridge)
      .then(response => {
        this.$router.push({
          name: 'ShowBridge',
          params: { id: this.$route.params.id }
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>
