<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                <zds-skeleton-text
                    :lines="lines"
                    :width="width"
                    :height="height"
                    :variant="variant"
                />
            </zds-grid-item>
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
		},
        /**
         * Number of lines
         */
        lines: {
            type: Number,
            required: false,
            default: 1
        },
        /**
         * Variant of the skeleton text
         */
        variant: {
            type: String,
            required: false,
            default: 'default'
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
  