<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>     
				<div class="d-flex justify-content-center">
					<zds-button
						id="trigger-popover"
						@click="showModal = true"
					>
						Open "{{ size }}" Modal
					</zds-button>
					<zds-modal
						v-model="showModal"
						:title="title"
						:size="size"
						@close="showModal = false"
						@ok="showModal = false"
					>
						<span>
							Mussum Ipsum, cacilds vidis liter abertis. The order of the tractors does not change the hard bread. It's depressed,
							I know a cachacis that can brighten your life.Paisis, filhis, espiritis santis.Leite de capivaris,
							headless manquis mule milk.
						</span>
					</zds-modal>
				</div>
            </zds-grid-item>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Modal',
    props: {
		/**
		 * Defines the title of the modal displayed in the header
		 */
		title: {
			type: String,
			default: 'Title',
		},
		/**
		 * Specifies the size of the modal. There are 3 sizes implemented: 'sm', 'md', 'lg' and 'xl'.
		 */
		size: {
			type: String,
			default: 'md',
		},
		/**
		 * Sets the state of the modal action button.
		 */
		disableOkButton: {
			type: Boolean,
			default: false,
		},
		/**
		 * Defines the state of the modal's cancel button.
		 */
		disableCancelButton: {
			type: Boolean,
			default: false,
		},
		/**
		 * Controls the action of closing the modal when clicking outside.
		 */
		noCloseOnBackdrop: {
			type: Boolean,
			default: false,
		},
		/**
		 * Controls the action of closing the modal when clicking the action button.
		 */
		noCloseOkButton: {
			type: Boolean,
			default: false,
		},
		/**
		 * Controls the display of the modal's close button.
		 */
		noCloseButton: {
			type: Boolean,
			default: false,
		},
		/**
		 * Controls the display of the modal's cancel button.
		 */
		noCancelButton: {
			type: Boolean,
			default: false,
		},
		/**
		 * Controls the display of the modal footer.
		 */
		noFooter: {
			type: Boolean,
			default: false,
		},
		/**
		 * Controls the display of the modal header.
		 */
		noHeader: {
			type: Boolean,
			default: false,
		},
		/**
		 * Defines modal action button text
		 */
		okButtonText: {
			type: String,
			default: 'Confirm',
		},
		/**
		 * Defines text for the modal cancel button
		 */
		cancelButtonText: {
			type: String,
			default: 'Cancel',
		},
		/**
		 * Sets the Modal action button variant (follows ZDS button component variants)
		 */
		actionButtonVariant: {
			type: String,
			default: 'green',
		},
		/**
		 * Defines whether the modal content needs to be "scrolled" and adds a vertical scroll when the maximum height is reached
		 */
		scrollable: {
			type: Boolean,
			default: false,
		}
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
  
  </style>
  