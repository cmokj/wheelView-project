<template>
    <div class="buttonGroup">
        <slot></slot>
    </div>
</template>

<script>

</script>

<style lang="scss">
    .buttonGroup {
        display: inline-flex;
        vertical-align: middle;
        > button {
            border-radius: 0;
            margin-left: -1px;
            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }

            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);

            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>