<template>
    <div style="padding: 5px">
        <zds-grid>
            <zds-row>
                <zds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
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
                </zds-col>
            </zds-row>
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
  