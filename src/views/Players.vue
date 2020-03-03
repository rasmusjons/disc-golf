<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <h2>Players</h2>
          <div v-for="player in players">
            <p>Name: {{ player.name }} || Email: {{ player.email }}</p>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {};
  },

  methods: {
    ...mapActions([
      "incrementCurrentHole",
      "decrementCurrentHole",
      "load",
      "getPlayers"
    ])
  },
  computed: {
    players() {
      return this.$store.getters.players;
    }
  },
  mounted() {
    this.getPlayers();
  },
  destroyed() {}
};
</script>

<style>
</style>
