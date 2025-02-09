<template>
    <div style="padding: 5px">
        <zds-grid style="border: 1px solid #d9d9d9; padding: 2rem; border-radius: 10px;">
            <zds-row>
                <zds-col  cols="12" offset="0" colsAtS="12" colsAtM="12" colsAtL="12" colsAtXl="12">
                    <zds-wizard
                        :steps="steps"
                        :active-step="activeStep"
                        :clickable="true"
                        :nextButtonText="nextButtonText"
                        :cancelButtonText="cancelButtonText"
                        :nextButtonVariant="nextButtonVariant"
                        :disableNextButton="disableNextButton"
                        @step-change="handleStepChange"
                        @next-action="handleNextAction"
                        @cancel-action="handleCancelAction"
                    >
                    <template #step-1>
                            <div style="height: 400px; gap: 16px; display: flex; flex-direction: column;">
                                <zds-text-input
                                    fluid
                                    label="Name"
                                />
                                <zds-text-input
                                    fluid
                                    label="Surname"
                                />
                                <zds-text-input
                                    fluid
                                    label="Mother's name"
                                />
                            </div>
                        </template>
                        <template #step-2>
                            <div style="height: 400px; gap: 16px; display: flex; flex-direction: column;">
                                <zds-text-input
                                    fluid
                                    label="Zip code"
                                />
                                <zds-text-input
                                    fluid
                                    label="Road"
                                />
                                <zds-text-input
                                    fluid
                                    label="Neighborhood"
                                />
                                <zds-text-input
                                    fluid
                                    label="City"
                                />
                            </div>
                        </template>
                        <template #step-3>
                            <div style="height: 400px; gap: 16px; display: flex; flex-direction: column;">
                                <zds-text-input
                                    fluid
                                    label="Modality"
                                />
                                <zds-text-input
                                    fluid
                                    label="URL of site"
                                />
                                <zds-text-input
                                    fluid
                                    label="Additional Information"
                                />
                            </div>
                        </template>
                    </zds-wizard>
                </zds-col>
            </zds-row>
        </zds-grid>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Wizard',
    props: {
        /**
		 * An array with objects with the properties 'title' (required), 'subtitle' and 'image'.
		 * The 'title' and 'subtitle' are texts that describe the step, the 'image' is the path to
		 * the empty-state image;
		 */
		steps: {
			type: Array,
			default: () => ([]),
			required: true,
			validator: (value) => value.length >= 2 && value.length <= 3,
		},
		/**
		* Enables or disables clicking on the step (step) to go to this step
		*/
		clickable: {
			type: Boolean,
			default: false,
		},
		/**
		 * The text of the next button (main action).
		 */
		nextButtonText: {
			type: String,
			default: 'Next',
		},
		/**
		 * The text of the back button (secondary action).
		 */
		cancelButtonText: {
			type: String,
			default: 'Previous',
		},
		/**
		 * The main action button variant. There are 10 variants: 'teal', 'green', 'blue',
		 * 'indigo', 'violet', 'pink', 'red', 'orange', 'amber' and 'dark'.
		 */
		nextButtonVariant: {
			type: String,
			default: 'blue',
		},
		/**
		 * Controls the availability of the main action button.
		 */
		disableNextButton: {
			type: Boolean,
			default: false,
		},
    },
    data() {
        return {
			activeStep: 0,
        }
    },
    mounted () {},
    methods: {
		handleStepChange(value) {
			console.info('%c@step-change: ', 'color: #2C70CD;', value);
			this.activeStep = value;
		},
		handleNextAction(value) {
			console.info('%c@next-action: ', 'color: #2C70CD;', value.nextStep);
			this.activeStep = value.nextStep;
		},
		handleCancelAction(value) {
			console.info('%c@cancel-action: ', 'color: #2C70CD;', value);
		}
    },
  }
  </script>
  
  <style>
  
  </style>
  