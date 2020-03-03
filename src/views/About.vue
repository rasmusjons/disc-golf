<template>
  <div class="about">
    <h1>Create player</h1>
    <form>
      <input v-model="name" placeholder="type name" />
      <input v-model="email" placeholder="type email" />
      <input v-model="password" placeholder="type password" />
    </form>
    <button class="btn btn-primary" @click="CREATE_PLAYER">Submit</button>
  </div>
</template>


<script>
import { mapActions } from "vuex";
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      password: ""
    };
  },
  methods: {
    CREATE_PLAYER() {
      const user = {
        name: this.name,
        email: this.email,
        password: this.password
      };

      axios
        .post("http://localhost:3000/users", user)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  // computed: {
  //   lastAddedPlayerName() {
  //     return this.$store.getters
  //   }
  // }
};
</script>