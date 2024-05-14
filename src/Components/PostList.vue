<script>
    import PostItem from '@/Components/PostItem.vue';
    export default {
        components: {
            PostItem
        },
        props:{
            posts:{
                type: Array,
                required: true,
            }
        }
    }
</script>

<template>
    <div v-if="posts.length > 0">
        <h3>User List</h3>
        <TransitionGroup name="list">
            <PostItem
                v-for="post in posts"
                :post="post"
                :key="post.id"
                @remove="$emit('remove', post)"
            />
        </TransitionGroup>
    </div>
    <h2 v-else style="color: red; text-align: center; font-size: 40px;">No Posts</h2>

</template>

<style>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}

.list-leave-active {
  position: absolute;
}
</style>