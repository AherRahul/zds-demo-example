<template>
    <div style="padding: 5px">
        <zds-grid>
            <zds-row>
                <zds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <div style="position: relative; overflow: auto; height: 930px;
					width: 430px; border: 1px solid #CCC; margin: auto;
					border-radius: 20px; cursor: pointer">
                        <zds-mobile-navigation
                            variant='indigo'
                            :light=true
                            sidebarLogo='https://res.cloudinary.com/duojkrgue/image/upload/v1737614196/zema-design-system/Zema_logo_qnkj5n.svg'
                            :items="items"
                            :activeItem="activeItem"
                            :user="user"
                            sticky=false
                            @item-click="logClick"
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
    name: 'MobileNavigation',
    props: {
        /**
         * Defines the list of navigation items to be
         * shown. The list items must be
         * objects with path or route, and with a label.
         */
        items: {
            type: Array,
            default: () => [],
        },
        /**
        * The active navigation item.
        */
        activeItem: {
            type: Object,
            default: () => {},
        },
        /**
         * Defines information relating to the user. The object must follow the signature:
         * { name: String, role: String, picture: String }
        */
        user: {
            type: Object,
            default: () => {},
        },
    },
    data() {
        return {
            
        }
    },
    mounted () {},
    methods: {
        logClick(element) {
			console.info('%clogItemClick: ', 'color: #2C70CD;', element);
		},
		logLogout(element) {
			console.info('%clogLogout: ', 'color: #2C70CD;', element);
		},
    },
  }
  </script>
  
  <style>
  
  </style>
  