<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <h2>Courses</h2>
          <div v-for="course in courses">
            <p>Name: {{ course.name }}, Holes: {{ course.holes }}</p>
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
    ...mapActions(["getCourses"])
  },
  computed: {
    courses() {
      return this.$store.getters.courses;
    }
  },
  mounted() {
    this.getCourses();
  },
  destroyed() {}
};
</script>

<style>
</style>
