<template>
    <div :class="bgColor === 'dark' && 'bg-secondary'" class="px-0 md:px-16 relative">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            bgColor: {
                type: String,
                default: 'light'
            },
        }
    }
</script>