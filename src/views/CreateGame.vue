<template>
  <div>
    <b-container class="bv-example-row">
      <div v-if="startGame">
        <h1>Create Game</h1>
        <p>Choose Course</p>
        <ul>
          <li v-for="course in courses">{{ course }}</li>
        </ul>

        <p>Pick player</p>
        <ul>
          <li v-for="(player, index) in computedPickedPlayers" :key="index">
            {{ player.name }}
            <button class="btn btn-primary" @click="add(player.name)">add</button>
          </li>
        </ul>
        <p>Added players:</p>
        <ul>
          <li v-for="(player, index) in computedAddedPlayers" :key="index">
            {{ player.name }}
            <button class="btn btn-primary" @click="remove(player.name)">remove</button>
          </li>
        </ul>
        <button class="btn btn-secondary" @click="startGame=!startGame">Start game</button>
      </div>

      <div v-if="!startGame">
        <p>Added players:</p>
        <ul>
          <li v-for="(player, index) in computedAddedPlayers" :key="index">{{ player.name }}</li>
        </ul>
        <button class="btn btn-secondary" @click="startGame=!startGame">Back to players</button>
      </div>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      courses: [],
      pickPlayers: [],
      addedPlayers: [],
      startGame: true
    };
  },

  methods: {
    ...mapActions([
      "incrementCurrentHole",
      "decrementCurrentHole",
      "getCourses",
      "getPlayers"
    ]),
    add(playername) {
      const index = this.pickPlayers
        .map(e => {
          return e.name;
        })
        .indexOf(playername);

      this.addedPlayers.push(this.pickPlayers[index]);
      this.pickPlayers.splice(index, 1);
    },
    remove(playername) {
      const index = this.addedPlayers
        .map(e => {
          return e.name;
        })
        .indexOf(playername);

      console.log("hej", index, this.addedPlayers);

      this.pickPlayers.push(this.addedPlayers[index]);
      this.addedPlayers.splice(index, 1);
      console.log(this.pickPlayers);
      console.log(this.addedPlayers);
    }
  },
  computed: {
    computedPickedPlayers() {
      this.pickPlayers = this.$store.getters.players;
      return this.pickPlayers;
    },
    computedAddedPlayers() {
      return this.addedPlayers;
    },
    computedCourses() {
      this.courses = this.$store.getters.courses;
      return this.courses;
    }
  },
  // mounted() {
  //   this.getPlayers();
  //   this.getCourses();
  // },
  destroyed() {}
};
</script>

<style>
</style>
