import { reactive } from 'vue'
import { Blog } from './models/Blog.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},
  /** @type {Blog[]} */
  blogs: [],
  /** @type {Blog||null} */
  activeBlog: null,




})
