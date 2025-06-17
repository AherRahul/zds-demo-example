<template>
    <div class="tooltip-container">
        <zds-grid 
            cols="minmax(auto, 1200px)"
            gap="20px"
            justify="start"
            align="center"
        >
            <zds-grid-item>
                <zds-tooltip
                    text="Tooltip text"
                    :position="position"
                    :slim="slim"
                >
                    Tooltip trigger
                </zds-tooltip>
            </zds-grid-item>
        </zds-grid>
    </div>
</template>
  
<script>
export default {
    name: 'Tooltip',
    props: {
        /**
         * The positioning of the Tooltip. The prop accepts the options: top, right, bottom and left.
         */
        position: {
            type: String,
            default: 'top',
        },
        /**
         * When set to true, it makes the text and tooltip size smaller.
         */
        slim: {
            type: Boolean,
            default: false,
        }
    }
}
</script>
  
<style scoped>
.tooltip-container {
    width: 100%;
    padding: 16px;
}

@media (max-width: 768px) {
    .tooltip-container {
        padding: 8px;
    }
}
</style>
  