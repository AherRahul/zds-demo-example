<template>
    <div class="panel-card">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                <div class="panel-content">
                    <zds-panel-card
                        title="Networks"
                        subtitle="Enable regulatory networks"
                        :noContentPadding="noContentPadding"
                    >
                        <template #panel-actions>
                            <strong>#</strong>
                        </template>
                        Mussum Ipsum, cacilds vidis liter abertis. Everyone
                        see the mistakes I take, but no one sees the mistakes I take!
                        I threw the stick at the cathouse, but you didn't die. There, then
                        divoltis porris, paradis. Capybara milk, mule milk
                        headless manquis.
                    </zds-panel-card>
                </div>
            </zds-grid-item>
        </zds-grid>
    </div>
</template>

<script>
export default {
    name: 'PanelCard',
    props: {
        /**
		 * Card title.
		 */
		title: {
			type: String,
			default: 'Title',
			required: true,
		},
		/**
		 * Card subtitle.
		 */
		subtitle: {
			type: String,
			default: 'Subtitle',
			required: true,
		},
		/**
		 * Removes the default padding from the card body.
		 */
		noContentPadding: {
			type: Boolean,
			default: false,
		},
    },
    data() {
        return {}
    },
    mounted () {},
    methods: {},
}
</script>

<style>

</style>
