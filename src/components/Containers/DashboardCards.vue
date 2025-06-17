<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                <zds-dashboard-card
                    :showAction="showAction"
                    :fluid="fluid"
                    action="View list"
                    @action-button-click="handleActionClick"
                >
                    <template #title-slot>
                        <bold>45</bold>
                        <span style="margin-left: 8px; font-size: 13.5px; font-weight: 500;">pregnant women</span>
                    </template>
                    <template #status-slot>
                        <zds-badge variant="red">Alert</zds-badge>
                    </template>
                    <template #description-slot>
                        Haven't had a consultation for more than 30 days
                    </template>
                </zds-dashboard-card>
            </zds-grid-item>
        </zds-grid>
    </div>
</template>

<script>
export default {
    name: 'DashboardCards',
    props: {
        /**
		 * Prop that displays the dashboard-card action button.
		 */
		showAction: {
			type: Boolean,
			default: false,
			required: false,
		},
        /**
		 * Prop that indicates whether the component should occupy 100% of the available space.
		 */
		fluid: {
			type: Boolean,
			default: false,
		},
    },
    data() {
        return {}
    },
    mounted () {},
    methods: {
        handleActionClick() { console.info('clicked'); }
    },
}
</script>

<style>

</style>
  