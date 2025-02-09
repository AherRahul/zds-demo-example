<template>
    <div style="padding: 5px">
        <zds-grid>
            <zds-row>
                <zds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <zds-button
                        variant="blue"
                        size="sm"
                        text="Open"
                        @click="loadOverlayLoader"
                    />
                    <zds-overlay-loader
                        v-if="showOverlayLoader"
                        variant="blue"
                        size="lg"
                    />
                </zds-col>
            </zds-row>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OverlayLoader',
    props: {

    },
    data() {
        return {
            showOverlayLoader: false,
        }
    },
    mounted () {},
    methods: {
        loadOverlayLoader() {
            this.showOverlayLoader = true;

            setTimeout(() => {
                this.showOverlayLoader = false;
            }, 5000);
        }
    },
  }
  </script>
  
  <style>
  
  </style>
  