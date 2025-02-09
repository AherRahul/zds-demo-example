<template>
    <div style="padding: 5px">
        <zds-grid>
            <zds-row>
                <zds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
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
                </zds-col>
            </zds-row>
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
  