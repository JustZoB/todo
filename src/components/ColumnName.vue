<template>
    <div>
        <h3 v-if="!rename" @dblclick="renameColumn">{{ name }}</h3>
        <button class="columnDelete" @click="deleteColumn">X</button>
        <input type="text" v-if="rename" v-model="newName" @keyup.enter="renameEnter">
    </div>
</template>

<script>
export default {
    data () {
        return {
            rename: false,
            newName: this.name,
        }
    },
    props: ["name", "columnId"],
    methods: {
        renameColumn: function() {
            this.rename = !this.rename;
        },
        renameEnter: function() {
            this.$store.dispatch('renameColumn', { id: this.columnId, name: this.newName } );
            this.rename = !this.rename;
        },
        deleteColumn: function() {
            this.$store.dispatch('deleteColumn', { id: this.columnId } );
        }
    }
}
</script>

<style scoped>
div {
    position: relative;
}
.columnDelete {
    position: absolute;
    top: 0;
    right: 0;
}
h3 {
    margin-top: 10px;
    text-align: center;
    font-size: 20px;
}
input {
    width: 100%;
    border-radius: 10px;
    padding: 7px 5px;
}
</style>