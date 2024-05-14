<script>
    export default {
        name: 'MyButton'
    }
</script>

<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<style scoped>
.btn{
    padding: 10px;
    background: none;
    color: #4f4f4f;
    border: 1px solid black;
    cursor: pointer;
}
</style>