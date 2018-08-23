<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Edit Bridge
        <b-link href="#/bridge-list">(Bridge List)</b-link>
      </h2>
      <b-jumbotron>
        <template slot="header">
          {{bridge.name}}
        </template>
        <template slot="lead">
          name: {{bridge.name}}<br>
          discord_webhook_url: {{bridge.discord_webhook_url}}<br>
          description: {{bridge.twitter_ids}}<br>
        </template>
        <hr class="my-4">
        <p>
          Updated Date: {{bridge.updated_date}}
        </p>
        <b-btn variant="success" @click.stop="editbridge(bridge._id)">Edit</b-btn>
        <b-btn variant="danger" @click.stop="deletebridge(bridge._id)">Delete</b-btn>
      </b-jumbotron>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'ShowBridge',
  data () {
    return {
      bridge: []
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
    editbridge (bridgeid) {
      this.$router.push({
        name: 'EditBridge',
        params: { id: bridgeid }
      })
    },
    deletebridge (bridgeid) {
      axios.delete('http://localhost:3000/bridge/' + bridgeid)
      .then((result) => {
        this.$router.push({
          name: 'BridgeList'
        })
      })
      .catch(e => {
        this.errors.push(e)
      })
    }
  }
}
</script>

<style>
  .jumbotron {
    padding: 2rem;
  }
</style>
