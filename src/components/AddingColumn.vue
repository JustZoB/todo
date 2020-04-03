<template>
    <div class="column">
        <div class="adding-area" v-if="!show">
            <input v-model="columnName" type="text" placeholder="Enter text">
            <button type="button" class="btn btn-primary" @click="addColumn">Add Column</button>
        </div>
        <button type="button" class="btn btn-primary" v-if="show" @click="showInput">Add Column</button>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "AddingColumn",
    computed: mapGetters(["COLUMNS"]),

    data () {
        return {
            show: true,
            columnName: "",
        }
    },
    methods: {
        addColumn: function() {
            this.$store.dispatch('addColumn', this.columnName);
            this.columnName = "";
            this.showInput();
        },
        showInput: function() {
            this.show = !this.show;
        }
    }
}
</script>

<style scoped>
.column {
    max-width: 200px;
}
button {
    width: 100%;
    margin: 5px 0px;
}
input {
    width: 100%;
    padding: 8px 10px;
    margin: 5px 0;
    resize: none;
    cursor: text;
    border-radius: 5px;
}
</style>
