<template>
    <div class="buttonGroup">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        mounted() {
            for(let node of this.$el.children) {
                if(node.nodeName !== 'BUTTON') {
                    console.log("g-button-group 的子元素建议该为 button 元素，否则会有样式错误。")
                }
            }
        }
    }
</script>

<style lang="scss">
    .buttonGroup {
        display: inline-flex;
        vertical-align: middle;
        > button {
            border-radius: 0;
            &:not(:first-child) {
                margin-left: -1px;
            }
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