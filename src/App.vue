<template>
<div id="app">
  <div class='container'>
    <div class="row">
      <div class="col-xs-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
        <h1>Http</h1>
        <div class="form-group">
          <label for="">Username</label>
          <input type="text" class="form-control" id="" placeholder="" v-model="user.username">
        </div>
        <div class="form-group">
          <label for="mail">Mail</label>
          <input type="text" class="form-control" id="" placeholder="" v-model="user.email">

        </div>
        <button type="submit" name="button" class="btn btn-primary" @click="submit">Submit</button>
        <button type="submit" class="btn btn-primary ml-2" @click="fetchData">Get data</button>
      </div>

      <ul class="list-group">
        <li class="list-group-item" v-for="(u,i) in users" :key="i">{{u.username}} - {{u.email}}</li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      user: {
        username: '',
        email: ''
      },
      users: []
    }
  },
  /*
  notice how the url is repeting in the get and post  methods so we can add this url to main.jsand make it universal
  so it will be use as root url  by Vue.http.option.root = 'https://trial-ea03e-default-rtdb.firebaseio.com/data.json'
 notice how in this case http does not have a dollar symbol the reason is becaus '$' is only used in the vue instance (app.vue in this case))
*/
  methods: {
    submit() {
      this.$http.post('https://trial-ea03e-default-rtdb.firebaseio.com/data.json', this.user)
        .then(response => {
          console.log(response);
        }, error => {
          console.log(error);
        });

    },
    fetchData() {
      this.$http.get('https://trial-ea03e-default-rtdb.firebaseio.com/data.json')
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray=[];
          console.log(data);
          for ( let key in data){
              resultArray.push(data[key]);
          }
          this.users=resultArray;
        })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
