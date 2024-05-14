<script>
import PostList from '@/Components/PostList';
import PostForm from '@/Components/PostForm';
import { usePosts } from '@/hooks/usePosts';
import useSortedPosts from '@/hooks/useSortedPosts';
import useSortedAndSearchedPosts from '@/hooks/useSortedAndSearchedPosts';

    export default{
        components:{
            PostList, PostForm
        },
        data() {
            return {
                dialogVisible: false,
                sortOptions: [
                    {value: 'title', name: 'For Name'},
                    {value: 'body', name: 'For Description'},
                ]
            }
        },
        setup(props){
            const {posts, isPostLoading, totalPages} = usePosts(10)
            const {sortedPosts, selectedSort} = useSortedPosts(posts)
            const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

            return{
                posts,
                isPostLoading,
                totalPages,
                sortedPosts,
                selectedSort,
                searchQuery,
                sortedAndSearchedPosts,
            }
        },
    }
</script>

<template>
    <div>
        <h1>Post Page</h1>

        <MyInput
            v-focus
            v-model="searchQuery"
            placeholder="Search..."
        />

        <div class="app__btns">
            <MyButton
            @click="showDialog"
            >
            Create Post
            </MyButton>
            <MySelect
            v-model="selectedSort"
            :options="sortOptions"
            />
        </div>

        <MyDialog
        v-model:show="dialogVisible"
        >
            <PostForm
            />
        </MyDialog>

        <PostList
        v-if="!isPostLoading"
        :posts="sortedAndSearchedPosts"
        />
        <div v-else style="font-size: 50px; text-align: center; color: #000;">
            Loading...
        </div>
    </div>
</template>

<style>
.app__btns{
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
}

.page{
    border: 1px solid black;
    padding: 10px;
    margin-right: 15px;
}

.page__wrapper{
    display: flex;
    margin-top: 15px;
    cursor: pointer;
}

.current-page{
    border: 2px solid teal;

}

.observer{
    height: 30px;
}
</style>