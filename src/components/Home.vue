<template>
  <div class="mainContainr">
    <div class="formContainer">
      <input
        type="text"
        placeholder="firstname"
        class="inputBox"
        v-model="firstname"
      />
      <input
        type="text"
        placeholder="lastname"
        class="inputBox"
        v-model="lastname"
      />
      <input
        type="text"
        placeholder="mobile"
        class="inputBox"
        v-model="mobile"
      />
      <input
        type="text"
        placeholder="username"
        class="inputBox"
        v-model="username"
      />
    </div>
    <div class="buttonContainer">
      <button @click="getFormData">submit</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      firstname: "",
      lastname: "",
      mobile: "",
      username: "",
      formData: [],
    };
  },
  beforeCreate() {
    this.$store.commit("initialiseStore");
  },
  methods: {
    getFormData() {
      let formData = {
        firstname: this.firstname,
        lastname: this.lastname,
        mobile: this.mobile,
        username: this.username,
      };
      this.formData.push(formData);
      console.log("printing form data", this.formData.length);
      console.log("printing form data", this.formData);
      this.$store.dispatch("getUpdatedData", this.formData);
    },
  },
};
</script>
<style scoped></style>
