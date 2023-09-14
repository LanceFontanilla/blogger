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
}

export const blogsServices = new BlogsServices()