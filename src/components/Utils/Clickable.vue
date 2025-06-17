<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                    <zds-clickable
                        :clickable="clickable"
                        @click="logClickableClick"
                    >
                        Clickable text
                    </zds-clickable>
            </zds-grid-item>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Clickable',
    props: {
        /**
		 * Enables or disables clicking on the component
		 */
		clickable: {
			type: Boolean,
			default: false,
		}
    },
    data() {
        return {}
    },
    mounted () {},
    methods: {
        logClickableClick(event) {
			console.info('logClick: ', event);
		}
    },
  }
  </script>
  
  <style>
  
  </style>
  