<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                <zds-spinner
                    :size="size"
                    :variant="variant"
                    :thickness="thickness"
                />
            </zds-grid-item>
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
  