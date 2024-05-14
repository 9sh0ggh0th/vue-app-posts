<script>
    export default {
        data() {
            return {
                post: {
                    title: '',
                    body: '',
                }
            }
        },
        methods:{
            createPost(){
                this.id = Date.now();
                this.$emit('create', this.post)
                this.post = {
                    title: '',
                    body: '',
                }
            }
        }
    }
</script>

<template>
    <form @submit.prevent>
        <h3>Post create</h3>
        <MyInput
            v-focus
            v-model="post.title"
            type="text"
            placeholder="Name"
        />
        <MyInput
            v-model="post.body"
            type="text"
            placeholder="Description"
        />
        <MyButton
            class="btn"
            style="align-self: flex-end; margin-top: 15px;"
            @click="createPost"
        >
            Create
        </MyButton>
    </form>
</template>

<style>
form{
    display: flex;
    flex-direction: column;
}
</style>