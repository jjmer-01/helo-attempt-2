module.exports = {
    getAllPosts: async (req, res) => {
        const db = req.app.get('db')
        const posts = await db.get_all_posts()
        // console.log(posts)
        if(posts) {
            res.status(200).send(posts)
        } else {
            res.sendStatus(500)
        }
    },

    getMyPosts: async (req, res) => {

    },

    addPost: (req, res) => {
        const dbObj = req.app.get('db')
        const {title, img, content, author_id} = req.body
        dbObj.add_post([title, img, content, author_id])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage:"Post not added. Try again later"})
            console.log(err)
        })
    },

    getOnePost: (req, res) => {
        const dbObj = req.app.get('db')
        const {id} = req.params
        const { title, img, content } = req.body
        dbObj.get_one_post([id, title, img, content])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage:"Couldn't find that post. Try again later"})
            console.log(err)
        })
    },

    editPost: (req, res) => {
        const dbObj = req.app.get('db')
        const {params, query} = req
        const updatedPost = {id, title, img, content, author_id}
        dbObj.update_post([params.id, query.desc])
        .then(() => res.status(200).send(updatedPost))
        .catch(err => {
            res.status(500).send({errorMessage:"Post not updated. Try again later."})
            console.log(err)
        })
    },

    deletePost: (req, res) => {
        const dbObj = req.app.get('db')
        const {id} = params
        dbObj.delete_post(id)
        .then( () => res.sendStatus(200) )
        .catch( err => {
            res.status(500).send({errorMessage: "Post not deleted. Try again later."})
            console.log
        })
    },   
}