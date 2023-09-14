<template>
    
    <div class="row d-flex justify-content-center ">
    <router-link :to="{name: 'Blog Details', params: {blogId: blog.id}}">
        <div class="col-10 card elevation-5 my-2">
            <div>
                <h3>
                    {{ blog.title }}
                </h3>
            </div>
            <div>
                    <router-link :to="{name: 'Profile Page', params: {profileId: blog.creator.id}}" @click.stop>
                    <img class="profile-pic" :src="blog.creator.picture" alt="">
                </router-link>
            </div>
        </div>
    </router-link>
    <button v-if="blog.creator.id == account.id" @click.stop="deleteBlog">
        Delete
    </button>
    </div>
</template>

<script>
import { computed } from 'vue';
import { Blog } from '../models/Blog';
import { blogsServices } from '../services/BlogsServices';
import Pop from '../utils/Pop';
import { AppState } from '../AppState';

export default {
props: {blog: {type:Blog, required: true}},

setup(props) {
  return {
        async deleteBlog(){
            try {
                if (await Pop.confirm('Are you sure you want to delete this Blog')){
                    await blogsServices.deleteBlog(props.blog.id)
                }
            } catch (error) {
                Pop.error(error)
            }
        },
        account: computed(()=> AppState.account)
  };
},
};
</script>


<style lang="scss" scoped>
.profile-pic{
  height: 100px;
  width: 100px;
  object-fit: cover;
  object-position: center;
  border-radius: 50em;
}

</style>