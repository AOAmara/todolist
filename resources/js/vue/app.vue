<template>
    <div class="appContainer">
        <div class="header">
            <h2 class="appTitle">Todo List</h2>
            <add-item-form />
        </div>
        <list-view
            :items="items"
            v-on:reloadlist="getList()"
        />
    </div>
</template>

<script>
    import addItemForm from "./addItemForm";
    import listView from "./listView";
    export default {
        components: {
            addItemForm,
            listView
        },
        data: function () {
            return {
                items: []
            }
        },
        methods: {
            getList() {
                axios.get('api/items')
                .then(response => {
                    this.items = response.data
                })
                .catch(error => {
                    console.log(error)
                })
            }
        },
        created() {
            this.getList();
        }
    }
</script>

<style scoped>
    .appContainer {
        width: 350px;
        margin: auto;
    }
    .header {
        background: #e6e6e6;
        padding: 12px;
        border-radius: 8px;
    }
    .appTitle {
        text-align: center;
    }
</style>
