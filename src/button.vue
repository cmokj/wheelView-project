<template>
    <button class="g-button">按钮</button>
</template>

<script>
    export default {}
</script>

<style lang="scss">
    .g-button {
        padding: 0 1em;
        height: var(--button-height);
        font-size: var(--font-size);
        background-color: var(--button-bg);
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        color: var(--color);
        &:hover {
            border: 1px solid var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
    }
</style>