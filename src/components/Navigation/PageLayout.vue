<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                    <div class="page-layout-border">
                        <zds-page-layout
                            v-bind="args"
                            @navigation-item-click="logClick"
                            @sidebar-item-click="logClick"
                            @sidebar-logout="logLogout"
                        >
                            <template #default>
                                Page content
                            </template>
                        </zds-page-layout> 
                    </div>
            </zds-grid-item>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PageLayout',
    props: {

    },
    data() {
        return {
            args: {
                variant: 'blue',
                light: true,
                user: {
                    "name": "Joana Mendes",
                    "role": "Administrator",
                    "picture": "https://i1.rgstatic.net/ii/profile.image/834217822924800-1575904436366_Q128/Joana-Mendes-13.jpg"
                },
                collapsibleSideBar: true,
                sideBarItems: [
                    {
                    "label": "Display",
                    "icon": "edit-outline",
                    "type": "route",
                    "route": {
                        "path": "/navigation",
                        "name": "navigation"
                        }
                    },
                    {
                    "label": "Notification",
                    "icon": "notification-bell-outline",
                    "type": "route",
                    "route": {
                        "path": "/navigation",
                        "name": "navigation"
                        }
                    },
                    {
                    "label": "Forms",
                    "icon": "clipboard-outline",
                    "type": "route",
                    "route": {
                        "path": "/navigation",
                        "name": "navigation"
                        }
                    },
                    {
                    "label": "Navigation",
                    "icon": "expand-outline",
                    "type": "route",
                    "route": {
                        "path": "/navigation",
                        "name": "navigation"
                        }
                    },
                    {
                    "label": "Containers",
                    "icon": "dashboard-outline",
                    "type": "route",
                    "route": {
                        "path": "/navigation",
                        "name": "navigation"
                        }
                    },
                    {
                    "label": "Overlays",
                    "icon": "test-tube-outline",
                    "type": "route",
                    "route": {
                        "path": "/navigation",
                        "name": "navigation"
                        }
                    },
                    {
                    "label": "Loaders",
                    "icon": "refresh-outline",
                    "type": "route",
                    "route": {
                        "path": "/navigation",
                        "name": "navigation"
                        }
                    },
                    {
                    "label": "Structural",
                    "icon": "layers-outline",
                    "type": "route",
                    "route": {
                        "path": "/navigation",
                        "name": "navigation"
                        }
                    },
                    {
                    "label": "Utils",
                    "icon": "bullseye-outline",
                    "type": "route",
                    "route": {
                        "path": "/navigation",
                        "name": "navigation"
                        }
                    },
                    {
                    "label": "Charts",
                    "icon": "chart-column-outline",
                    "type": "route",
                    "route": {
                        "path": "/navigation",
                        "name": "navigation"
                        }
                    },
                ],
                sideBarActiveItem: {
                    // "label": "Settings",
                    // "icon": "settings-outline",
                    // "type": "route",
                    // "items": [
                    //   {
                    //     "label": "Panel (Tv)",
                    //     "route": {
                    //       "path": "/home",
                    //       "name": "home"
                    //     }
                    //   },
                    //   {
                    //     "label": "Totem",
                    //     "route": {
                    //       "path": "/home",
                    //       "name": "home"
                    //     }
                    //   },
                    //   {
                    //     "label": "Services",
                    //     "route": {
                    //       "path": "/home",
                    //       "name": "home"
                    //     }
                    //   },
                    //   {
                    //     "label": "Categories",
                    //     "route": {
                    //       "path": "/home",
                    //       "name": "home"
                    //     }
                    //   },
                    //   {
                    //     "label": "Priorities",
                    //     "route": {
                    //       "path": "/home",
                    //       "name": "home"
                    //     }
                    //   }
                    // ]
                },
                navigationActiveItem: {
                    "key": "home",
                    "label": "Start",
                    "route": {
                    "name": "home"
                    }
                },
                navigationItems: [
                    {
                    "key": "home",
                    "label": "Home",
                    "route": {
                        "name": "navigation"
                    }
                    },
                    {
                    "key": "reports",
                    "label": "Reports",
                    "subitems": [
                        {
                        "key": "productivity",
                        "label": "Productivity report",
                        "route": {
                            "name": "navigation"
                        }
                        },
                        {
                        "key": "timesheet",
                        "label": "Time sheet",
                        "route": {
                            "name": "navigation"
                        }
                        }
                    ]
                    }
                ],
                logos: {
                    "default": "https://res.cloudinary.com/duojkrgue/image/upload/v1737614196/zema-design-system/Zema_logo_qnkj5n.svg",
                }
            }
        }
    },
    mounted () {},
    methods: {
        ogClick(element) {
			console.info('%clogItemClick: ', 'color: #2C70CD;', element);
		},
		logLogout(element) {
			console.info('%clogLogout: ', 'color: #2C70CD;', element);
		},
    },
  }
  </script>
  
  <style>
    .page-layout-border {
        border: 1px solid rgb(219, 219, 219);
        padding: 1rem;
        border-radius: 10px;
    }
  </style>
  