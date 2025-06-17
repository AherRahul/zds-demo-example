<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item cols="12">
                    <zds-alert
                        :variant="variant"
                        :text="text"
                        :dismissible="dismissible"
                        @close="closeAlert"
                    />
            </zds-grid-item>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Alert',
    props: {
        /**
		 * The Alert variant. There are 3 variants implemented: 'info', 'warning' and 'danger'
		 */
		variant: {
			type: String,
			default: 'info',
			required: false,
		},
		/**
		 * The title of the alert. The title can also be used with the slot.
		 */
		text: {
			type: String,
			default: 'AlertCard Title',
			required: false,
		},
		/**
		 * Prop that displays the alert close button.
		 */
		dismissible: {
			type: Boolean,
			default: false,
			required: false,
		},
    },
    data() {
        return {
        }
    },
    mounted () {},
    methods: {
        closeAlert() {
            console.log("closeAlert callled for", this.variant);
        }
    },
  }
  </script>
  
  <style>
  
  </style>
  