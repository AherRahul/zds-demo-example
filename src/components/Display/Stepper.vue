<template>
    <div class="stepper-container">
        <zds-grid 
            cols="minmax(auto, 1200px)"
            gap="20px"
            justify="start"
            align="center"
        >
            <zds-grid-item>
                <zds-stepper
                    :steps="steps"
                    :vertical="vertical"
                    :value="4"
                    :disableOnClick="disableOnClick"
                />
            </zds-grid-item>
        </zds-grid>
    </div>
</template>
  
<script>
export default {
    name: 'Stepper',
    props: {
        /**
         * An array with objects with the properties 'label', 
         * 'inProcessing', 'error' and 'completed'. The 'label' is the 
         * text that describes the step, and the other props are Boolean 
         * and represent the status of the step.
         */
        steps: {
            type: Array,
            default: () => [],
            required: true,
        },
        /**
         * Sets the stepper direction to vertical, by default the direction is horizontal (vertical = false).
         */
        vertical: {
            type: Boolean,
            default: false,
            required: false,
        },
        /**
        * Controls which step is active, ranging from 1 to the number of steps.
        */
        value: {
            type: Number,
            default: 1,
            required: true,
        },
        /**
        * Disables step navigation when set to `true`.
        */
        disableOnClick: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
        }
    },
    mounted () {},
    methods: {},
}
</script>
  
<style scoped>
.stepper-container {
    width: 100%;
    padding: 16px;
}

@media (max-width: 768px) {
    .stepper-container {
        padding: 8px;
    }
}
</style>
  