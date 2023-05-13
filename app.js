const app = Vue.createApp({
  data() {
    return {
      firstName: "Random",
      lastName: "Name",
      email: "random@email.com",
      gender: "male",
      picture:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      phone: 9816243331,
      age: 29,
    };
  },
  methods: {
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();
      (this.firstName = results[0].name.first),
        (this.lastName = results[0].name.last),
        (this.email = results[0].email),
        (this.gender = results[0].gender),
        (this.picture = results[0].picture.large),
        (this.phone = results[0].phone),
        (this.age = results[0].dob.age);
    },
  },
});

app.mount("#app");
