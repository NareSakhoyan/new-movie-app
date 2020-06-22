<template>
    <section class="hero is-light">
        <div class="hero-body">
            <div class="container">
                <b-field position="is-centered">
                    <b-input placeholder="Search..." type="search" icon="magnify" v-model="searchText">
                    </b-input>
                    <p class="control">
                        <router-link :to="{path: `/search/${searchText}`}">
                            <button class="button is-info" @click="handleSearch">Search</button>
                        </router-link>
                    </p>
                </b-field>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "SearchBar",
        computed: {
            searchText: {
                get: function () {
                    let text = this.$store.state.search
                    if (!isNaN(parseInt(text))){
                        text = parseInt(text)
                    }
                    if (typeof text === "number" || typeof text === "object"){
                        return ''
                    }
                    console.log(444, typeof text == "number")
                    return  text;
                },
                set: function (e) {
                    this.$store.commit('setSearch', e)
                }
            },
        },
        methods: {
            handleSearch() {
                this.$route.params.search = this.searchText
            },
        }
    }
</script>

<style scoped>

</style>