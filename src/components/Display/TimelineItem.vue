<template>
    <div style="padding: 5px; padding-top: 3rem;">
        <zds-grid>
            <zds-row>
                <zds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <zds-timeline-item
                        variant="blue"
                        :loading="false"
                        :hollowed="false"
                    >
                        <template #opposite>
                            24/12/1995
                        </template>
                        <template #title>
                            Brendan Eich
                        </template>
                        <template #content>
                            Creator of the JS programming language
                        </template>
                    </zds-timeline-item>
                    <zds-timeline-item
                        variant="blue"
                        :loading="false"
                        :hollowed="false"
                    >
                        <template #opposite>
                            24/10/1973
                        </template>
                        <template #title>
                            Denis Ritchie
                        </template>
                        <template #content>
                            Creator of the C programming language
                        </template>
                    </zds-timeline-item>
                </zds-col>
            </zds-row>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TimelineItem',
    props: {
        
    },
    data() {
        return {
        }
    },
    mounted () {},
    methods: {},
  }
  </script>
  
  <style>
  
  </style>
  