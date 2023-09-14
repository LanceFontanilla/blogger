
<template>
           <div v-if="activeBlog" class="col-12 card elevation-5 my-2">
                <div>
                    <h3>
                        {{activeBlog.title }}
                    </h3>
                    <p>{{ activeBlog.body }}</p>
                    <img :src="activeBlog.imgUrl" alt="">
                    <p>{{ activeBlog.createdAt }}</p>
                </div>
                <div>
                        <router-link :to="{name: 'Profile Page', params: {profileId: activeBlog.creator.id}}" @click.stop>
                        <img class="profile-pic" :src="activeBlog.creator.picture" alt="">
                        {{ activeBlog.creator.name }}
                    </router-link>
                    </div>
            
            </div>
</template>

<script>
import { useRoute } from 'vue-router';
import Pop from '../utils/Pop';
import { logger } from '../utils/Logger';
import { computed, onMounted } from 'vue';
import { blogsServices } from '../services/BlogsServices';
import { AppState } from '../AppState';


export default {

setup() {
    onMounted(()=> getBlogById())
    const route = useRoute()
    async function getBlogById(){
        try {
            await blogsServices.getBlogById(route.params.blogId) 
            logger.log('getting blog by id', route.params.blogId)
        } catch (error) {
            Pop.error(error)
        }
    }
  return {
    activeBlog: computed(()=> AppState.activeBlog)

  };
},
};
</script>


<style>
.profile-pic{
  height: 100px;
  width: 100px;
  object-fit: cover;
  object-position: center;
  border-radius: 50em;
}

</style>