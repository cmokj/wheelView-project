<template>
    <div class="row" v-bind:style="{marginLeft: -gutter/2 + 'px',marginRight: -gutter/2 + 'px'}">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'GuluRow',
        props: {
            gutter: {
                type: [Number,String]
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter;
            })
        }
    }
</script>
<style lang="scss" scoped>
    .row {
        display: flex;
    }
</style>