<template>
    <div style="padding: 5px">
        <zds-grid>
            <zds-row>
                <zds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <zds-nav-bar
                        :items="items"
                        :activeItem="items[0]"
                        variant="blue"
                        @click="logClick"
                    />
                </zds-col>
            </zds-row>
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
  