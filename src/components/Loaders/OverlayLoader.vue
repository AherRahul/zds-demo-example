<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
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
            </zds-grid-item>
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
  