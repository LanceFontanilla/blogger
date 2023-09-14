<template>
  <div class="container-fluid">

    <div v-for="blog in blogs" :key="blog.id" >
      <Blog :blog="blog"/>
      
    </div>
  </div>
  </template>

<script>
import { computed, onMounted } from 'vue'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import {blogsServices} from'../services/BlogsServices.js'
import { AppState } from '../AppState'

export default {
 
  setup() {
    onMounted(()=>{
      getBlogs()
    });
    async function getBlogs(){
      try {
        await blogsServices.getBlogs() 
        logger.log('getting blogs')
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      blogs: computed(()=>AppState.blogs)
    }
    
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
