<template>
    <div class="dropdown-buttons-container">
        <zds-grid 
            cols="minmax(auto, 1200px)"
            gap="20px"
            justify="start"
            align="center"
        >
            <zds-grid-item>
                <zds-dropdown-button
                    :items="items"
                    :variant="variant"
                    :secondary="secondary"
                    :text="text"
                    :dropdownWidth="dropdownWidth"
                    @action-click="logActionClick"
                    @button-click="logClick"
                />
            </zds-grid-item>
        </zds-grid>
    </div>
</template>
  
<script>
export default {
    name: 'DropdownButtons',
    props: {
        /**
        * The DropdownButton variant. There are 9 variants: 'turquoise', 'green', 'blue',
        * 'violet', 'pink', 'red', 'orange', 'amber' and 'gray'.
        */
        variant: {
            type: String,
            default: 'gray',
        },
        /**
        * Specifies whether the DropdownButton version is the secondary one. This property has
        * higher prevalence than the `variant` prop.
        */
        secondary: {
            type: Boolean,
            default: false,
        },
        /**
        * Controls the size of the Dropdown popover (in pixels).
        * The size is never smaller than the width of the button.
        */
        dropdownWidth: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {
            isActive: false,
            items: [
                {
                    "name": "Cancel request",
                    "icon": "block-outline"
                },
                {
                    "name": "Deny request",
                    "icon": "alert-outline"
                },
                {
                    "name": "Grant request",
                    "icon": "check-outline"
                }
            ],
            text: 'Finalize request'
        }
    },
    methods: {
        logActionClick(item) {
            console.log('Action clicked:', item);
        },
        logClick() {
            console.log('Button clicked');
        }
    }
}
</script>
  
<style scoped>
.dropdown-buttons-container {
    width: 100%;
    padding: 16px;
}

@media (max-width: 768px) {
    .dropdown-buttons-container {
        padding: 8px;
    }
}
</style>
  