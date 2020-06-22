<template>
    <div class="filters">
        <b-field label="Filters: ">
            <div v-for="(value, filter) in filters" :key="filter" class="mr">
                <b-field :label="filter==='with_genres'? 'Genres': filter" class="is-capitalized"></b-field>
                <b-select :name="filter" placeholder="Choose..." @blur="changeFilter">
                    <option
                            v-for="(i, index) in value"
                            :value="i"
                            :key="`${filter}${index}}`">
                        {{i}}
                    </option>
                </b-select>
            </div>
        </b-field>
        <b-button class="is-outlined is-success-passive apply" @click="applyFilters">apply</b-button>
    </div>
</template>

<script>
    //year, genre, region
    import {mapActions} from 'vuex'

    export default {
        name: "Filter",
        data() {
            return {
                filterModels: {},
            }
        },
        computed: {
            filters() {
                return this.$store.state.filters
            },
            genreGroups() {
                return this.$store.state.genreGroups
            }
        },
        methods: {
            ...mapActions(['getDataFromAPI']),
            changeFilter (e) {
                console.log('changing filter')
                let value = e.target.value
                if (value === 'Choose...') return ;
                const key = e.target.name
                if (key === 'with_genres') {
                    value = this.genreGroups.filter(({name}) => {
                        return name===value
                    })[0].id
                }
                this.filterModels[key] = value
            },
            applyFilters() {
                this.$store.commit('setSearch', this.filterModels)
                this.$store.commit('setType', 'discover')
                this.getDataFromAPI()
            },
        },
        mounted() {
            this.$store.commit('setType', 'getGenres')
            this.getDataFromAPI()
        },
    }
</script>

<style scoped>
    .col-md-4{
        padding: 0;
        margin-bottom: 50px;
    }
    button {
        margin-top: 15px;
    }
    .mr {
        margin-left: 20px;
    }
    .filters {
        margin: 20px 0 40px 0;
    }
</style>
