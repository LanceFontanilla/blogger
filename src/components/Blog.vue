<template>
    
    <div class="row d-flex justify-content-center ">
    <router-link :to="{name: 'Blog Details', params: {blogId: blog.id}}">
        <div class="col-10 card elevation-5 my-2">
            <div>
                <h3>
                    {{ blog.title }}
                </h3>
            </div>
            <router-link :to="{name: 'Profile Page', params: {profileId: blog.creator.id}}" @click="stop">
                <div>
                    <img class="profile-pic" :src="blog.creator.picture" alt="">
                </div>
            </router-link>
            
        </div>
    </router-link>
    </div>
</template>

<script>
import { Blog } from '../models/Blog';

export default {
props: {blog: {type:Blog, required: true}},

setup(props) {
  return {
    
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