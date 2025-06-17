<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
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
            </zds-grid-item>
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
  