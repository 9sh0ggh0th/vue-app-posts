<script>
    export default {
        props:{
            post:{
                type: Object,
                required: true,
            }
        }
    }
</script>

<template>
    <div class="post">
        <div>
            <div>{{ post.id }}</div>
            <div><strong>Name:</strong> {{ post.title }}</div>
            <div><strong>Description</strong> {{ post.body }}</div>
        </div>
        <div class="post__btns">
            <MyButton
                @click="$router.push(`/post-page/${post.id}`)"
            >
                Open post
            </MyButton>
            <MyButton
                @click="$emit('remove', post)"
            >
                Delete
            </MyButton>
        </div>
    </div>
</template>

<style>
.post{
    padding: 20px;
    margin-top: 20px;
    color: #4f4f4f;
    background-color: lightskyblue;
    border: 2px solid black;
    font-size: 18px;

    display: flex;
    align-items: center;
    justify-content: space-between;
}
.post__btns{
    display: flex;

}
</style>