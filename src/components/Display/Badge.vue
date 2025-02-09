<template>
    <div style="padding: 5px">
        <zds-grid>
            <zds-row>
                <zds-col  cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <zds-badge
                        :variant="variant"
                        :size="size"
                        :clickable="clickable"
                        @click="clickBadge"
                    >
                        Badge
                    </zds-badge>
                </zds-col>
            </zds-row>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Badge',
    props: {
        variant: {
            type: String,
            default: 'blue',
        },
        size: {
            type: String,
            default: "md",
        },
        clickable: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {}
    },
    mounted () {},
    methods: {
        clickBadge() {
            if (this.clickable) {
                console.log("clickBadge called");
            }
        },
    },
  }
  </script>
  
  <style>
  
  </style>
  