<template>
    <div style="padding: 5px">
        <zds-grid>
            <zds-row>
                <zds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <zds-carousel-controller
                        :total="12"
                        :perPage="4"
                        :simple="simple"
                        :fluid="fluid"
                        propertyName="Metrics"
                        @click-forward="handleClickForwardEvent"
                        @click-back="handleClickBackEvent"
                    />
                </zds-col>
            </zds-row>
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
  