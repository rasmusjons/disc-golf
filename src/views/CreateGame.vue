<template>
  <div>
    <b-container class="bv-example-row">
      <div v-if="!startGame">
        <h1>Create Game</h1>
        <p>Choose Course</p>
        <b-container class="bv-example-row">
          <b-col md="12">
            <ul>
              <li v-for="course in computedCourses">
                {{ course.name }} Holes: {{course.holes}}
                <button
                  class="btn btn-primary"
                  @click="addCourse(course.name)"
                >Pick</button>
              </li>
            </ul>
          </b-col>
        </b-container>
        <hr />
        <p>Pick player</p>
        <ul>
          <li v-for="(player, index) in computedPickedPlayers" :key="index">
            {{ player.name }}
            <button class="btn btn-primary" @click="add(player.name)">add</button>
          </li>
        </ul>
        <hr />
        <p>Added players:</p>
        <ul>
          <li v-for="(player, index) in computedAddedPlayers" :key="index">
            {{ player.name }}
            <button class="btn btn-primary" @click="remove(player.name)">remove</button>
          </li>
        </ul>
      </div>
      <hr />
      <div v-if="!startGame" class="game">
        <p>Game:</p>
        <ul>
          <h3 v-for="course in addedCourse">{{course.name}}</h3>
          <li v-for="(player, index) in computedAddedPlayers" :key="index">{{ player.name }}</li>
        </ul>
        <button class="btn btn-secondary" @click="startGame=!startGame">Start game</button>
      </div>

      <div v-if="!startGame" class="scoreCard">
        <h1>Score Card</h1>
        <div v-for="numberOfHoles in addedCourse">
          <!-- <div v-for="holes in numberOfHoles.holes">{{ holes }}</div> -->
          <h5>{{numberOfHoles.holes - numberOfHoles.holes + counter }}</h5>
          <ul>
            <li v-for="player in addedPlayers">
              {{ player.name }}
              {{score}}
              <button
                :disabled="score === 0"
                @click="score--"
              >-</button>
              <button :disabled="score=== 10" @click="score++">+</button>
            </li>
          </ul>
          <button @click="counter--" :disabled="counter === 0">previous hole</button>
          <button @click="counter++" :disabled="counter === numberOfHoles.holes">next hole</button>
        </div>
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
      addedCourse: [],
      pickPlayers: [],
      addedPlayers: [],
      startGame: false,
      counter: 1,
      score: []
    };
  },

  methods: {
    ...mapActions([
      "incrementCurrentHole",
      "decrementCurrentHole",
      "getCourses",
      "getPlayers"
    ]),
    // indexOf(name, array) {
    //   const index = array
    //     .map(e => {
    //       return e.name;
    //     })
    //     .indexOf(name);
    //   return index;
    // },                   skriv om upprepande kod nedan.
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
      this.pickPlayers.push(this.addedPlayers[index]);
      this.addedPlayers.splice(index, 1);
    },
    addCourse(coursename) {
      const index = this.courses
        .map(e => {
          return e.name;
        })
        .indexOf(coursename);

      this.addedCourse.push(this.courses[index]);
      this.courses.splice(0, this.courses.length);
      console.log(this.courses);
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
    },
    computedAddedCourses() {
      return this.addedCourse;
    }
  },
  mounted() {
    this.getPlayers();
    this.getCourses();
  },
  destroyed() {}
};
</script>

<style>
.game {
  background-color: goldenrod;
}

li {
  list-style-type: none;
  padding: 10px;
}
</style>
