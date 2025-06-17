<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                <div class="d-flex justify-content-center">
                    <zds-button
                        :id="targetId"
                        @click="showPopover = !showPopover"
                    >
                        Click
                    </zds-button>
                    <zds-popover
                        :width="width"
                        :fitContentWidth="fitContentWidth"
                        :height="height"
                        :targetId="targetId"
                        :rightAligned="rightAligned"
                        :verticalFluid="verticalFluid"
                        v-model="showPopover"
                    >
                        <span>
                            Mussum Ipsum, cacilds vidis liter abertis. The order of the tractors does not change the hard bread. It's depressed,
                            I know a cachacis that can brighten your life.Paisis, filhis, espiritis santis.Leite de capivaris,
                            headless manquis mule milk.
                        </span>
                        <span>
                            Mussum Ipsum, cacilds vidis liter abertis. The order of the tractors does not change the hard bread. It's depressed,
                            I know a cachacis that can brighten your life.Paisis, filhis, espiritis santis.Leite de capivaris,
                            headless manquis mule milk.
                        </span>
                    </zds-popover>
                </div>
            </zds-grid-item>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Popover',
    props: {
        /**
		 * Popover width. The minimum width is 100px and the maximum is 400px.
		 */
		width: {
			type: [String, Number],
			default: 250,
		},
		/**
		* When true makes the popover width adaptable to the content. `This prop takes precedence over the width prop!`
		*/
		fitContentWidth: {
			type: Boolean,
			default: false,
		},
		/**
		 * Popover height. The maximum height is 500px
		 */
		height: {
			type: [String, Number],
			default: 200,
		},
		/**
		 * ID of the element that will be a reference for rendering
		 * from Popover.
		 */
		targetId: {
			type: String,
			default: '',
		},
		/**
		 * When `true`, aligns the popover to the right of the
		 * of the reference component (target).
		 */
		rightAligned: {
			type: Boolean,
			default: false,
		},
		/**
		 * When `true`, removes the internal scroll and makes it
		 * the size of the fluid Popover.
		 */
		verticalFluid: {
			type: Boolean,
			default: false,
		},
    },
    data() {
        return {
            showPopover: false,
        }
    },
    mounted () {},
    methods: {},
  }
  </script>
  
  <style>
  
  </style>
  