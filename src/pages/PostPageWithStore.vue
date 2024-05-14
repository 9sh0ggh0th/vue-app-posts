<script>
import PostList from '@/Components/PostList';
import PostForm from '@/Components/PostForm';
import axios from 'axios';
import { mapState, mapGetters, mapActions, mapMutations} from 'vuex';

    export default{
        components:{
            PostList, PostForm
        },
        data() {
            return {
                dialogVisible: false,
            }
        },
        methods:{
            ...mapMutations({
                setPage: 'post/setPage',
                setSearchQuery: 'post/setSearchQuery',
                setSelectedSort: 'post/setSelectedSort',
            }),
            ...mapActions({
                loadMorePosts: 'post/loadMorePosts',
                fetchPosts: 'post/fetchPosts'
            }),
            createPost(post) {
                this.posts.push(post);
                this.dialogVisible = false;
            },
            removePost(post){
                this.posts = this.posts.filter(p => p.id !== post.id);
            },
            showDialog(){
                this.dialogVisible = true;
            },
            // changePage(pageNumber){
            //     this.page = pageNumber
            // },
        },
        mounted(){
            this.fetchPosts();
        },
        computed:{
            ...mapState({
                posts: state => state.post.posts,
                isPostLoading: state => state.post.isPostLoading,
                selectedSort: state => state.post.selectedSort,
                searchQuery: state => state.post.searchQuery,
                page: state => state.post.page,
                limit: state => state.post.limit,
                totalPages: state => state.post.totalPages,
                sortOptions: state => state.post.sortOptions
            }),
            ...mapGetters({
                sortedPosts: 'post/sortedPosts',
                sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
            }),
        },
    }
</script>

<template>
    <div>
        <h1>Post Page</h1>

        <MyInput
            v-focus
            :model-value="searchQuery"
            @update:model-value="setSearchQuery"
            placeholder="Search..."
        />

        <div class="app__btns">
            <MyButton
            @click="showDialog"
            >
            Create Post
            </MyButton>
            <MySelect
            :model-value="selectedSort"
            @update:model-value="setSelectedSort"
            :options="sortOptions"
            />
        </div>

        <MyDialog
        v-model:show="dialogVisible"
        >
            <PostForm
            @create="createPost"
            />
        </MyDialog>

        <PostList
        v-if="!isPostLoading"
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        />
        <div v-else style="font-size: 50px; text-align: center; color: #000;">
            Loading...
        </div>
        <div v-intersection="loadMorePosts" class="observer"></div>
        <!-- <div class="page__wrapper">
            <div
            v-for="pageNumber in totalPages"
            :key="pageNumber"
            class="page"
            :class="{
                'current-page': page === pageNumber
            }"
            @click="changePage(pageNumber)"
            >
                {{ pageNumber }}
            </div>
        </div> -->
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