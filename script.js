let app = new Vue({
  el: '#app',
  data: {
    artistName: '',
    songName: '',
    lyrics: '',
  },

  methods: {
    getLyrics() {
      axios
        .get('https://private-704212-lyricsovh.apiary-proxy.com/v1/' + this.artistName + '/' + this.songName)
        .then(response => (this.lyrics = response.data.lyrics))
    }
  }
})
