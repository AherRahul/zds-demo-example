<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                    <zds-page-header
                        title="Procedures"
                        subtitle="Create dashboards and associate them with services. To access the panels externally, go to https://rahulaher.netlify.app and enter the corresponding key."
                    >
                        <template
                            #aside
                        >
                            <zds-button
                                secondary
                                @click="logClick('Btn 1')"
                                text="Button"
                                style="margin-right: 1rem;"
                            />
                            <zds-button
                                class="d-flex align-items-center ml-4"
                                variant="success"
                                @click="logClick('Btn 2')"
                                text="Button"
                            />
                        </template>
                    </zds-page-header>
            </zds-grid-item>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'PageHeader',
    props: {

    },
    data() {
        return {}
    },
    mounted () {},
    methods: {
        logClick(btnName) { 
            console.info(btnName)
        },
    }
  }
  </script>
  
  <style lang="scss">
  
  .empty-state-border {
    border: 1px solid #d1d1d1;
    border-radius: 15px;
    padding: 2rem;
  }
  </style>
  