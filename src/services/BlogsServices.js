import { AppState } from "../AppState"
import { Blog } from "../models/Blog"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class BlogsServices {
    async getBlogs() {
        const res = await api.get('api/blogs')
        logger.log(res.data, 'blogs data')
        AppState.blogs = res.data.map(blog => new Blog(blog))
    }
    async getBlogById(blogId) {
        const res = await api.get(`api/blogs/${blogId}`)
        logger.log(res.data, 'blog by Id')
        AppState.activeBlog = new Blog(res.data)
    }
    async getBlogsByProfileId(profileId) {
        const res = await api.get(`api/blogs?creatorId=${profileId}`)
        logger.log('blogs by profile', res.data)
        AppState.blogs = res.data.map(blog => new Blog(blog))
    }
    async createBlog(blog) {
        const res = await api.post(`api/blogs`, blog)
        logger.log('creating blog', res.data)

    }
    async deleteBlog(blogId) {
        const foundBlog = AppState.blogs.find(blog => blogId == blog.id)
        const blogIndex = AppState.blogs.indexOf(foundBlog)
        const res = await api.delete(`api/blogs/${blogId}`)
        logger.log('deleting blog', res.data)
        AppState.blogs.splice(blogIndex, 1)
    }
}

export const blogsServices = new BlogsServices()