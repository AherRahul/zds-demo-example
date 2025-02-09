<template>
    <div style="padding: 5px; padding-top: 3rem;">
        <zds-grid>
            <zds-row>
                <zds-col  cols="10" offset="0" colsAtS="12" colsAtM="12" colsAtL="10" colsAtXl="10">
                    <zds-timeline
                        :reverse="false"
                    >
                        <zds-timeline-item variant="blue" loading>
                            <template #title>
                                Item 1
                            </template>
                            <template #content>
                                In this way, clear determination of objectives encourages
                                the standardization of new propositions.
                            </template>
                        </zds-timeline-item> 
                        <zds-timeline-item variant="blue">
                            <template #title>
                                Item 2
                            </template>
                            <template #content>
                                What we always have to keep in mind is that the consensus on
                                the need for qualification assumes important positions
                                in establishing normative rules of conduct.
                            </template>
                        </zds-timeline-item>
                        <zds-timeline-item variant="blue">
                            <template #title>
                                Item 3
                            </template>
                            <template #content>
                                Daily practice proves that the complexity of studies
                                carried out encourages the standardization of corporate paradigms.
                            </template>
                        </zds-timeline-item>
                    </zds-timeline>
                </zds-col>
            </zds-row>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Timeline',
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
  