<template>
    <div class="progress-bar-container">
        <zds-grid 
            cols="minmax(auto, 1200px)"
            gap="20px"
            justify="start"
            align="center"
        >
            <zds-grid-item>
                <zds-progress-bar
                    :variant="variant"
                    :value="value"
                    :showText="showText"
                    :textAside="textAside"
                />
            </zds-grid-item>
        </zds-grid>
    </div>
</template>
  
<script>
export default {
    name: 'ProgressBar',
    props: {
        /**
         * The color variant. There are 9 variants implemented: 'green', 'teal', 
         * 'turquoise', 'blue', 'indigo', 'violet', 'pink', 'red', 'orange' and 'amber'.
         */
        variant: {
            type: String,
            default: 'green',
        },
        /**
         * Sets the ProgressBar's progress indicator.
         */
        value: {
            type: Number,
            default: 0,
            required: true,
        },
        /**
         * Defines whether the percentage will be shown.
         */
        showText: {
            type: Boolean,
            default: false,
            required: false,
        },
        /**
         * When true, wraps the text to the right.
         */
        textAside: {
            type: Boolean,
            default: false,
        },
    }
}
</script>
  
<style scoped>
.progress-bar-container {
    width: 100%;
    padding: 16px;
}

@media (max-width: 768px) {
    .progress-bar-container {
        padding: 8px;
    }
}
</style>
  