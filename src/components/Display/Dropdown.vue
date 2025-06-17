<template>
    <div class="dropdown-container">
        <zds-grid 
            cols="minmax(auto, 1200px)"
            gap="20px"
            justify="start"
            align="center"
        >
            <zds-grid-item>
                <zds-dropdown
                    :label="label"
                    :content="content"
                    :disabled="disabled"
                    :dropdownWidth="dropdownWidth"
                    @click="isActive = !isActive"
                >
                    <p>Dropdown Slot</p>
                </zds-dropdown>
            </zds-grid-item>
        </zds-grid>
    </div>
</template>
  
<script>
export default {
    name: 'Dropdown',
    props: {
        /**
         * Dropdown Content.
         */
        content: {
            type: String,
            default: 'Content',
            required: true,
        },
        /**
         * Label displayed next to content
         */
        label: {
            type: String,
            default: 'Label',
            required: true,
        },
        /**
         * Control Dropdown availability
         */
        disabled: {
            type: Boolean,
            default: false,
        },
        /**
         * Controls the size of the Dropdown popover (in pixels). 
         * The size is never smaller than the width of the Dropdown.
         */
        dropdownWidth: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            isActive: false,
        }
    },
    mounted () {},
    methods: {},
}
</script>
  
<style scoped>
.dropdown-container {
    width: 100%;
    padding: 16px;
}

@media (max-width: 768px) {
    .dropdown-container {
        padding: 8px;
    }
}
</style>
  