<template>
    <div>
        <div class="adding-area" v-if="!show" @keyup.enter="addTask">
            <input v-model="taskName" type="text" placeholder="Enter text">
            <button type="button" class="btn btn-primary" @click="addTask">Add Task</button>
        </div>
        <button type="button"  class="btn btn-primary" v-if="show" @click="showInput" @keyup.esc="this.show = false">
            Add Task
        </button>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "AddingTask",
    computed: mapGetters(["COLUMNS"]),

    data () {
        return {
            show: true,
            taskName: ""
        }
    },
    props: ['columnId'],
    methods: {
        addTask: function() {
            this.$store.dispatch('addTask', { id: this.columnId, name: this.taskName } );
            this.taskName = "";
            this.showInput();
        },
        showInput: function() {
            this.show = !this.show;
        }
    }
    
}
</script>

<style scoped>
button {
    width: 100%;
    margin: 5px 0px;
}
input {
    width: 100%;
    margin: 5px 0;
    padding: 5px;
    resize: none;
    cursor: text;
    border-radius: 5px;
}
</style>
