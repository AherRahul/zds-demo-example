<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                    <zds-app-bar
                        :raBrand="true"
                        :rdsBrand="false"
                        :appSwitcher="true"
                        :help="true"
                        :settings="true"
                        :clickable="false"
                        userName="Rahul Aher"
                        userDescription="Administrator"
                        @settings-click="logClick"
                        @help-click="logClick"
                        @avatar-click="logClick"
                        @app-switcher-click="logClick"
                    >
                        <template #app-info>
                            <div class="app-switcher">
                                <zds-icon
                                    height="24"
                                    width="24"
                                    light
                                    name="calendar-outline"
                                />
                                <p class="app-name">
                                    Appointment center
                                </p>
                            </div>
                        </template>
                        <template #dropdown-content>
                                Dropdown content
                        </template>
                    </zds-app-bar>
            </zds-grid-item>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AppBar',
    props: {

    },
    data() {
        return {}
    },
    mounted () {},
    methods: {
        logClick(element) {
			console.info('%clogAction: ', 'color: #2C70CD;', element);
		},
    },
  }
  </script>
  
  <style>
  
  </style>
  