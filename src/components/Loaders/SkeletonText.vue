<template>
    <div style="padding: 5px">
        <zds-grid>
            <zds-row>
                <zds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <zds-skeleton-text
                        :width="width"
                        :height="height"
                    />
                </zds-col>
            </zds-row>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SkeletonText',
    props: {
        /**
         * skeleton width
         */
		width: {
			type: String,
			required: false,
			default: '100'
		},
		/**
         * Skeleton height
         */
		height: {
			type: String,
			required: false,
			default: '25',
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
  