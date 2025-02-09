<template>
    <div style="padding: 5px">
        <zds-grid>
            <zds-row>
                <zds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <zds-spinner
                        :variant="variant"
                        :size="size"
                        :delay="delay"
                    />
                </zds-col>
            </zds-row>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Spinner',
    props: {
        /**
		*	Property referring to the component size ('sm', 'md' or 'lg')
		*
		*/
		size: {
			type: String,
			default: 'md',
		},
		/**
		* 	Component color variant ('turquoise', 'green', 'blue',
		* 	'indigo', 'violet', 'pink', 'red', 'orange', 'amber')
		*
		*/
		variant: {
			type: String,
			default: 'green',
		},
		/**
		* Delay for spinner display, in ms
		*
		*/
		delay: {
			type:Number,
			default: 0,
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
  