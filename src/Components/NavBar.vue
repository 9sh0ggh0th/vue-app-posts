<script>
    export default {

    }
</script>

<template>
    <div class="navbar">
        <div @click="$router.push('/')" style="cursor: pointer;">Post Application</div>
        <div class="navbar__btns">
            <MyButton @click="$router.push('/post-page')">Posts</MyButton>
            <MyButton @click="$router.push('/about')" style="margin-left: 20px;">About</MyButton>
            <MyButton @click="$router.push('/store')" style="margin-left: 20px;">Store</MyButton>
            <MyButton @click="$router.push('/composition')" style="margin-left: 20px;">Composition</MyButton>
        </div>
    </div>
</template>

<style>
.navbar{
    height: 50px;
    background: peru;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;
}
.navbar__btns{
    margin-left: auto;
}
</style>