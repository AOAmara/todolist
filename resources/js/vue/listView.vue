<template>
    <div>
        <div v-if="items.length">
            <div v-for="(item, index) in items" :key="index">
                <list-item
                    :item="item"
                    class="item"
                    v-on:itemChanged="$emit('reloadlist')"
                />
            </div>
        </div>
        <div v-if="items.length === 0" class="text-center">
            <p>No tasks todo</p>
        </div>
    </div>
</template>

<script>
    import listItem from "./listItem";
    export default {
        props: ['items'],
        components: {
            listItem
        }
    }
</script>

<style scoped>
    .item {
        background: #f3f1f4;
        padding: 10px;
        margin-top: 8px;
    }
    .text-center {
        text-align: center;
    }
</style>
