<template>
    <div class="floating-assistant-container">
        <zds-grid 
            cols="minmax(auto, 1200px)"
            gap="20px"
            justify="start"
            align="start"
        >
            <zds-grid-item>
                <zds-button
                    variant="blue"
                    size="sm"
                    text="Add New Functionality"
                    @click="showTip = !showTip"
                />
                
                <div class="floating-assistant-content">
                    <div id="floating-assistant-target" class="target-element">
                        FloatingAssistant target
                    </div>
                    
                    <zds-floating-assistant
                        id="my-floating-assistant"
                        v-model="showTip"
                        :title="title"
                        :url="url"
                        :variant="variant"
                        :targetId="targetId"
                        @expanded="expandedFloatingAssistant"
                        @disable-tip="disableTip"
                    >
                        The new driver registration functionality allows you to organize and
                        manage your fleet more easily, linking each driver to their
                        specific bus.
                    </zds-floating-assistant>
                </div>
            </zds-grid-item>
        </zds-grid>
    </div>
</template>
  
<script>
export default {
    name: 'FloatingAssistant',
    props: {
        /**
         * The title of the floating card that is displayed.
         */
        title: {
            type: String,
            default: 'New functionality',
            validator: (value) => value.length <= 22,
        },
        /**
         * The url to redirect to an external page when clicking on the
         * 'click here' to find out more about what is described in the card
         */
        url: {
            type: String,
            default: '',
            required: true,
        },
        /**
        * The Badge variant. There are 9 variants: 'turquoise', 'green', 'blue',
        * 'violet', 'pink', 'red', 'orange', 'amber' and 'gray'.
        */
        variant: {
            type: String,
            default: 'green',
        },
        /**
        * Id of the element that will be a reference for the FloatingAssistant rendering.
        */
        targetId: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            showTip: false,
        }
    },
    methods: {
        expandedFloatingAssistant() {
            console.log("expanded called");
        },
        disableTip() {
            console.log("disableTip called");
            this.showTip = false;
        },
    },
}
</script>
  
<style scoped>
.floating-assistant-container {
    width: 100%;
    padding: 16px;
}

.floating-assistant-content {
    margin-top: 24px;
}

.target-element {
    width: fit-content;
    margin: 24px 0;
}

#my-floating-assistant .floating-assistant__dropdown {
    display: flex !important;
}

#my-floating-assistant .floating-assistant__container {
    width: 28% !important;
}

@media (max-width: 768px) {
    .floating-assistant-container {
        padding: 8px;
    }
    
    .floating-assistant-content {
        margin-top: 16px;
    }
    
    .target-element {
        margin: 16px 0;
    }
}
</style>
  