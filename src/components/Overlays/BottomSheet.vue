<template>
    <div style="padding: 5px">
        <zds-grid cols="minmax(auto,100%) 1fr" gap="20px">
            <zds-grid-item>
                <div style="display: flex; justify-content: center">
                    <zds-button
                        style="margin: 12px;"
                        @click="showBottomSheet = true"
                    >
                        Open Bottom Sheet
                    </zds-button>
                    <zds-bottom-sheet
                        :modelValue="showBottomSheet"
                        :title="title"
                        @update:model-value="modelValueUpdated"
                        @close="closeBottomSheet"
                    >
                        Click on close button or on empty screen to close bottomsheet 
                    </zds-bottom-sheet>
                </div>
            </zds-grid-item>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BottomSheet',
    props: {
        /**
		 *  Controls the display of the bottom sheet.
		 */
		modelValue: {
			type: Boolean,
			default: false,
			required: true,
		},

		/**
		 * Defines the title of the bottom sheet displayed in the header
		 */
		title: {
			type: String,
			default: 'Where to find my CNS',
		},
    },
    data() {
        return {
            showBottomSheet: false,
        }
    },
    mounted () {},
    methods: {
        modelValueUpdated() {
            console.log("modelValueUpdated called");
        },
        closeBottomSheet() {
            this.showBottomSheet = false;
            console.log("closeBottomSheet called")
        }
    },
  }
  </script>
  
  <style>
  
  </style>
  