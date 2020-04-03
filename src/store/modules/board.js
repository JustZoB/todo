export default {
    state: { 
        columns: [
            {
                id: 0,
                name: "Statuses",
                tasks: [
                    { name: "Cook",  description: "Soup, potate and something else" },
                    { name: "Sleep", description: "6-8 hours" },
                    { name: "Run", description: "Every morning" }
                ]
            },
            { 
                id: 1,
                name: "Pending",
                tasks: [
                    { name: "Work" }
                ]
            },
            { 
                id: 2,
                name: "Cancel",
                tasks: [
                    { name: "Read" },
                    { name: "Sport" }
                ]
            },
            { 
                id: 3,
                name: "Done",
                tasks: [
                    { name: "Wash dishes" },
                    { name: "Shoping" },
                    { name: "Walk" }
                ]
            }
        ]
    },

    getters: {
        COLUMNS: (state) => {
            return state.columns
        },
        COLUMNS_COUNT: (state) => {
            return state.columns.length
        }
    },

    actions: {
        addColumn(ctx, column) {
            ctx.commit('ADD_COLUMN', column)
        },

        addTask(ctx, payload) {
            ctx.commit('ADD_TASK', payload);
        },

        deleteTask(ctx, payload) {
            ctx.commit('DELETE_TASK', payload);
        },
        
        renameColumn(ctx, payload) {
            ctx.commit('RENAME_COLUMN', payload);
        },

        changeDescription(ctx, payload) {
            ctx.commit('CHANGE_DESCRIPTION', payload);
        },

        deleteColumn(ctx, payload) {
            ctx.commit('DELETE_COLUMN', payload);
        },
    },

    mutations: {
        SET_COLUMNS: (state, payload) => {
            state.columns = payload;
        },

        ADD_COLUMN: (state, payload) => {
            let newColumn = {
                id: Math.max(...state.columns.map(item => item.id)) + 1,
                name: payload,
                tasks: []
            }
            state.columns.push(newColumn);
        },

        ADD_TASK: (state, payload) => {
            state.columns[payload.id].tasks.push({ name: payload.name, description: "Description..." });
        },

        DELETE_TASK: (state, payload) => {
            let index = state.columns[payload.id].tasks.map(item => item.name).indexOf(payload.name);
            state.columns[payload.id].tasks.splice(index, 1);
        },

        RENAME_COLUMN: (state, payload) => {
            state.columns[payload.id].name = payload.name;
        },

        CHANGE_DESCRIPTION: (state, payload) => {
            let columnId = state.columns.map(item => item.id).indexOf(payload.id),
                taskId = state.columns[columnId].tasks.map(item => item.name).indexOf(payload.name);
            state.columns[columnId].tasks[taskId].description = payload.description;
        },

        DELETE_COLUMN: (state, payload) => {
            let index = state.columns.map(item => item.id).indexOf(payload.id);
            state.columns.splice(index, 1);
        },
    }
}
