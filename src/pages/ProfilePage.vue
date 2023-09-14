<template>
    <div v-if="profile" class="">
        <div>
            <h2>
                {{ profile.name }}
            </h2>
            <img :src="profile.picture" :alt="profile.name">
            <img :src="profile.coverImg" :alt="profile.name">
            <p>{{ profile.bio }}</p>
            <a :href="profile.github"></a>
        </div>

        <div v-for="blog in blogs" :key="blog.id">
        <Blog :blog="blog"/>
        </div>
    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { accountService } from '../services/AccountService';
import Pop from '../utils/Pop';
import { blogsServices } from '../services/BlogsServices';


export default {
    setup(){
        const route = useRoute()
        onMounted(()=>{
            getProfile()
            getBlogsByProfileId()
        })
       
        async function getProfile(){
            try {
                AppState.activeProfile=null
                await accountService.getProfile(route.params.profileId)
            } catch (error) {
                Pop.error(error)
            }
        }
        async function getBlogsByProfileId(){
            try {
                await blogsServices.getBlogsByProfileId(route.params.profileId)

            } catch (error) {
                Pop.error(error)
            }
        }
        
    return { 
        profile: computed(()=> AppState.activeProfile),
        blogs: computed(()=> AppState.blogs)
        
     }
    }
};
</script>


<style lang="scss" scoped>

</style>
