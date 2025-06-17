<template>
    <div class="avatar-group-container">
        <zds-grid 
            cols="minmax(auto, 1200px)"
            gap="20px"
            justify="start"
            align="center"
        >
            <zds-grid-item>
                <zds-avatar-group
                    :avatars="avatars"
                    :size="size"
                    :maxCount="maxCount"
                />
            </zds-grid-item>
        </zds-grid>
    </div>
</template>
  
<script>
export default {
    name: 'AvatarGroup',
    props: {
        size: {
            type: String,
            default: "md",
        },
        maxCount: {
            type: Number,
            default: 3,
        }
    },
    data() {
        return {
            avatars: [
                {
                    "src": "https://res.cloudinary.com/duojkrgue/image/upload/v1597245616/jjrxzygynbnycnkvmkle.jpg",
                    "name": "Cho Smith"
                },
                {
                    "src": "https://res.cloudinary.com/duojkrgue/image/upload/v1597061293/epecvtfhk1afumio20x2.jpg",
                    "name": "Alice Brown"
                },
                {
                    "src": "https://res.cloudinary.com/duojkrgue/image/upload/v1597061232/uyhpdxozzozcmr17wgof.jpg",
                    "name": "Leo Garcia"
                },
                {
                    "src": "https://res.cloudinary.com/duojkrgue/image/upload/v1597058392/zs4vxtldbq8flgdftgat.jpg",
                    "name": "Dave Jones"
                },
                {
                    "src": "https://res.cloudinary.com/duojkrgue/image/upload/v1597058028/eur6ranh3hudjuboazb1.jpg",
                    "name": "Maya Rodriguez"
                },
                {
                    "src": "https://res.cloudinary.com/duojkrgue/image/upload/v1588924014/j44b7rr8r7opzyiwhnw6.jpg",
                    "name": "Tina Smith"
                },
                {
                    "src": "https://res.cloudinary.com/duojkrgue/image/upload/v1586543245/icdiaxfqzguysbyiydge.png",
                    "name": "Paulo Williams"
                }
            ],
        }
    },
    mounted () {},
    methods: {},
}
</script>
  
<style scoped>
.avatar-group-container {
    width: 100%;
    padding: 16px;
}

@media (max-width: 768px) {
    .avatar-group-container {
        padding: 8px;
    }
}
</style>
  