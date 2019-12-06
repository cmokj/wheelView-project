<template>
    <svg class="icon" aria-hidden="true">
        <use v-bind:xlink:href="`#i-${iconName}`"></use>
    </svg>
</template>

<script>
    import './svg'
    export default {
        name: 'GuluIcon',
        props: ['iconName']
    };
</script>

<style lang="scss" scoped>
    svg {
        width: 1em;
        height: 1em;
    }
</style>