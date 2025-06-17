<template>
    <div class="progress-circular-container">
        <zds-grid 
            cols="minmax(auto, 1200px)"
            gap="20px"
            justify="start"
            align="center"
        >
            <zds-grid-item>
                <zds-progress-circular
                    :variant="variant"
                    :size="size"
                    :value="value"
                    :maxValue="maxValue"
                    :slim="slim"
                    :thick="thick"
                    :noLabel="noLabel"
                />
            </zds-grid-item>
        </zds-grid>
    </div>
</template>
  
<script>
export default {
    name: 'ProgressCircular',
    props: {
        /**
         * Sets the color of the ProgressCircular.
         */
        variant: {
            type: String,
            default: 'green',
        },
        /**
         * Defines the size (diameter) of the ProgressCircular.
         */
        size: {
            type: String,
            default: 'md',
            required: false,
        },
        /**
         * Defines the value corresponding to the filled percentage or fraction 
         * of the ProgressCircular.
         */
        value: {
            type: Number,
            default: 0,
            required: true,
        },
        /**
         * Sets the maximum value, the entire process portion, of the ProgressCircular. 
         * By default, the maximum value is 100 (default percentage).
         */
        maxValue: {
            type: Number,
            default: 100,
            required: false,
        },
        /**
        * Makes the ProgressCircular circle thickness smaller.
        */
        slim: {
            type: Boolean,
            default: false,
        },
        /**
        * Makes the ProgressCircular circle thicker.
        */
        thick: {
            type: Boolean,
            default: false,
        },
        /**
        * Controls the display of the label.
        */
        noLabel: {
            type: Boolean,
            default: false,
        },
    }
}
</script>
  
<style scoped>
.progress-circular-container {
    width: 100%;
    padding: 16px;
}

@media (max-width: 768px) {
    .progress-circular-container {
        padding: 8px;
    }
}
</style>
  