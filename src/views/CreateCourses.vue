<template>
  <div class="about">
    <h1>Create player</h1>
    <form>
      <input v-model="name" placeholder="type name" />
      <p>Number of holes</p>
      <input v-model="holes" type="radio" id="18" name="holes" value="18" />
      <label for="18">18</label>
      <br />
      <input v-model="holes" type="radio" id="9" name="holes" value="9" />
      <label for="female">9</label>
      <br />
    </form>
    <button class="btn btn-primary" @click="createCourse">Submit</button>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      holes: 0
    };
  },
  methods: {
    createCourse() {
      const course = {
        name: this.name,
        holes: this.holes
      };

      axios
        .post("http://localhost:3000/courses", course)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log("hej", error);
        });

      this.name = "";
    }
  }

  // computed: {
  //   lastAddedPlayerName() {
  //     return this.$store.getters
  //   }
  // }
};
</script>