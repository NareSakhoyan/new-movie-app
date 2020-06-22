<template>
    <section>
       <div class="columns">
           <form class="column is-4 is-offset-4">
               <b-field label="Email">
                   <b-input v-model="email" type="email" maxlength="30"></b-input>
               </b-field>

               <b-field label="Password">
                   <b-input password-reveal v-model="password" type="password" maxlength="30"></b-input>
               </b-field>
               <b-field v-if="error" class="error">Your email or password is incorrect</b-field>
               <b-button type="is-info submit" @click="submitLogin" >Log in</b-button>
           </form>
       </div>
    </section>
</template>

<script>
    import {mapActions} from 'vuex'
    export default {
        data () {
            return {
                email: '',
                password: '',
                error: false,

            }
        },
        computed: {
            loggedIn() {
                return this.$store.state.loggedIn
            }
        },
        methods: {
            ...mapActions(['login']),
            submitLogin () {
                console.log('email', this.email, 'pass', this.password)
                this.$store.commit('setCurrentUser', {email: this.email, password: this.password})
                this.login()
                setTimeout(() => {
                    if (this.loggedIn){
                        this.$router.replace(this.$route.query.redirect || '/')
                    }
                    else{
                        this.error = true
                    }
                }, 100)
            }
        }
    }
</script>

<style>
    .error {
        color: red;
    }
</style>