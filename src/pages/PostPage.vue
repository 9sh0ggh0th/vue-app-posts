<script>
import PostList from '@/Components/PostList';
import PostForm from '@/Components/PostForm';
import axios from 'axios';
    export default{
        components:{
            PostList, PostForm
        },
        data() {
            return {
                posts: [],
                dialogVisible: false,
                isPostLoading: false,
                selectedSort: '',
                searchQuery: '',
                page: 1,
                limit: 10,
                totalPages: 0,
                sortOptions: [
                    {value: 'title', name: 'For Name'},
                    {value: 'body', name: 'For Description'},
                ]
            }
        },
        methods:{
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
            async loadMorePosts(){
                try {
                    this.page += 1;
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit,
                        }
                    })
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.posts = [...this.posts, ...response.data];
                } catch (e) {
                    alert('CARAUL!!!!')
                }
            },
            async fetchPosts(){
                try {
                    this.isPostLoading = true;
                    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                        params: {
                            _page: this.page,
                            _limit: this.limit,
                        }
                    })
                    this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                    this.posts = response.data
                } catch (e) {
                    alert('CARAUL!!!!')
                }finally{
                    this.isPostLoading = false;
                }
            },

        },
        mounted(){
            this.fetchPosts();
            // const options = {
            // root: document.querySelector("#scrollArea"),
            // rootMargin: "0px",
            // threshold: 1.0,
            // };
            // const callback = (entries, observer) => {
            //     if(entries[0].isIntersecting && this.page < this.totalPages){
            //         this.loadMorePosts();
            //     }
            // };
            // const observer = new IntersectionObserver(callback, options);
            // observer.observe(this.$refs.observer);
        },
        computed:{
            sortedPosts(){
                return [...this.posts].sort((post1, post2) => post1[this.selectedSort]?.localeCompare(post2[this.selectedSort]))
            },
            sortedAndSearchedPosts(){
                return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
            }
        },
        watch:{
            // page(){
            //     this.fetchPosts()
            // }
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