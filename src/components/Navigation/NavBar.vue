<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                <zds-nav-bar
                    :items="items"
                    :activeItem="items[0]"
                    variant="blue"
                    @click="logClick"
                />
            </zds-grid-item>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
    props: {

    },
    data() {
        return {
            items: [
                {
                    label: 'Risk group map',
                    route: {
                        path: '/navigation',
                        name: 'navigation'
                    },
                },
                {
                    label: 'Healthy League',
                    route: {
                        path: '/navigation',
                        name: 'navigation'
                    },
                },
                {
                    label: 'Neighborhood heat map',
                    route: {
                        path: '/navigation',
                        name: 'navigation'
                    },
                },
            ],
        }
    },
    mounted () {},
    methods: {
        logClick(element) {
			console.info('logAction: ', element);
		},
    },
  }
  </script>
  
  <style>
  
  </style>
  