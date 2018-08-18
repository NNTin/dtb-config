<template>
  <b-row>
    <b-col cols="12">
      <h2>
        Bridge List
        <b-link href="#/add-bridge">(Add Bridge)</b-link>
      </h2>
      <b-table striped hover :items="books" :fields="fields">
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
        isbn: { label: 'ISBN', sortable: true, 'class': 'text-center' },
        title: { label: 'Bridge Title', sortable: true },
        actions: { label: 'Action', 'class': 'text-center' }
      },
      books: [],
      errors: []
    }
  },
  created () {
    axios.get(`http://localhost:3000/book`)
    .then(response => {
      this.books = response.data
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
