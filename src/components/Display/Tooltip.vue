<template>
    <div style="padding: 5px">
        <zds-grid>
            <zds-row>
                <zds-col  cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <zds-tooltip
                        text="Tooltip text"
                        :position="position"
                        :slim="slim"
                    >
                        Tooltip trigger
                    </zds-tooltip>
                </zds-col>
            </zds-row>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Tooltip',
    props: {
        /**
		 * The positioning of the Tooltip. The prop accepts the options: top, right, bottom and left.
		 */
		position: {
			type: String,
			default: 'top',
		},
		/**
		 * When set to true, it makes the text and tooltip size smaller.
		 */
		slim: {
			type: Boolean,
			default: false,
		}
    },
    data() {
        return {
        }
    },
    mounted () {},
    methods: {},
  }
  </script>
  
  <style>
  
  </style>
  