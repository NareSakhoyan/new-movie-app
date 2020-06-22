<template>
    <div class="profile container">
       <div class="columns">
           <div class="column is-1">
               <div class="user-details">
                    <b-field label="Name: " ><p>{{currentUser.name}}</p>
                    </b-field>
                    <b-field label="Surname: ">
                        <p>{{currentUser.surname}}</p>
                    </b-field>
                    <b-field label="Email: ">
                        <p>{{currentUser.email}}</p>
                    </b-field>
                    <b-field label="Phone: ">
                        <p>{{currentUser.phone}}</p>
                    </b-field>
                </div>
           </div>
           <div class="column">
               <MoviesList />
           </div>
       </div>
    </div>
</template>

<script>
    import MoviesList from "../components/MoviesList";
    import {mapActions} from 'vuex'

    export default {
        name: "ProfilePage",
        components: {
            MoviesList
        },
        computed: {
            currentUser() {
                return this.$store.state.currentUser
            }
        },
        methods: {
            ...mapActions(['addMovieToMovieList', 'emptyMoviesList', 'getDataFromAPI']),
            async setBookmarksList() {
                this.emptyMoviesList()
                const bookmarks = this.$store.state.currentUser.bookmarks
                for (const i in bookmarks) {
                    this.$store.commit('setSearch', bookmarks[i])
                    this.$store.commit('setType', 'getMovie')
                    await this.getDataFromAPI()
                }
          }
        },
        mounted() {
            this.setBookmarksList()
        },
        updated() {
            this.emptyMoviesList()
        }
    }
</script>

<style scoped>
    .user-details {
        margin-bottom: 50px;
    }
    .profile {
        margin-top: 50px;
    }
</style>