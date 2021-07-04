<template>
    <div class="text-center">
        <v-dialog
        v-model="dialog"
        width="500"
        >
        <v-card 
            v-if="blog.id"
            class="mx-auto"
        >
            <v-img
            :src="blog.photo ? apiDomain + blog.photo : 'https://picsum.photos/200/300'"
            ></v-img>

            <v-card-text class="mt-6">
                <v-simple-table dense>
                    <tbody>
                        <tr>
                            <td><v-icon>mdi-format-title</v-icon> Title</td>
                            <td>{{blog.title}}</td>
                        </tr>
                        <tr>
                            <td><v-icon>mdi-note</v-icon> Description</td>
                            <td>{{blog.description}}</td>
                        </tr>
                    </tbody>
                </v-simple-table>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
                <v-btn
                    color="orange lighten-2 mr-auto"
                    text
                    @click="show = !show"
                >
                    More Details
                </v-btn>
                <v-btn
                    color="primary"
                    text
                    @click="dialog = false"
                    :to="'/blogs'"
                    class="ml-auto"
                >
                    <v-icon>mdi-chevron-left</v-icon>
                    Go Back
                </v-btn>
            </v-card-actions>
            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>
                    <v-card-text class="text--disabled">
                        <div class="text-button">Created at: {{blog.created_at}}</div>
                        <div v-if="blog.updated_at !== blog.created_at" class="text-button">Updated at: {{blog.updated_at}}</div>
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
        </v-dialog>
  </div>
</template>

<script>
export default {
    data: () =>({
        blog: {},
        apiDomain: 'https://demo-api-vue.sanbercloud.com',
        dialog: true,
        show: false,
    }),
    methods:{
        go(){
            let {id} = this.$route.params
            const config = {
                method: "get",
                url: `${this.apiDomain}/api/v2/blog/${id}`,
            }
            this.axios(config).then(response => {
                let {blog} = response.data
                this.blog = blog;
                console.log(this.blog)
            }).catch(error => {
                console.log(error)
            })
        }
    },
    created(){
        this.go()
    }
}
</script>