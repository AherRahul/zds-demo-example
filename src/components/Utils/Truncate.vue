<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                    <zds-truncate
                        :width="width"
                    >
                        Long text to test truncate
                    </zds-truncate>
            </zds-grid-item>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Truncate',
    props: {
        width: {
			type: [String, Number],
			default: '20',
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
  