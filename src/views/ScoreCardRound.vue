<template>
  <div>
    <div v-for="hole in activeHole">
      <app-score-card :currentHole="currentHole"></app-score-card>
      <h1>{{hole.holeNumber}}</h1>
    </div>
    <button class="btn btn-primary" @click="decrementCurrentHole">Previous hole</button>
    <button class="btn btn-primary" @click="incrementCurrentHole">Next hole</button>
    <button @click="load">LOAD</button>
    <h1>{{courses}}</h1>
  </div>
</template>

<script>
import ScoreCard from "./Scorecard.vue";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      score: 0,
      players: [{ name: "Rasmus" }, { name: "Iron Man" }, { name: "Thor" }],
      holes: [
        { holeNumber: 1, par: 3 },
        { holeNumber: 2, par: 3 },
        { holeNumber: 3, par: 3 },
        { holeNumber: 4, par: 3 },
        { holeNumber: 5, par: 3 },
        { holeNumber: 6, par: 3 },
        { holeNumber: 7, par: 3 }
      ]
    };
  },
  methods: {
    ...mapActions(["incrementCurrentHole", "decrementCurrentHole", "load"])
  },
  computed: {
    currentHole() {
      return this.$store.getters.currentHole;
    },
    courses() {
      return this.$store.getters.courses;
    },
    activeHole() {
      return this.holes.filter(hole => {
        return hole.holeNumber === this.currentHole;
      });
    }
  },
  components: {
    appScoreCard: ScoreCard
  }
};
</script>

<style>
</style>
