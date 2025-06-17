<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                <zds-link
                    :href="href"
                    :variant="variant"
                    :target="target"
                    :disabled="disabled"
                >
                    <slot></slot>
                </zds-link>
            </zds-grid-item>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LinkComponent',
    props: {
        /**
		* Redirect URL.
		*/
		href: {
			type: String,
			required: true,
		},
		/**
		* Prop used to redirect the link from a new tab.
		*/
		newTab: {
			type: Boolean,
			default: false,
		},
		/**
		* Text used in the URL address for the user.
		*/
		text: {
			type: String,
			required: true,
		},
		/**
		* Text used in the URL address for the user.
		*/
		size: {
			type: String,
			default: 'md',
		},
		/**
		* Text used in the URL address for the user.
		*/
		bold: {
			type: Boolean,
			default: false,
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
  