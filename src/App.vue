<template>
  <div id="app">
    <GithubCorner :discordcolor="colors.discordfill" :discordfill="colors.discordcolor"/>
    <DiscordCorner :background="background" :discordEyes="discordEyes" customLink="https://discord.gg/ZVQywBg" :isRainbow="isRainbow" :animationStyle="animationStyle" id="discordcorner" :discordcolor="colors.discordfill" :discordfill="colors.discordcolor"/>
    <router-view/>
  </div>
</template>

<script>
import DiscordCorner from './components/DiscordCorner.vue'
import GithubCorner from './components/GithubCorner.vue'

export default {
  name: 'App',
  components: {
    DiscordCorner, GithubCorner
  },
  data () {
    return {
      background: 'none',
      discordEyes: 'none',
      isRainbow: false,
      animationStyle: 'swirl',
      standardText: 'Join my Discord server!',
      previewDiscordType: 'standard',
      colors: {
        discordcolor: '#7289DA',
        discordfill: '#FFFFFF'
      }
    }
  },
  computed: {
    getBackgroundColor: {
      get: function() {
        return {
          backgroundColor: this.colors.discordfill,
          paddingBottom: "50px"
        }
      }
    }
  }
}
</script>

<style>
html,body {
  height: 100%;
  margin: 0px;
  /*background-color: #2C2F33;*/
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#discordcorner {
	position: absolute;
	top: 0;
	left: 0;
	border: 0;
}
</style>
