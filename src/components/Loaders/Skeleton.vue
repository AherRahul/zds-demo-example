<template>
    <div style="padding: 5px">
        <zds-grid>
            <zds-row>
                <zds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <zds-skeleton
						:width="width"
                        :height="height"
                        :fluid="fluid"
                        :shape="shape"
					/>
                </zds-col>
            </zds-row>
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
  