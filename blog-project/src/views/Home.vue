<template>
  <v-container class="ma-0 pa-0" grid-list-sm fluid>
    <div class="text-right">
      <v-btn small text to="/blogs" class="blue--text">
        All Blogs <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </div>
    <v-row dense>
      <blog-item-component
        v-for="blog in blogs" 
        :key="`blog-`+blog.id"
        :blog="blog"
      ></blog-item-component>
    </v-row>
  </v-container>
</template>

<script>
import BlogItemComponent from '../components/BlogItemComponent.vue'
import {mapGetters, mapMutations} from 'vuex'
  export default {
    name: 'Home',
    data: () => ({
      apiDomain: 'https://demo-api-vue.sanbercloud.com',
      blogs: [],
      multiLine: true,
      snackbar: true,
    }),

    components: {
      'blog-item-component' : BlogItemComponent
    },
    computed:{
      // count(){
      //   return this.$store.getters.count
      // }

      ...mapGetters({

      })
    },
    methods: {
      go(){
        const config = {
          method: 'get',
          url: this.apiDomain + '/api/v2/blog/random/4'
        }

        this.axios(config).then(response => {
          let {blogs} = response.data
          this.blogs = blogs;
          console.log(this.blogs)
        }).catch(error => {
          console.log(error)
        })
      },
      ...mapMutations({
        
      })
    },
    created(){
      this.go()
    }
  }
</script>
