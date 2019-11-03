<template>
    <button class="g-button" v-bind:class="`icon-${iconPosition}`">
        <svg class="icon" aria-hidden="true" v-if="icon">
            <use v-bind:xlink:href="`#i-${icon}`"></use>
        </svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left'
            }
        }
    }
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
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            border: 1px solid var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }
        > svg {
            width: 1em;
            height: 1em;
        }
        > .icon {
            order: 1;
            margin-right: .1em;
        }
        > .content {
            order: 2;
        }
        &.icon-right {
            > .icon {
                order: 2;
                margin-left: .1em;
                margin-right: 0;
            }
            > .content {
                order: 1;
            }
        }
    }
</style>