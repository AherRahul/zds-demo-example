<template>
    <div class="highlight-container">
        <zds-grid 
            cols="minmax(auto, 1200px)"
            gap="20px"
            justify="start"
            align="center"
        >
            <zds-grid-item>
                <zds-highlight
                    :variant="variant"
                    :animated="animated"
                    :duration="duration"
                    :delay="delay"
                    highlightedText="important"
                    caseSensitive=true
                >
                    <span>Very important text</span>
                </zds-highlight>
            </zds-grid-item>
        </zds-grid>
    </div>
</template>
  
<script>
export default {
    name: 'Highlight',
    props: {
        /**
         * The Highlight variant. There are 3 variants implemented: 'info', 'success'
         * and 'danger'
         */
        variant: {
            type: String,
            default: 'info',
        },
        /**
         * Specifies whether the highlight will be static or animated.
         */
        animated: {
            type: Boolean,
            default: false,
        },
        /**
         * Specifies the duration of the animation.
         */
        duration: {
            type: Number,
            default: 1,
        },
        /**
         * The waiting time until the animation starts.
         */
        delay: {
            type: Number,
            default: 0,
        },
    }
}
</script>
  
<style scoped>
.highlight-container {
    width: 100%;
    padding: 16px;
}

@media (max-width: 768px) {
    .highlight-container {
        padding: 8px;
    }
}
</style>
  