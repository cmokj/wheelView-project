<template>
    <button class="g-button" v-bind:class="`icon-${iconPosition}`">
        <g-icon class="loading" icon-name="loading"></g-icon>
        <g-icon class="icon" v-if="icon" v-bind:icon-name="icon"></g-icon>
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
                default: 'left',
                validator(value) {
                    if (value !== 'left' && value !== 'right') {
                        console.log("icon-position 的值必须为 left 或者 right")
                    } else {
                        return true;
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
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
        > .loading {
            animation: spin 2s infinite linear;
        }
    }
</style>