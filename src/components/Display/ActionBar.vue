<template>
    <div class="action-bar-container">
        <zds-grid 
            cols="minmax(120px, 200px) 1fr"
            gap="20px"
            justify="start"
            align="center"
        >
            <zds-grid-item>
                <zds-button
                    variant="blue"
                    size="sm"
                    text="Open"
                    @click="showActionBar = !showActionBar"
                />
            </zds-grid-item>
            <zds-grid-item>
                <zds-action-bar
                    v-bind="args"
                    :show="showActionBar"
                    :dismissible="dismissible"
                    :float="float"
                    :light="light"
                    @click="logAction"
                    @close="logClose"
                >
                    <template #description>
                        8 selected items
                    </template>
                </zds-action-bar>
            </zds-grid-item>
        </zds-grid>
    </div>
</template>
  
<script>
export default {
    name: 'ActionBar',
    props: {
        light: {
            type: Boolean,
            default: false,
        },
        dismissible: {
            type: Boolean,
            default: false,
        },
        float: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            showActionBar: false,
            args: {
                actions: [
                    "Button1",
                    "Button2",
                    "Button3"
                ],
                description: '8 selected items'
            }
        }
    },
    methods: {
        logAction() {
            console.log("logAction called");
        },
        logClose() {
            console.log("logClose called");
            this.showActionBar = false;
        }
    },
}
</script>
  
<style scoped>
.action-bar-container {
    width: 100%;
    padding: 16px;
}

@media (max-width: 768px) {
    .action-bar-container {
        padding: 8px;
    }
}
</style>
  