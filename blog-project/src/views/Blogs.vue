<template>
  <v-container class="ma-0 pa-0" grid-list-sm fluid>
    <div>
      <v-btn
        outlined
        rounded
        small
        v-if="token !== ''"
        @click="createPost"
      >
          Create Blog
          <v-icon>mdi-plus-circle-outline</v-icon>
      </v-btn>
    </div>
    <v-subheader>
      All Blogs
    </v-subheader>
    <v-row dense>
      <blog-item-component
        v-for="blog in blogs" 
        :key="`blog-`+blog.id"
        :blog="blog"
      ></blog-item-component>
    </v-row>
    <div class="text-center">
      <v-pagination
        v-model="page"
        @input="go"
        :length="lengthPage"
        :total-visible="perPage"
      ></v-pagination>
    </div>
  </v-container>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
  import BlogItemComponent from '../components/BlogItemComponent.vue'

  export default {
    data: () => ({
      apiDomain: "https://demo-api-vue.sanbercloud.com",
      blogs: [],
      page: 0,
      lengthPage: 0,
      perPage: 0
    }),
    computed:{
      ...mapGetters({
        token: 'auth/token'
      })
    },
    components: {
      'blog-item-component' : BlogItemComponent
    },
    methods: {
      ...mapActions({
        setDialogComponent : 'dialog/setComponent',
      }),
      createPost(){
        this.setDialogComponent({'component' : 'blog-form', 'params' : {
          status : 'create'
        }})
      },  
      go(){
        const config = {
          method: "get",
          url: this.apiDomain + "/api/v2/blog",
          params: {'page' : this.page}
        };
        this.axios(config).then((response) => {
          let {blogs} = response.data
          this.blogs = blogs.data
          this.page = blogs.current_page
          this.lengthPage = blogs.last_page
          this.perPage = blogs.per_page
        }).catch((err) => {
            console.log(err)
        });
      }
    },
    created(){
      this.go()
    }
  }

</script>