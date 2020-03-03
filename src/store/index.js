import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentHole: 0,
    courses: "",
    players: []
  },
  mutations: {
    INCREMENT_CURRENT_HOLE(state, payload) {
      state.currentHole++
    },
    DECREMENT_CURRENT_HOLE(state, payload) {
      state.currentHole--
    },

    async GET_COURSES(state) {
      try {
        let response = await axios.get("http://localhost:3000/rounds")
        this.state.courses = response.data[0].course
      } catch (e) {
        error => console.log(error)
      }
    },



    async GET_PLAYERS(state) {
      try {
        let response = await axios.get("http://localhost:3000/users")
        console.log(response.data)
        this.state.players = response.data
      } catch (e) {
        error => console.log(error)
      }
    },
    // async CREATE_PLAYER(state, payload) {
    //   var requestOptions = {
    //     body: payload,
    //   };

    //   console.log(payload)

    //   try {
    //     await axios.post("http://localhost:3000/users", requestOptions)
    //     res.status(201)
    //   } catch (e) {
    //     error => console.log(error)
    //   }

    // }


  },
  actions: {
    incrementCurrentHole: ({ commit }, payload) => {
      commit("INCREMENT_CURRENT_HOLE", payload);
    },
    decrementCurrentHole: ({ commit }, payload) => {
      commit("DECREMENT_CURRENT_HOLE", payload);
    },
    getCourses: ({ commit }) => {
      console.log("get_courses action");
      commit("GET_COURSES");
    },
    getPlayers: ({ commit }) => {
      console.log("get players");
      commit("GET_PLAYERS");
    },


  },
  modules: {
  },

  getters: {
    currentHole: state => {
      return state.currentHole;
    },
    courses: state => {
      return state.courses;
    },
    players: state => {
      return state.players;
    },


  }
})


