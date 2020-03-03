<template>
  <div>
    <app-score v-for="player in players" :playerInfo="player" :currentHole="currentHole"></app-score>
  </div>
</template>

<script>
import Score from "./Score.vue";
export default {
  props: ["currentHole"],
  data() {
    return {
      score: 0,
      players: [
        { name: "Rasmus", score: [0] },
        { name: "Iron Man", score: [0] },
        { name: "Thor", score: [0] }
      ]
    };
  },
  components: {
    appScore: Score
  }
};
</script>

<style>
</style>
