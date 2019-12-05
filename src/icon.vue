<template>
    <svg class="icon" aria-hidden="true">
        <use v-bind:xlink:href="`#i-${iconName}`"></use>
    </svg>
</template>

<script>
    import './svg'
    export default {
        props: ['iconName']
    };
</script>

<style>
    svg {
        width: 1em;
        height: 1em;
    }
</style>