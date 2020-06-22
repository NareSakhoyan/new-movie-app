<template>
    <div class="home ">
        <SearchBar />
        <div class="container">
            <Filters />
            <MoviesList />
        </div>
    </div>
</template>

<script>
    import Filters from "../components/Filters";
    import MoviesList from "../components/MoviesList";
    import SearchBar from "../components/SearchBar";
    import {mapActions} from "vuex";

    export default {
        name: "Home",
        components: {
            MoviesList,
            Filters,
            SearchBar
        },
        data() {
          return {

          }
        },
        methods: {
            ...mapActions(['getDataFromAPI']),
            handleSearch() {
                // this.$store.commit('setMovieList');
            },
        },
        mounted() {
            this.$store.commit('setType', 'discover');
            this.getDataFromAPI()
        }
    }
</script>

<style scoped>
</style>