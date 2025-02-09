<template>
    <div style="padding: 5px">
        <zds-grid>
            <zds-row>
                <zds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <div class="page-layout-border">
                        <zds-side-bar
                            variant="indigo"
                            userName="Joana Mendes"
                            userRole="Administrator"
                            userPicture="https://i1.rgstatic.net/ii/profile.image/834217822924800-1575904436366_Q128/Joana-Mendes-13.jpg"
                            :collapsible=true
                            logoImage="https://res.cloudinary.com/duojkrgue/image/upload/v1737614196/zema-design-system/Zema_logo_qnkj5n.svg"
                            :light=false
                            :items="items"
                            :activeItem="items[4]"
                            @sidebar-click="logClick"
                            @collapse-click="logCollapseClick"
                            @logout="logLogout"
                        />
                    </div>
                </zds-col>
            </zds-row>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SideBar',
    props: {

    },
    data() {
        return {
            items: [
                {
                    label: 'Dashboard',
                    icon: 'dashboard-outline',
                    type: 'route',
                    route: {
                        path: '/navigation',
                        name: 'navigation'
                    },
                },
                {
                    label: 'Service',
                    icon: 'clipboard-text-outline',
                    type: 'route',
                    route: {
                        path: '/navigation',
                        name: 'navigation'
                    },
                },
                {
                    label: 'Links',
                    icon: 'link-outline',
                    items: [
                        {
                            label: 'Panel (Tv)',
                            route: {
                                path: 'https://www.google.com',
                                name: 'panel-tv',
                            },
                            type: 'external',
                        },
                        {
                            label: 'Totem',
                            route: {
                                path: '/navigation',
                                name: 'navigation',
                            },
                            type: 'external',
                        },
                    ]
                },
                {
                    label: 'Reports',
                    icon: 'printer-outline',
                    type: 'route',
                    route: {
                        path: '/navigation',
                        name: 'navigation'
                    },
                },
                {
                    label: 'Settings',
                    icon: 'settings-outline',
                    type: 'route',
                    items: [
                        {
                            label: 'Panel (Tv)',
                            route: {
                                path: '/navigation',
                                name: 'navigation'
                            }
                        },
                        {
                            label: 'Totem',
                            route: {
                                path: '/navigation',
                                name: 'navigation',
                            },
                        },
                        {
                            label: 'Services',
                            route: {
                                path: '/navigation',
                                name: 'navigation',
                            },
                        },
                        {
                            label: 'Categories',
                            route: {
                                path: '/navigation',
                                name: 'navigation',
                            }
                        },
                        {
                            label: 'Priorities',
                            route: {
                                path: '/navigation',
                                name: 'navigation',
                            },
                        },
                    ]
                },
                {
                    label: 'Support',
                    icon: 'lifebuoy-outline',
                    type: 'link',
                    route: {
                        path: '/navigation',
                        name: 'navigation',
                    },
                },
            ],
        }
    },
    mounted () {},
    methods: {
        logClick(element) {
			console.info('%clogItemClick: ', 'color: #2C70CD;', element);
		},
		logCollapseClick(element) {
			console.info('%clogCollapseClick: ', 'color: #2C70CD;', element);
		},
		logLogout(element) {
			console.info('%clogLogout: ', 'color: #2C70CD;', element);
		},
    },
  }
  </script>
  
  <style>
  
  </style>
  