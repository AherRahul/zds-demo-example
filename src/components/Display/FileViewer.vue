<template>
    <div class="file-viewer-container">
        <zds-grid 
            cols="minmax(auto, 1200px)"
            gap="20px"
            justify="start"
            align="center"
        >
            <zds-grid-item>
                <zds-file-viewer
                    :label="label"
                    :fileUrl="fileUrl"
                    :variant="variant"
                    @download-click="logDownload"
                    @close="closeFileViewer"
                />
            </zds-grid-item>
        </zds-grid>
    </div>
</template>
  
<script>
export default {
    name: 'FileViewer',
    props: {
        /**
         * Specifies the file label. The label must have a maximum of 50 characters.
         */
        label: {
            type: String,
            required: true,
            default: 'Proof of address',
        },

        /**
         * Specifies the URL of the file. The URL must contain the file extension
         * for the preview to be generated.
         */
        fileUrl: {
            type: String,
            required: true,
            default: 'https://images.pexels.com/photos/1254140/pexels-photo-1254140.jpeg',
        },

        /**
         * Specifies the color variant of the component.
         */
        variant: {
            type: String,
            default: 'green',
        },
    },
    data() {
        return {
        }
    },
    mounted () {},
    methods: {
        logDownload() {
            console.log("logDownload called");
        },
        closeFileViewer() {
            console.log("closeFileViewer called");
        }
    },
}
</script>
  
<style scoped>
.file-viewer-container {
    width: 100%;
    padding: 16px;
}

@media (max-width: 768px) {
    .file-viewer-container {
        padding: 8px;
    }
}
</style>
  