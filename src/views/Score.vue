<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>PROFILBILD</b-col>
        <b-col>{{playerInfo.name}}</b-col>
        <b-col>
          <button :disabled="playerInfo.score === 0" @click="playerInfo.score--">-</button>
          {{playerInfo.score[currentHole-1]}}
          <button
            :disabled="playerInfo.score === 20"
            @click="playerInfo.score++"
          >+</button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  props: ["playerInfo", "currentHole"],
  data() {
    return {
      score: 0
    };
  },
  computed: {
    score() {
      return score;
    }
  }
};
</script>

<style>
</style>
