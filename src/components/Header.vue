<template>
    <div class="header">
        <b-navbar>
            <template slot="brand">
                <b-navbar-item tag="router-link" :to="{ path: '/' }">
                    <img
                            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                            alt="Lightweight UI components for Vue.js based on Bulma"
                    >
                </b-navbar-item>
            </template>
            <template slot="start">
                <b-navbar-item href="/">
                    Home
                </b-navbar-item>
                <b-navbar-item href="/">
                    Documentation
                </b-navbar-item>
                <b-navbar-dropdown label="Info">
                    <b-navbar-item href="/">
                        About
                    </b-navbar-item>
                    <b-navbar-item href="/">
                        Contact
                    </b-navbar-item>
                </b-navbar-dropdown>
            </template>

            <template slot="end">
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <router-link v-if="loggedIn"  to="/profile">
                            <img src="../assets/profile.png" class="profileImg mr" alt="" loading="lazy">
                        </router-link>
                        <b-navbar-item tag="router-link" to="/logout" v-if="loggedIn">
                            <a  class=" button is-light" @click="logout()">Log out</a>
                        </b-navbar-item>
                        <router-link v-if="!loggedIn"  to="/register" class="mr">
                            <a class=" button is-primary"><strong>Sign up</strong></a>
                        </router-link>
                        <router-link v-if="!loggedIn"  to="/login">
                            <a class=" button is-light">Log in</a>
                        </router-link>
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>
    </div>
</template>

<script>
    import {mapActions} from 'vuex'

    export default {
        name: "Header",
        data() {
            return {
                moviesList: [],
            }
        },
        computed: {
            loggedIn() {
                console.log(5555, this.$store.state.loggedIn, 5555, !!localStorage.token)
                return this.$store.state.loggedIn
            }
        },
        methods: {
            ...mapActions(['logoutInStore']),
            logout(){
                this.logoutInStore()
            },

        },

    }
</script>

<style scoped>
    .profileImg {
        height: 30px;
        width: auto;
    }
    .mr {
        margin-right: 10px;
    }
</style>