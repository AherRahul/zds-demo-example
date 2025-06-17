<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                <zds-card
                    :variant="variant"
                    :elevation="elevation"
                    :rounded="rounded"
                    :fluid="fluid"
                >
                    <slot></slot>
                </zds-card>
            </zds-grid-item>
        </zds-grid>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        /**
		* Specifies the card title. When content is sent to the `Header` slot the content of this prop is not displayed.
		*/
		title: {
			type: String,
			default: '',
		},
		/**
		* Specifies Card text. When content is sent to the `Body` slot the content of this prop is not displayed.
		*/
		content: {
			type: String,
			default: '',
		},
		/**
		* Path of the image that will be rendered. When content is sent to the `Image` slot the content of this prop is not displayed.
		*/
		imageSrc: {
			type: String,
			default: '',
		},
		/**
		* Text description of the image.
		*/
		imageAlt: {
			type: String,
			default: 'card image',
		},
		/**
		* Width of the card image.
		*/
		imageWidth: {
			type: [String, Number],
			default: 300,
		},
		/**
		* Height of the card image.
		*/
		imageHeight: {
			type: [String, Number],
			default: 180,
		},
		/**
		* Width of card content.
		*/
		bodyWidth: {
			type: [String, Number],
			default: 300,
		},
		/**
		* Makes the Card alignment horizontal.
		*/
		horizontal: {
			type: Boolean,
			default: false,
		},
		/**
		* Enables or disables clicking on the component
		*/
		clickable: {
			type: Boolean,
			default: false,
		},
        /**
        * Variant of the card
        */
        variant: {
            type: String,
            default: '',
        },
        /**
        * Elevation of the card
        */
        elevation: {
            type: String,
            default: '',
        },
        /**
        * Rounded of the card
        */
        rounded: {
            type: Boolean,
            default: false,
        },
        /**
        * Fluid of the card
        */
        fluid: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {}
    },
    mounted () {},
    methods: {
        logClick(event) {
			console.info('logClick: ', event);
		}
    },
}
</script>

<style>
  
</style>
  