<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                <zds-inner-tabs
                    :tabs="tabs"
                    :activeTab="activeTab"
                    :variant="variant"
                    @tab-change="handleTabChange"
                />
            </zds-grid-item>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'InnerTabs',
    props: {
        /**
		 * Defines the list of InnerTabs items to be shown.
		 * List items must be objects with `name` (to identify the slot)
		 * and `title` (tab title)
		 */
		tabs: {
			type: Array,
			default: () => ([]),
			required: true,
		},
		/**
		 * The active item among the tabs
		 */
		activeTab: {
			type: Object,
			default: () => ({}),
			required: true,
		},
		/**
		 * Border color indicating the active item.
		 * There are some predefined colors following the ZDS guides, they are: 
		 * `turquoise`, `green`, `blue`, `violet`, `pink`, `red`, `orange`, `amber` and `gray`.
		 */
		variant: {
			type: String,
			default: 'green',
		},
    },
    data() {
        return {
            
        }
    },
    mounted () {},
    methods: {
        handleTabChange(tab) {
            // Handle tab change logic here
        }
    },
  }
  </script>
  
  <style>
  
  </style>
  