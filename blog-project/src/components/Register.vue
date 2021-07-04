<template>
    <v-card>
        <v-toolbar dark color="primary">
            <v-btn icon dark @click.native="close">
                <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <v-divider></v-divider>
        <v-container fluid>
            <v-form ref="form">
                <v-text-field
                    v-model="name"
                    label="Full Name"
                    required
                    append-icon="mdi-account-box"
                ></v-text-field>
                <v-text-field
                    v-model="email"
                    label="E-mail"
                    required
                    append-icon="mdi-email"
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    label="Password"
                    counter
                    required
                    @click:append="showPassword = !showPassword" 
                ></v-text-field>
                <v-file-input
                    v-model="currentPhoto"
                    show-size
                    label="File input"
                    ref="photo"
                    @change="selectFile"
                ></v-file-input>
                <div class="text-xs-center">
                    <v-btn
                        color="success lighten-1"
                        @click="submit"
                    >
                        Register
                        <v-icon right dark>mdi-chevron-right</v-icon>
                    </v-btn>
                </div>
            </v-form>
        </v-container>
    </v-card>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    data: () => {
        return{
            name: '',
            email: '',
            password: '',
            currentPhoto: undefined,
            showPassword: false,
            apiDomain: "https://demo-api-vue.sanbercloud.com"
        }
    },
    methods:{
        ...mapActions({
            setAlert: 'alert/set',
        }),
        selectFile(photo){
            this.currentPhoto = photo
        },
        close(){
            this.$emit('closed', false)
        },
        clearForm(){
            this.name = ''
            this.email = ''
            this.password = ''
            this.showPassword = false
            this.selectFile(undefined)
        },
        submit(){

            let formData = new FormData()
            formData.append('email', this.email)
            formData.append('password', this.password)
            formData.append('name', this.name)
            formData.append('photo_profile', this.currentPhoto)

            const config = {
                method: "post",
                url: this.apiDomain + '/api/v2/auth/register',
                data: formData
            }

            this.axios(config).then(() => {
                this.setAlert({
                    status: true,
                    color: 'success',
                    text: 'Register Success, Please Login First!',
                })
                this.close()
                this.clearForm()
            }).catch(() => {
                this.setAlert({
                    status: true,
                    color: 'error',
                    text: 'Register Failed, Please try again!',
                })
                this.close()
                this.clearForm()
            });
        }
        
    }
}
</script>