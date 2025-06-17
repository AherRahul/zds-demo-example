<template>
    <div class="timeline-item-container">
        <zds-grid 
            cols="minmax(auto, 1200px)"
            gap="20px"
            justify="start"
            align="center"
        >
            <zds-grid-item>
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
            </zds-grid-item>
        </zds-grid>
    </div>
</template>
  
<script>
export default {
    name: 'TimelineItem'
}
</script>
  
<style scoped>
.timeline-item-container {
    width: 100%;
    padding: 16px;
    padding-top: 3rem;
}

@media (max-width: 768px) {
    .timeline-item-container {
        padding: 8px;
        padding-top: 2rem;
    }
}
</style>
  