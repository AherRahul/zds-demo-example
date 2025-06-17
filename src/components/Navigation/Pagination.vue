<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                <zds-pagination
                    v-model="page"
                    value="1"
                    perPage="10"
                    total="60"
                    :fluid="true"
                />
            </zds-grid-item>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Pagination',
    props: {
        /**
		 * Prop used to receive the current page.
		 */
		modelValue: {
			type: [Number, String],
			default: 1,
		},
		/**
		 * Prop used to receive the total number of records to be paged.
		 */
		total: {
			type:Number,
			default: 1,
			validator: (value) => value >= 1,
		},
		/**
		 * Prop used to receive the number of records to be displayed
		 * per page.
		 */
		perPage: {
			type:Number,
			default: 1,
			validator: (value) => value >= 1,
		},
		/**
		 * Prop that indicates whether the component should occupy 100% of the available space.
		 */
		fluid: {
			type: Boolean,
			default: false,
		},
		/**
		 * Prop that indicates whether the component should occupy 100% of the available space.
		 */
		variant: {
			type: String,
			default: 'green',
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
  