<template>
    <div style="padding: 5px">
        <zds-grid>
            <zds-row>
                <zds-col  cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <zds-progress-bar
                        :variant="variant"
                        :value="value"
                        :showText="showText"
                        :textAside="textAside"
                    />
                </zds-col>
            </zds-row>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProgressBar',
    props: {
        /**
		 * The color variant. There are 9 variants implemented: 'green', 'teal', 
		 * 'turquoise', 'blue', 'indigo', 'violet', 'pink', 'red', 'orange' and 'amber'.
		 */
		variant: {
			type: String,
			default: 'green',
		},
		/**
		 * Sets the ProgressBar's progress indicator.
		 */
		value: {
			type: Number,
			default: 0,
			required: true,
		},
		/**
		 * Defines whether the percentage will be shown.
		 */
		showText: {
			type: Boolean,
			default: false,
			required: false,
		},
		/**
		 * When true, wraps the text to the right.
		 */
		textAside: {
			type: Boolean,
			default: false,
		},
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
  