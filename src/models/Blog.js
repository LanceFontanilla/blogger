
export class Blog {
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.body = data.body
        this.imgUrl = data.imgUrl
        this.creator = data.creator
        this.tags = data.tags
        this.createdAt = new Date(data.createdAt).toLocaleDateString()
    }

}