<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <div class="page-layout-border">
                <zds-tabs
                    :tabs="items"
                    :activeTab="items[1]"
                >
                    <template #room-42>
                        Psychology Room
                    </template>
                    <template #room-51>
                        Physiotherapy Room
                    </template>
                    <template #room-13>
                        Otorhinolaryngologist Room
                    </template>
                </zds-tabs>
            </div>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Tabs',
    props: {

    },
    data() {
        return {
            items: [
                {
                    title: 'Psychology',
                    name: 'room-42',
                },
                {
                    title: 'Physiotherapy',
                    name: 'room-51',
                },
                {
                    title: 'Otorhinolaryngologist',
                    name: 'room-13',
                },
            ],
        }
    },
    mounted () {},
    methods: {},
}
</script>

<style>

    .page-layout-border {
        border: 1px solid rgb(219, 219, 219);
        padding: 1rem;
        border-radius: 10px;
    }
</style>
