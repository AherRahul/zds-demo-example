<template>
    <div class="badge-container">
        <zds-grid 
            cols="minmax(auto, 1200px)"
            gap="20px"
            justify="start"
            align="center"
        >
            <zds-grid-item>
                <zds-badge
                    :variant="variant"
                    :size="size"
                    :clickable="clickable"
                    @click="clickBadge"
                >
                    Badge
                </zds-badge>
            </zds-grid-item>
        </zds-grid>
    </div>
</template>
  
<script>
export default {
    name: 'Badge',
    props: {
        variant: {
            type: String,
            default: 'blue',
        },
        size: {
            type: String,
            default: "md",
        },
        clickable: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {}
    },
    mounted () {},
    methods: {
        clickBadge() {
            if (this.clickable) {
                console.log("clickBadge called");
            }
        },
    },
}
</script>
  
<style scoped>
.badge-container {
    width: 100%;
    padding: 16px;
}

@media (max-width: 768px) {
    .badge-container {
        padding: 8px;
    }
}
</style>
  