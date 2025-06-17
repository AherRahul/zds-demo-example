<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                <zds-box
                    :elevated="elevated"
                    :padding="padding"
                    :fluid="fluid"
                    :variant="variant"
                    :clickable="clickable"
                >
                    2
                </zds-box>
            </zds-grid-item>
        </zds-grid>
    </div>
</template>

<script>
export default {
    name: 'Box',
    props: {
        /**
		* When true applies the $shadow-sm token as the component's box-shadow.
		*/
		elevated: {
			type: Boolean,
			default: false,
		},
		/**
		* Indicates whether the component should occupy 100% of the available width.
		*/
		fluid: {
			type: Boolean,
			default: false,
		},
		/**
		* The set value is always multiplied by 4, just like in ZDS scss tokens.
		* The minimum accepted value is 4 and the maximum accepted is 12.
		*/
		padding: {
			type: [Number, String],
			default: 4,
			validator: (value) => value <= 12,
		},
		/**
		* Enables or disables clicking on the component
		*/
		clickable: {
			type: Boolean,
			default: false,
		},
		/**
		* The color variant. There are 9 variants implemented: 'green', 'teal',
		* 'blue', 'indigo', 'violet', 'pink', 'red', 'orange', 'amber', 'gray' and 'dark'.
		*/
		variant: {
			type: String,
			default: 'gray',
		},
    },
    data() {
        return {}
    },
    mounted () {},
    methods: {},
}
</script>

<style>
  
</style>
  