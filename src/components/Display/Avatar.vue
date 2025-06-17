<template>
    <div class="avatar-container">
        <zds-grid 
            cols="minmax(auto, 1200px)"
            gap="20px"
            justify="start"
            align="center"
        >
            <zds-grid-item>
                <zds-avatar
                    :src="src"
                    :size="size"
                    :clickable="clickable"
                    :dropdown-content="dropdownContent"
                />
            </zds-grid-item>
        </zds-grid>
    </div>
</template>
  
<script>
export default {
    name: 'Avatar',
    props: {
        src: {
            type: String,
            default: "https://res.cloudinary.com/duojkrgue/image/upload/v1597061293/epecvtfhk1afumio20x2.jpg",
        },
        variant: {
            type: String,
            default: "blue",
        },
        size: {
            type: String,
            default: "md",
        },
        initials: {
            type: String,
            default: null,
        },
        name: {
            type: String,
            default: null,
        },
        clickable: {
            type: String,
            default: false,
        }
    },
    data() {
        return {
            dropdownContent: {
                content: '0 to 120 years'
            }
        }
    },
    mounted () {},
    methods: {},
}
</script>
  
<style scoped>
.avatar-container {
    width: 100%;
    padding: 16px;
}

@media (max-width: 768px) {
    .avatar-container {
        padding: 8px;
    }
}
</style>
  