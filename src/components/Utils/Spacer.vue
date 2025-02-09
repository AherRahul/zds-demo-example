<template>
    <div style="padding: 5px">
        <zds-grid>
            <zds-row>
                <zds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <div style="width: fit-content; background-color: #aac1ff; border-radius: 20px">
                        <div
                            style="padding: 0.5px; background-color: #aac1ff; border-radius: 20px"
                        >
                            <zds-spacer
                                :paddingTop="10"
                                :paddingRight="0"
                                :paddingBottom="2"
                                :paddingLeft="0"
                                :marginTop="0"
                                :marginRight="7"
                                :marginBottom="0"
                                :marginLeft="5"
                            >
                                <div style="width: 100px; height: 100px; background-color: #0f4fff; border-radius: 20px"/>
                            </zds-spacer>
                        </div>
                    </div>
                </zds-col>
            </zds-row>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Spacer',
    props: {

    },
    data() {
        return {}
    },
    mounted () {},
    methods: {},
  }
  </script>
  
  <style>
  
  </style>
  