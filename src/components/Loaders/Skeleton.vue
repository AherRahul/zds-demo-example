<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                <zds-skeleton
                    :width="width"
                    :height="height"
                    :variant="variant"
                    :rounded="rounded"
                />
            </zds-grid-item>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Skeleton',
    props: {
        /**
         * skeleton width
         */
		width: {
			type: String,
			default: '20',
		},

		/**
         * Skeleton height
         */
		height: {
			type: String,
			default: '16',
		},

		/**
		 * Adjusts according to the parent component. Does not apply to the 'circle' shape
		 */
		fluid: {
			type: Boolean,
			default: false,
		},

		/**
		 * Indicates the shape of the element. There are two options: circle, square
		 */
		shape: {
			type: String,
			default: 'square',
			validate: (value) => ['circle', 'square'].includes(value),
		},

		/**
		 * Indicates the variant of the skeleton. There are two options: default, inverted
		 */
		variant: {
			type: String,
			default: 'default',
			validate: (value) => ['default', 'inverted'].includes(value),
		},

		/**
		 * Indicates whether the skeleton is rounded. There are two options: true, false
		 */
		rounded: {
			type: Boolean,
			default: false,
		}
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
  