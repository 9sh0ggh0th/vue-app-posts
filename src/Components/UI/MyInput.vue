<script>
    export default {
        name: 'MyInput',
        props:{
            modelValue: [String, Number]
        },
        methods:{
            updateInput(event){
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<template>
    <input
        :value="modelValue"
        @input="updateInput"
        class="input"
        type="text"
    >
</template>

<style>
.input{
    width: 100%;
    border: 2px solid black;
    background-color: yellowgreen;
    padding: 10px 15px;
    margin-top: 15px;
    color: black;
}
</style>