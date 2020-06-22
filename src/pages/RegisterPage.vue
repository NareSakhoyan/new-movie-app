<template>
    <div>
        <div class="columns">
            <div class="column is-4 is-offset-4">
                <h2 class="has-text-centered title">Registration</h2>
                <b-field label="Name">
                    <b-input v-model="user.name"></b-input>
                </b-field>
                <b-field label="Surname">
                    <b-input v-model="user.surname"></b-input>
                </b-field>
                <b-field label="Email">
                    <b-input type="email" v-model="user.email"></b-input>
                </b-field>
                <b-field label="Phone">
                    <b-input type="number" v-model="user.phone"></b-input>
                </b-field>
                <b-field label="Password">
                    <b-input type="password" v-model="user.password" password-reveal></b-input>
                </b-field>
                <b-button type="is-info is-medium" @click="register" :disabled="!isValid">Register</b-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "Register",
        data(){
            return{
                user: {
                    id:null,
                    name: '',
                    surname: '',
                    email: '',
                    phone: '',
                    password: '',
                },
            };
        },
        computed : {
            isValid() {
                let isValid = false
                if (this.user.name && this.user.surname && this.user.email && this.user.phone && this.user.password){
                    isValid = true
                }
                return isValid
            }
        },
        methods: {
            ...mapActions(['addUserToDatabase']),
            register() {
               this.$store.commit('setCurrentUser', this.user)
                this.addUserToDatabase()
                this.$router.push({path: '/'})
            }
        },
        mounted() {
            this.user = {}
        }
    }
</script>

<style scoped>
</style>