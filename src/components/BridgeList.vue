<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Bridge List
        <b-link href="#/add-bridge">(Add Bridge)</b-link>
      </h2>
      <b-table striped hover :items="bridges" :fields="fields">
        <template slot="actions" scope="row">
          <b-btn size="sm" @click.stop="details(row.item)">Details</b-btn>
        </template>
      </b-table>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">
          {{error.message}}
        </li>
      </ul>
    </b-col>
  </b-row>
</template>

<script>

import axios from 'axios'

export default {
  name: 'BridgeList',
  data () {
    return {
      fields: {
        name: { label: "Name of Bridge", sortable: true, 'class': 'text-center' },
        discord_webhook_url: { label: 'Discord WH', sortable: true },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      bridges: [{
        name: 'cool bridge',
        discord_webhook_url: ['yo', 'no'],
        twitter_ids: [121321,1231321,1231321]
      }],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/bridge`)
    .then(response => {
      this.bridges = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  methods: {
    details (bridge) {
      this.$router.push({
        name: 'ShowBridge',
        params: { id: bridge._id }
      })
    }
  }
}
</script>
