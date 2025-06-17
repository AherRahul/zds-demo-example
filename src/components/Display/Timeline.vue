<template>
    <div class="timeline-container">
        <zds-grid 
            cols="minmax(auto, 1200px)"
            gap="20px"
            justify="start"
            align="center"
        >
            <zds-grid-item>
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
            </zds-grid-item>
        </zds-grid>
    </div>
</template>
  
<script>
export default {
    name: 'Timeline'
}
</script>
  
<style scoped>
.timeline-container {
    width: 100%;
    padding: 16px;
    padding-top: 3rem;
}

@media (max-width: 768px) {
    .timeline-container {
        padding: 8px;
        padding-top: 2rem;
    }
}
</style>
  