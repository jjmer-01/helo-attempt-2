module.exports = {
    getAllPosts: async (req, res) => {
        const db = req.app.get('db')
        const posts = await db.get_all_posts()
        console.log(posts)
        if(posts) {
            res.status(200).send(posts)
        } else {
            res.sendStatus(500)
        }
    },

    getMyPosts: async (req, res) => {

    },

    addPost: () => {

    },

    editPost: () => {

    },

    deletePost: () => {

    }
}
