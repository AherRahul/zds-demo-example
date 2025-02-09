<template>
    <div style="padding: 5px">
        <zds-grid>
            <zds-row>
                <zds-col cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <zds-actions-list
                        :actions="actions"
                        :numberOfExpandedActions="numberOfExpandedActions"
                        @expanded="expandedActionList"
                        @action-clicked="actionClickedActionList"
                    >
                        <template
                            #action="{ list }"
                        >
                            {{ list.title }}
                        </template>
                    </zds-actions-list>
                </zds-col>
            </zds-row>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ActionList',
    props: {
        numberOfExpandedActions: {
            type: Number,
            default: 2,
        },
    },
    data() {
        return {
            actions: [
                {
                    "title": "Icon1",
                    "disabled": true
                },
                {
                    "title": "Icon2"
                },
                {
                    "title": "Icon3"
                },
                {
                    "title": "Icon4"
                }
            ],
        }
    },
    mounted () {},
    methods: {
        expandedActionList() {
            console.log("expandedActionList called");
        },

        actionClickedActionList() {
            console.log("action-clicked called");
        }
    },
  }
  </script>
  
  <style>
  
  </style>
  