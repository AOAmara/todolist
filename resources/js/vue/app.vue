<template>
    <div class="appContainer">
        <div class="header">
            <h2 class="appTitle"><font-awesome-icon icon="list"/> Todo-list</h2>
            <add-item-form
                v-on:reloadlist="getList()"
            />
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

<style>
    body {
        display: grid;
        margin: 0;
        height: 100vh;
        background: #69e7cf;
        background: -webkit-linear-gradient(to top, #497ee4, #69e7cf);
        background: linear-gradient(to top, #497ee4, #69e7cf);
        font-family: 'Nunito', sans-serif;
    }
    #app {
        place-content: center;
        margin: auto;
        background: white;
        border-radius: 8px;
        padding: 24px;
        box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, .2);
        -webkit-box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, .2);
        -moz-box-shadow: 2px 2px 12px 0 rgba(0, 0, 0, .2);
    }
    .appContainer {
        width: 350px;
        margin: auto;
    }
    .header {
        text-align: center;
        margin-bottom: 24px;
    }
    .appTitle {
        text-align: center;
        margin-top: 0;
    }
</style>
