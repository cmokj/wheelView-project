<template>
    <div class="wrapper" :class="{'error': error}">
        <input v-bind:value="value" v-bind:disabled="disabled" v-bind:readonly="readonly">
        <template v-if="error">
            <g-icon icon-name="error" class="iconError"></g-icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon';
    export default {
        name: 'GuluInput',
        components: {
            'g-icon': Icon
        },
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 14px;
    $box-shadow-color: rgba(0,0,0,0.5);
    $red: #F1453D;
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;
        > :not(:last-child) {
            margin-right: .5em;
        }
        > input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            padding: 0 8px;
            font-size: inherit;
            &:hover {
                border-color: $border-color-hover;
            }
            &:focus {
                outline: none;
                box-shadow: inset 0 1px 3px $box-shadow-color;
            }
            &[disabled],&[readonly] {
                color: #ccc;
                border-color: #ccc;
                cursor: no-drop;
            }
        }
        > .iconError {
            fill: $red;
        }
        > .errorMessage {
            color: $red;
        }
        &.error {
            > input {
                border-color: $red;
            }
        }
    }
</style>