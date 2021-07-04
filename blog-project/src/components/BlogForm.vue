<template>
    <div>
        <v-card v-if="params.status === 'edit' || params.status === 'create' || params.status === 'upload'">
            <v-card-title>
            <span class="text-h5" v-if="params.status === 'edit'">Edit Blog</span>
            <span class="text-h5" v-if="params.status === 'create'">Create Blog</span>
            <span class="text-h5" v-if="params.status === 'upload'">Upload Photo on a Blog</span>
            </v-card-title>
            <v-container fluid >
                    <v-form :key="params.id" v-if="params.status === 'create'">
                        <v-col
                        >
                            <v-text-field
                            label="Blog Title"
                            v-model="inputCreate.title"
                            required
                            ref="title"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            <v-text-field
                            label="Blog Description"
                            v-model="inputCreate.description"
                            required
                            ref="description"
                            ></v-text-field>
                        </v-col>
                        <div class="text-center">
                            <v-btn
                                color="primary lighten-1"
                                @click="submit"
                            >   
                                Submit
                                <v-icon right dark>mdi-send-circle-outline</v-icon>
                            </v-btn>
                        </div>
                    </v-form>
                    <v-form :key="params.id" v-if="params.status === 'upload' || params.status === 'edit'">
                        <v-col
                        >
                            <v-text-field
                            label="Blog Title"
                            v-model="inputEdit.title"
                            required
                            ref="title"
                            :disabled="params.status == 'upload'"
                            ></v-text-field>
                        </v-col>
                        <v-col
                            cols="12"
                        >
                            <v-text-field
                            label="Blog Description"
                            v-model="inputEdit.description"
                            required
                            ref="description"
                            :disabled="params.status == 'upload'"
                            ></v-text-field>
                        </v-col>
                        <v-col v-if="params.status == 'upload'">
                            <v-file-input
                                show-size
                                label="File input"
                                ref="photo"
                                @change="selectFile"
                            ></v-file-input>
                        </v-col>
                        <div class="text-center" v-if="params.status == 'edit'">
                            <v-btn
                                color="primary lighten-1"
                                @click="submit"
                            >   
                                Submit
                                <v-icon right dark>mdi-send-circle-outline</v-icon>
                            </v-btn>
                        </div>
                        <div class="text-center" v-if="params.status == 'upload'">
                            <v-btn
                                color="primary lighten-1"
                                @click="uploadPhoto"
                            >   
                                Upload Photo
                                <v-icon right dark>mdi-send-circle-outline</v-icon>
                            </v-btn>
                        </div>
                    </v-form>
            </v-container>
            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="error darken-1"
                text
                @click="close"
            >
                Close
            </v-btn>
            </v-card-actions>
        </v-card>
        <v-card v-if="params.status === 'delete'">
            <v-card-title class="text-h6">
            Do you want to delete this Blog?
            </v-card-title>

            <v-card-text>
                If you click yes, you won't be see this Blog anymore.
            </v-card-text>

            <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="succes darken-1"
                text
                @click="handleDelete"
            >
                Yes
            </v-btn>
            <v-btn
                color="error darken-1"
                text
                @click="close"
            >
                Cancel
            </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data: () => {
        return{
            inputEdit: {
                title: '',
                description: ''
            },
            inputCreate: {
                title: '',
                description: ''
            },
            errorForm: [],
            currentPhoto: undefined,
            apiDomain: 'https://demo-api-vue.sanbercloud.com'
        }
    },
    computed:{
        ...mapGetters({
            params: 'dialog/params',
            token: 'auth/token'
        })
    },
    methods:{
        ...mapActions({
            setAlert : 'alert/set'
        }),
        selectFile(photo){
            this.currentPhoto = photo
        },
        validationForm(){
            this.errorForm = []
            if(this.params.status === 'create'){
                if(this.inputCreate.title.length < 5 && this.inputCreate.description.length > 30){
                    this.errorForm.push("Title Minimum 5 Characters")
                    this.errorForm.push("Description Maximum 30 Characters")
                    this.close()
                    this.setAlert({
                        status: true,
                        color: 'error',
                        text: `Blog failed to ${this.params.status}! Title Minimum 5 Characters and Description Maximum 30 Characters`
                    })
                }else if(this.inputCreate.title.length < 5){
                    this.errorForm.push("Title Minimum 5 Characters")
                    this.close()
                    this.setAlert({
                        status: true,
                        color: 'error',
                        text: `Blog failed to ${this.params.status}! Title Minimum 5 Characters`
                    }) 
                }else if(this.inputCreate.description.length > 30){
                    this.errorForm.push("Description Maximum 30 Characters")
                    this.close()
                    this.setAlert({
                        status: true,
                        color: 'error',
                        text: `Blog failed to ${this.params.status}! Description Maximum 30 Characters`
                    })
                }
            }else if(this.params.status === 'edit'){
                if(this.inputEdit.title.length < 5 && this.inputEdit.description.length > 30){
                    this.errorForm.push("Title Minimum 5 Characters")
                    this.errorForm.push("Description Maximum 30 Characters")
                    this.close()
                    this.setAlert({
                        status: true,
                        color: 'error',
                        text: `Blog failed to ${this.params.status}! Title Minimum 5 Characters and Description Maximum 30 Characters`
                    })
                }else if(this.inputEdit.title.length < 5){
                    this.errorForm.push("Title Minimum 5 Characters")
                    this.close()
                    this.setAlert({
                        status: true,
                        color: 'error',
                        text: `Blog failed to ${this.params.status}! Title Minimum 5 Characters`
                    }) 
                }else if(this.inputEdit.description.length > 30){
                    this.errorForm.push("Description Maximum 30 Characters")
                    this.close()
                    this.setAlert({
                        status: true,
                        color: 'error',
                        text: `Blog failed to ${this.params.status}! Description Maximum 30 Characters`
                    })
                }
            }
        },
        handleDelete(){
            const config = {
                method: "post",
                url: `${this.apiDomain}/api/v2/blog/${this.params.id}`,
                params: { _method: "DELETE" },
                headers: {
                    'Authorization' : 'Bearer ' + this.token
                }
            }
            this.axios(config).then(() => {
                this.setAlert({
                    status: true,
                    color: 'success',
                    text: 'Blog has been deleted'
                })
                this.close()
                this.$router.go(this.$router.currentRoute)

            }).catch(() => {
                this.setAlert({
                    status: true,
                    color: 'error',
                    text: 'Blog has not deleted yet!'
                })
                this.close()
            });
        },
        submit(){
            this.validationForm()
            if(this.errorForm.length === 0){
                if(this.params.status === 'create'){
                    let formData = new FormData()
                    formData.append('title', this.inputCreate.title)
                    formData.append('description', this.inputCreate.description)
                    const config = {
                        method: "post",
                        url: `${this.apiDomain}/api/v2/blog`,
                        data: formData,
                        headers: {
                            'Authorization' : 'Bearer ' + this.token
                        }
                    }
                    this.axios(config).then(() => {
                        this.setAlert({
                            status: true,
                            color: 'success',
                            text: 'Blog has been created'
                        })
                        this.close()
                        this.$router.go(this.$router.currentRoute)
                    }).catch((err) => {
                        console.log(err)
                        this.setAlert({
                            status: true,
                            color: 'error',
                            text: 'Blog failed to create!'
                        })
                        this.close()
                    });
                }else if(this.params.status === 'edit'){
                    let formData = new FormData()
                    formData.append('title', this.inputEdit.title)
                    formData.append('description', this.inputEdit.description)

                    const config = {
                        method: "post",
                        url: `${this.apiDomain}/api/v2/blog/${this.params.id}`,
                        params: { _method: 'PUT' },
                        data: formData,
                        headers: {
                            'Authorization' : 'Bearer ' + this.token
                        }
                    }
                    this.axios(config).then(() => {
                        this.setAlert({
                            status: true,
                            color: 'success',
                            text: 'Blog has been updated'
                        })
                        this.close()
                        this.$router.go(this.$router.currentRoute)
                    }).catch((err) => {
                        console.log(err)
                        this.setAlert({
                            status: true,
                            color: 'error',
                            text: 'Blog failed to update!'
                        })
                        this.close()
                    });
                }
            }
        },
        uploadPhoto(){
            //Kalau ga submit foto apapun
            if(this.currentPhoto === undefined){
                this.close()
                this.setAlert({
                    status: true,
                    color: 'error',
                    text: 'No photo uploaded, please try again!'
                })
                return;
            }

            let formData = new FormData()
            formData.append('photo', this.currentPhoto)

            const config = {
                method: "post",
                url: `${this.apiDomain}/api/v2/blog/${this.params.id}/upload-photo`,
                data: formData,
                headers: {
                    'Authorization' : 'Bearer ' + this.token
                }
            }

            this.axios(config).then(() => {
                this.setAlert({
                    status: true,
                    color: 'success',
                    text: 'Photo Uploaded Succesfully!'
                })
                this.close()
                this.$router.go(this.$router.currentRoute)
            }).catch(() => {
                this.setAlert({
                    status: true,
                    color: 'error',
                    text: 'Photo failed to be uploaded!'
                })
            });
        },
        close(){
            if(this.params.status == 'edit' || this.params.status == 'upload'){
                this.clearFormEdit()
            }else{
                this.clearFormCreate()
            }
            this.$emit('closed', false)
        },
        clearFormEdit(){
            this.inputEdit = {
                title : '',
                description : '',
            }
        },
        clearFormCreate(){
            this.inputCreate = {
                title : '',
                description : '',
            }
        },
        checkStatus(){
            if(this.params.status == 'edit' || this.params.status == 'upload'){
                if(!this.params.statusCheck){
                    this.inputEdit = {
                        title : this.params.blogTitle,
                        description : this.params.blogDescription
                    }
                    this.params.statusCheck = true
                }
            }else{
                this.clearFormEdit();
            }
        }
    },
    created(){
        this.checkStatus()
    },
    beforeUpdate(){
        this.checkStatus()
    }
}
</script>