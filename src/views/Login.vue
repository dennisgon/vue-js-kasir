<template>
  <form>
    <div class="container">
      <h1>Login Form</h1>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username" v-model="input.username"  placeholder="Enter username">
      </div>
      <div class="form-group">
        <label for="passwords">Password</label>
        <input type="password" class="form-control" v-model="input.password" id="passwords" placeholder="Password">
      </div>
      <button type="submit" v-on:click="login()" class="btn btn-primary">Submit</button>
    </div>
  </form>

</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      input: {
          username: "",
          password: ""
      }
    }
  },
  methods: {
    login() {
      if(this.input.username != "" && this.input.password != "") {
          if(this.input.username == "test" && this.input.password == "test") {
              // this.$emit("authenticated", true);
              this.$router.replace({ name: "Menu" });
          } else {
              console.log("The username and / or password is incorrect");
          }
      } else {
          console.log("A username and password must be present");
      }
    }
  }


}
</script>

<style scoped>
</style>
