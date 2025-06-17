<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                <div>
                    <span
                        :id="targetId"
                        @mouseover="showPopover = true"
                        @mouseleave="showPopover = false"
                    >
                        Tooltip trigger
                    </span>
                    <zds-rich-tooltip
                        v-model="showPopover"
                        :targetId="targetId"
                        :fitContentWidth="fitContentWidth"
                        :width="width"
                    >
                        <div>
                            <p><strong>In attendance:</strong> 280</p>
                            <p><strong>Pending:</strong> 60</p>
                            <p><strong>In monitoring:</strong> 600</p>
                        </div>
                    </zds-rich-tooltip>
                </div>
            </zds-grid-item>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RichTooltip',
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
		* ID of the element that will be a reference for rendering
		* from Popover.
		*/
		targetId: {
			type: String,
			default: '',
		},
		/**
		* Indicates the default placement of the Popover.
		* When not specified, "bottom" positioning is considered
		*/
		defaultPlacement: {
			type: String,
			default: null,
		}
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
  