<template>
    <v-col cols="12">
        <v-card rounded="xl">
            <div class="d-flex flex-no-wrap justify-space-betweeen">
            <div>
                <v-card-title
                class="text-h5"
                v-text="blog.title"
                ></v-card-title>
                <v-card-subtitle v-text="blog.description"></v-card-subtitle>
                <v-card-text class="text--disabled">
                <div>Created at: {{blog.created_at}}</div>
                <div v-if="blog.updated_at !== blog.created_at">Updated at: {{blog.updated_at}}</div>
                </v-card-text>
                <v-card-actions>
                <v-btn
                    class="ml-1 mt-5"
                    color="primary"
                    outlined
                    rounded
                    small
                    :to="'/blog/' + blog.id"
                >
                    View Blog
                </v-btn>
                
                    <v-btn
                        class="ml-1 mt-5"
                        color="warning"
                        outlined
                        rounded
                        small
                        @click="editForm(blog.id)"
                        v-if="token !== ''"
                    >
                        <v-icon>mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-btn
                        class="ml-1 mt-5"
                        color="error"
                        outlined
                        rounded
                        small
                        @click="deleteForm(blog.id)"
                        v-if="token !== ''"
                    >
                        <v-icon>mdi-trash-can-outline</v-icon>
                    </v-btn>
                    <v-btn
                        class="ml-1 mt-5"
                        color="secondary"
                        outlined
                        rounded
                        small
                        @click="uploadPhoto(blog.id)"
                        v-if="token !== ''"
                    >
                        <v-icon>mdi-image-plus</v-icon>
                    </v-btn>
                </v-card-actions>
            </div>
            <v-avatar
                class="ma-3 ml-auto"
                size="125"
                tile
            >
                <v-img :src="blog.photo ? apiDomain + blog.photo : 'https://picsum.photos/200/300'"></v-img>
            </v-avatar>
            </div>
        </v-card>
        <div class="my-6"></div>
    </v-col>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data : () => ({
        apiDomain: 'https://demo-api-vue.sanbercloud.com',
    }),
    computed:{
        ...mapGetters({
            token: 'auth/token'
        })
    },
    methods:{
        ...mapActions({
            setDialogComponent : 'dialog/setComponent'
        }),
        uploadPhoto(id){
            const config = {
                method: "get",
                url: `${this.apiDomain}/api/v2/blog/${id}`,
            }
            this.axios(config).then((response) => {
                let {blog} = response.data
                this.setDialogComponent({
                'component' : 'blog-form', 
                'params' : {
                    id : id,
                    status: 'upload',
                    blogTitle: blog.title,
                    blogDescription: blog.description,
                    statusCheck: false
                }
            })
            }).catch(error => {
                console.log(error)
            })
        },
        editForm(id){
            const config = {
                method: "get",
                url: `${this.apiDomain}/api/v2/blog/${id}`,
            }
            this.axios(config).then((response) => {
                let {blog} = response.data
                this.setDialogComponent({
                'component' : 'blog-form', 
                'params' : {
                    id : id,
                    status: 'edit',
                    blogTitle: blog.title,
                    blogDescription: blog.description
                }
            })
            }).catch(error => {
                console.log(error)
            })
        },
        deleteForm(id){
            this.setDialogComponent({
                'component' : 'blog-form', 
                'params' : {
                    id : id,
                    status: 'delete'
                }
            })
        }
    },
    props: ['blog']
}
</script>