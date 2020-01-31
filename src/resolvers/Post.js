const Post = {
    author(parent, args, { db }) {
        return db.users.find((user) => {
            return user.id === parent.author
        })
    },
    comments(parent, args, { db }) {
        return db.comments.filter((comment) => {
            return comment.post === parent.id
        })
    }
}

export { Post as default }