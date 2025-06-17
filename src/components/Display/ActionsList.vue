<template>
    <div class="actions-list-container">
        <zds-grid 
            cols="minmax(auto, 1200px)"
            gap="20px"
            justify="start"
            align="center"
        >
            <zds-grid-item>
                <zds-actions-list
                    :actions="actions"
                    :numberOfExpandedActions="numberOfExpandedActions"
                    @expanded="expandedActionList"
                    @action-clicked="actionClickedActionList"
                >
                    <template #action="{ list }">
                        {{ list.title }}
                    </template>
                </zds-actions-list>
            </zds-grid-item>
        </zds-grid>
    </div>
</template>
  
<script>
export default {
    name: 'ActionList',
    props: {
        numberOfExpandedActions: {
            type: Number,
            default: 2,
        },
    },
    data() {
        return {
            actions: [
                {
                    "title": "Icon1",
                    "disabled": true
                },
                {
                    "title": "Icon2"
                },
                {
                    "title": "Icon3"
                },
                {
                    "title": "Icon4"
                }
            ],
        }
    },
    mounted () {},
    methods: {
        expandedActionList() {
            console.log("expandedActionList called");
        },
        actionClickedActionList() {
            console.log("action-clicked called");
        }
    },
}
</script>
  
<style scoped>
.actions-list-container {
    width: 100%;
    padding: 16px;
}

@media (max-width: 768px) {
    .actions-list-container {
        padding: 8px;
    }
}
</style>
  