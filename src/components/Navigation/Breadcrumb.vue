<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                <zds-breadcrumb
                    :items="items"
                    :variant="variant"
                    :separator="separator"
                />
            </zds-grid-item>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Breadcrumb',
    props: {
        /**
		 * Defines the list of Breadcrumb items to be
		 * shown. The list items must be
		 * objects with path or route, and with a label.
		 */
		items: {
			type: Array,
			default: () => ([]),
			required: true,
		},
    },
    data() {
        return {
            items: [
                {
                    label: 'Reports',
                    route: {
                        path: '/navigation',
                        name: 'reports'
                    },
                },
                {
                    label: 'Individualized reports',
                    route: {
                        path: '/navigation',
                        name: 'individualized'
                    },
                },
                {
                    label: 'User Report',
                    route: {
                        path: '/navigation',
                        name: 'users'
                    },
                },
            ],
        }
    },
    mounted () {},
    methods: {},
  }
  </script>
  
  <style>
  
  </style>
  