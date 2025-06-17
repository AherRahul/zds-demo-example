<template>
    <div class="callout-container">
        <zds-grid 
            cols="minmax(auto, 1200px)" 
            gap="20px"
            justify="center"
        >
            <zds-grid-item>
                <zds-callout-card
                    :image="image"
                    :imageDescription="imageDescription"
                    :actionButtonVariant="actionButtonVariant"
                    :actionButtonText="actionButtonText"
                    :actionButtonSecondary="actionButtonSecondary"
                    :actionButtonDisabled="actionButtonDisabled"
                    :compact="compact"
                    :text="cardText"
                    :title="cardTitle"
                    @action-button-click="actionButtonClick"
                />
            </zds-grid-item>
        </zds-grid>
    </div>
</template>
  
<script>
export default {
    name: 'CalloutCard',
    props: {
        /**
         * The card image.
         */
        image: {
            type: String,
            default: '',
            required: true,
        },
        /**
         * The description of the card image.
         */
        imageDescription: {
            type: String,
            default: 'Image by CalloutCard',
        },
        /**
         * The color of the card button.
         */
        actionButtonVariant: {
            type: String,
            default: 'blue',
        },
        /**
         * The card button text.
         */
        actionButtonText: {
            type: String,
            default: 'Ok',
        },
        /**
         * The minor version of the button.
         */
        actionButtonSecondary: {
            type: Boolean,
            default: false,
        },
        /**
         * The disabled version of the button.
         */
        actionButtonDisabled: {
            type: Boolean,
            default: false,
        },
        /**
         * Card display mode.
         */
        compact: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            cardTitle: "CalloutCard Title",
            cardText: "It is necessary to show messages related to changes or special \nconditions that occur in a component or page. For these cases, the use of Alert is recommended."
        }
    },
    methods: {
        actionButtonClick() {
            if (!this.actionButtonDisabled) {
                console.log("actionButtonClick called");
            }
        },
    },
}
</script>
  
<style scoped>
.callout-container {
    width: 100%;
    padding: 0 16px;
}
</style>
  