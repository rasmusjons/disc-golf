<template>
  <div>
    <div v-if="!roundStarted">
      <h1>Scorecard</h1>
      <input v-model="name" />
      <p>{{ name }}</p>

      <button @click="submitPlayer">Add player to round</button>

      <p>Players in round:</p>
      <p>{{ addPlayer }}</p>
      <button @click="roundStarted = true">Start round</button>
    </div>

    <div v-else :class="{ display: active }">
      <h4>Total score: {{ totalScore }}</h4>
      <p>{{ addPlayer }}</p>
      <p>Hole {{ scoreCard[counter].hole }}</p>
      <p>{{ scoreCard[counter].score }}</p>

      <button :disabled="scoreCard[counter].score === 10" @click="scoreCard[counter].score++">+</button>
      <button :disabled="scoreCard[counter].score === 0" @click="scoreCard[counter].score--">-</button>
      <!-- 
      <ul>
        <li @click="counter = 0">1 </li>
        <li @click="counter = 1">2</li>
        <li @click="counter = 2">3</li>
        <li @click="counter = 3">4</li>
        <li @click="counter = 4">5</li>
        <li @click="counter = 5">6</li>
        <li @click="counter = 6">7</li>
        <li @click="counter = 7">8</li>
        <li @click="counter = 8">9</li>
        <li @click="counter = 9">10</li>
        <li @click="counter = 10">11</li>
      </ul>-->
      <button @click="active = !active">End round</button>
    </div>
    <ul>
      <li v-for="(player, index) in addedPlayer" :key="index">
        {{ player.name }}
        <ul>
          <li v-for="(scoreinfo, index) in player.scorecard" :key="index">
            {{ scoreinfo.hole }}
            {{ scoreinfo.score }}
          </li>
          <!-- <li></li> -->
        </ul>
      </li>
      <!-- <li v-for="(item, index) in addedPlayer" :key="index">
        Name: {{ item.name }} Hole: {{ item.scorecard }}
      </li>-->
      <h4>Total score!!!: {{ totalScore }}</h4>
    </ul>
    <button :class="{ display: !active }" @click="active = !active">Edit round</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      roundStarted: false,
      active: false,
      name: "",
      addedPlayer: [],
      scoreCard: [
        { hole: 1, score: 0 },
        { hole: 2, score: 0 },
        { hole: 3, score: 0 },
        { hole: 4, score: 0 },
        { hole: 5, score: 0 },
        { hole: 6, score: 0 },
        { hole: 7, score: 0 },
        { hole: 8, score: 0 },
        { hole: 9, score: 0 }
      ],
      counter: 0,
      activeClass: false
    };
  },
  computed: {
    addPlayer() {
      let nameList = [];
      this.addedPlayer.forEach(element => {
        nameList.push(element.name);
      });
      return nameList.toString();
    },
    totalScore() {
      let sum = 0;
      this.scoreCard.forEach(element => {
        sum += element.score;
      });
      return sum;
    }
  },
  methods: {
    submitPlayer() {
      this.addedPlayer.push({
        name: this.name,
        scorecard: this.scoreCard
      });
      this.name = "";
    }
  }
};
</script>

<style>
ul {
  display: flex;
}

li {
  list-style: none;
  padding: 10px;
  cursor: pointer;
}

.yellow {
  background: yellow;
}

.display {
  display: none;
}
</style>
