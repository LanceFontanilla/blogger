<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>

  <form @submit.prevent="createBlog">
    <div class="form-group">
      <label for="title">Title</label>
      <input v-model="formData.title" type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter Title">
    </div>
    <div class="form-group">
      <label for="ImgUrl">ImgUrl</label>
      <input v-model="formData.imgUrl" type="url" class="form-control"  placeholder="imgUrl">
    </div>
    <div class="form-group">
      <label for="Body">Body</label>
      <textarea v-model="formData.body" type="text" class="form-control"  placeholder="Body"> </textarea>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>


</template>

<script>

import { computed, ref } from 'vue';
import { AppState } from '../AppState';
import Pop from '../utils/Pop';
import { blogsServices } from '../services/BlogsServices';
export default {
  
  setup() {
    const formData = ref({})

    return {
      account: computed(() => AppState.account),
      formData,
      async createBlog(){
        try {
          await blogsServices.createBlog(formData.value)
          Pop.success('You have created a blog')
        } catch (error) {
          Pop.error(error)
        }
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
