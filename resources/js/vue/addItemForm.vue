<template>
    <div class="addItem">
        <input type="text" placeholder="Add new item to the list" v-model="item.name"/>
        <button @click="addItem()"
                :class="[item.name ? 'active' : 'inactive', 'plus']">
            <font-awesome-icon icon="plus"/>
        </button>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                item: {
                    name: ""
                }
            }
        },
        methods: {
            addItem() {
                if(this.item.name === '') {
                    return;
                }

                axios.post('api/item/store', {
                    item: this.item
                })
                .then(response => {
                    if(response.status === 201) {
                        this.item.name = "";
                        this.$emit('reloadlist')
                    }
                })
                .catch(error => {
                    console.log(error);
                })
            }
        }
    }
</script>

<style scoped>
    .addItem {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    input {
        width: 100%;
        background: #f7f7f7;
        font-family: 'Nunito', sans-serif;
        font-size: 16px;
        border: 1px solid #ccc;
        outline: none;
        padding: 10px;
        margin-right: 10px;
        border-radius: 4px;
    }
    .plus {
        font-size: 20px;
        border: none;
        background: #8d4be3;
        border-radius: 4px;
        padding: 11px 14px 10px 14px;
    }
    .active {
        color: #FFF;
    }
    .inactive {
        color: #FFF;
        opacity: .5;
    }
</style>
