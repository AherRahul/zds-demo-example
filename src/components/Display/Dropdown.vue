<template>
    <div style="padding: 5px">
        <zds-grid>
            <zds-row>
                <zds-col  cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <zds-dropdown
                        :label="label"
                        :content="content"
                        :disabled="disabled"
                        :dropdownWidth="dropdownWidth"
                        @click="isActive = !isActive"
                    >
                        <p>Dropdown Slot</p>
                    </zds-dropdown>
                </zds-col>
            </zds-row>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dropdown',
    props: {
        /**
		 * 	Dropdown Content.
		 */
		content: {
			type: String,
			default: 'Content',
			required: true,
		},
		/**
		 * Label displayed next to content
		 */
		label: {
			type: String,
			default: 'Label',
			required: true,
		},
		/**
		 * Control Dropdown availability
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
		/**
		 * Controls the size of the Dropdown popover (in pixels). 
		 * The size is never smaller than the width of the Dropdown.
		 */
		dropdownWidth: {
			type: Number,
			default: 0,
		},
    },
    data() {
        return {
            isActive: false,
        }
    },
    mounted () {},
    methods: {},
  }
  </script>
  
  <style>
  
  </style>
  