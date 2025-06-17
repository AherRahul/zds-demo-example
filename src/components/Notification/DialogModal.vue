<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                <zds-button
                    id="trigger-popover"
                    @click="showModal = true"
                >
                    {{ variant }} popup
                </zds-button>
                <zds-dialog-modal
                    id="my-modal"
                    v-model="showModal"
                    :variant="variant"
                    title="Are you sure you want to continue?"
                    description="This action will affect the system and associated files. 
                    By proceeding, you confirm that you are aware of and 
                    agree to the consequences. Do you wish to continue?"
                    @close="showModal = false"
                    @ok="showModal = false"
                >
                </zds-dialog-modal>
            </zds-grid-item>
        </zds-grid>
    </div>
</template>

<script>
export default {
    name: 'DialogModal',
    props: {
        /**
		 *  Defines the Dialog Modal variant.
		 */
		variant: {
			type: String,
			default: 'warning',
		},
    },
    data() {
        return {
            showModal: false,
        }
    },
    mounted () {},
    methods: {},
}
</script>

<style>

#my-modal .zds-modal {
    width: 85% !important;
}
</style>
  