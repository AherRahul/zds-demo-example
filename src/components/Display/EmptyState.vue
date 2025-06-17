<template>
    <div class="empty-state-container">
        <zds-grid 
            cols="minmax(auto, 1200px)"
            gap="20px"
            justify="center"
            align="center"
        >
            <zds-grid-item>
                <zds-empty-state
                    :image="image"
                    :image-description="imageDescription"
                    :title="title"
                    :text="text"
                    :action-button-text="actionButtonText"
                    :hideActionButton="hideActionButton"
                    :actionButtonVariant="actionButtonVariant"
                    @action-button-click="handleClick"
                />
            </zds-grid-item>
        </zds-grid>
    </div>
</template>
  
<script>
export default {
    name: 'EmptyState',
    props: {
        /**
         * The image to be shown in Empty State. Note: the Storybook Controls 
         * addon does not yet allow file selection. Therefore, it is not 
         * possible to test the operation of this prop here.
         */
        image: {
            type: String,
            default: '',
        },
        /**
         * Empty State image descriptor added to tag 'alt'
         */
        imageDescription: {
            type: String,
            default: 'Image of empty state',
        },
        /**
         * The Empty State title.
         */
        title: {
            type: String,
            default: 'Empty State Title',
            required: true,
        },
        /**
         * The Empty State instructional text
         */
        text: {
            type: String,
            default: 'To exit this empty state situation, perform the action below',
        },
        /**
         * Prop used to hide the Empty State action button.
         */
        hideActionButton: {
            type: Boolean,
            default: false,
        },
        /**
         * The text shown on the Empty State action button
         */
        actionButtonText: {
            type: String,
            default: 'Finish',
        },
        /**
         * The Empty State action button variant (follows the ZDS button component variants)
         */
        actionButtonVariant: {
            type: String,
            default: 'blue',
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
.empty-state-container {
    width: 100%;
    padding: 0 16px;
}
</style>
  