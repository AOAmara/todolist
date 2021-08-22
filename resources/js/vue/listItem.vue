<template>
    <div class="item">
        <input
            type="checkbox"
            @change="updateCheck()"
            v-model="item.completed"
        >
        <span :class="[item.completed ? 'completed' : '', 'itemText']"> {{item.name}} </span>
        <button @click="removeItem()" class="trashcan">
            <font-awesome-icon icon="trash" />
        </button>
    </div>
</template>

<script>
    export default {
        props: ['item'],
        methods: {
            updateCheck() {
                axios.put('api/item/' + this.item.id, {
                    item: this.item
                })
                .then(response => {
                    if(response.status === 200) {
                        this.$emit('itemChanged');
                    }
                })
                .catch(error => {
                    console.log(error)
                })
            },
            removeItem() {
                axios.delete('api/item/' + this.item.id)
                .then(response => {
                    if(response.status === 200) {
                        this.$emit('itemChanged');
                    }
                })
                .catch(error => {
                    console.log(error)
                })
            }
        }
    }
</script>

<style scoped>
    .item {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
    }
    .itemText {
        width: 100%;
        margin: 0 20px;
    }
    .completed {
        text-decoration: line-through;
        color: #999999;
    }
    input[type=checkbox] {
        width: 20px;
        height: 20px;
    }
    .trashcan {
        background: #e93f33;
        border: none;
        color: #ffffff;
        outline: none;
        margin: -10px;
        padding: 15px 16px 16px;
        border-radius: 0 4px 4px 0;
        cursor: pointer;
    }
</style>
