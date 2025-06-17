<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                <zds-carousel-controller
                    :items="items"
                    :autoplay="autoplay"
                    :interval="interval"
                    :showControls="showControls"
                    :showIndicators="showIndicators"
                >
                    <template #item="{ item }">
                        <slot name="item" :item="item"></slot>
                    </template>
                </zds-carousel-controller>
            </zds-grid-item>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CarouselController',
    props: {
        /**
		 * A boolean flag to enable a simple mode for the carousel.
		**/
		simple: {
			type: Boolean,
			default: false,
			required: false,
		},
        /**
		 * A boolean flag to enable fluid layout for the carousel.
		**/
		fluid: {
			type: Boolean,
			default: false,
			required: false,
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
  