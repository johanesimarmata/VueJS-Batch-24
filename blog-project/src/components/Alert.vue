<template>
    <div class="text-center">
        <template>
        <div class="text-center">
            <v-snackbar
            :timeout="3000"
            :value="true"
            absolute
            centered
            bottom
            shaped
            :color="color"
            elevation="24"
            v-model="alert"
            >
            {{text}}
            <template v-slot:action="{ attrs }">
                <v-btn
                color="color"
                text
                v-bind="attrs"
                @click="close"
                >
                <span><v-icon>mdi-close</v-icon></span>
                Close
                </v-btn>
            </template>
            </v-snackbar>
        </div>
        </template>
    </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
export default {
    name: "alert",
    computed: {
        ...mapGetters({
            status: "alert/status",
            color: "alert/color",
            text: "alert/text"
        }),
        alert: {
            get(){
                return this.status;
            },
            set(value){
                this.setAlert({
                    status: value
                })
            }
        }
    },
    methods: {
        ...mapActions({
            setAlert: "alert/set"
        }),
        close() {
            this.setAlert({
                status : false
            })
        }
    }
}
</script>