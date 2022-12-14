const Comment = require('../models/Comment')
const Joi = require('joi')
const { itinerary } = require('./activityController')

const validator = Joi.object({

    "user": Joi.object(),

    "comment": Joi.string()
    .required()
    .min(10)
    .max(100)
    .messages({
        'any.required': 'COMMENT_REQUIRED',
        'string.min': 'COMMENT_TOO_SHORT',
        'string.max': 'COMMENT_TOO_LARGE',
    })
})


const commentController = {

    create: async (req, res) => {
        const {
            comment,
            user, 
            itinerary,
        } = req.body

        try {
            let result = await validator.validateAsync(req.body)

            await new Comment({ user, comment, itinerary, })

            res.status(201).json({
                message: 'Comment created',
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: "couldn't create comment",
                success: false
            })

        }
    },
    read: async (req, res) => {
        const { id } = req.params
        try {
            let CommentOne = await Comment.findOne({ _id: id },)

            if (CommentOne) {

                res.status(200).json({
                    message: 'You get one comment',
                    response: CommentOne,
                    success: true
                })

            } else {
                res.status(404).json({
                    message: "couldn't find comment",
                    success: false
                })
            }
        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "",
                success: false
            })
        }
    },

    update: async (req, res) => {

    },

    commentaries: async (req, res) => {
        console.log(req.query)
        let {id} = req.params

        let query = {}

        if (req.query.user) {
            query.user = req.query.user
            console.log(query.user)
        }
        if (req.query.itinerary) {
            query.itinerary = req.query.itinerary
        }

        try {
            let comments = await Comment.find(query)
            .populate ("itinerary", {name:1, photo:1, _id:1})
            .populate("user", {name:1, photo:1, _id:1})
            if (comments) {
                res.status(200).json({
                    message: 'You get comments',
                    response: comments,
                    success: true
                })
            } else {
                res.status(404).json({
                    message: "Could't find comments",
                    success: false
                })
            } //filtra comentarios que coinciden con id de front

        } catch (error) {

            console.log(error)
            res.status(400).json({
                message: "ERROOR TRY AGAIN",
                success: false
            })
        }
        
    },
    createComment : async (req, res) => {
        let user = req.user.id  //comentario del usuario que viene de passport
        console.log(user)
        let itinerary = req.body.itinerary // id itinerario que viene por params
        
        let comment = req.body.comment

        try {
            let result = await validator.validateAsync({comment, user} )
            let newComment = await new Comment({user, comment, itinerary, }).save()
            if (newComment) {
                //comment.comment = newComment   
                res.status(200).json({
                    message: "The comment was created",
                    response: newComment,
                    success: true
                })
            }
            
        } catch (error) {
            console.log(error)

            
        }

    },

    updateComment : async (req, res) => {
        let {id} = req.params //commentario que quiero modificar

        let userID = req.user.id
         //comentario del usuario que viene de passport

         let newComment = req.body.comment

        try {

            let comment = await Comment.findOne({_id:id})

            if (comment) {

                comment.comment = newComment
                
                await comment.save()
                res.status(200).json({
                    message: "The comment was updated",
                    response: comment,
                    success: true
                })
            }
            
        } catch (error) {
            console.log(error)

            
        }

    },
    deleteComment : async (req, res) => {
        let {id} = req.params //commentario que quiero modificar

        let userID = req.user.id
         //comentario del usuario que viene de passport

         let newComment = req.body.comment

        try {

            let comment = await Comment.findByIdAndDelete({_id:id})

            if (comment) {

                comment.comment = newComment
                
                await comment.save()
                res.status(200).json({
                    message: "The comment was deleted",
                    response: comment,
                    success: true
                })
            }
            
        } catch (error) {
            console.log(error)

            
        }

    },


    destroy: async (req, res) => {
        const commentary = req.body
        let { id } = req.params
        try {
            let deleteComment = await Comment.findOneAndDelete({ _id: id }, commentary,)
            res.status(200).json({
                message: "Comment deleted",
                success: true
            })

        } catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Comment not found",
                success: false
            })
        }
    }


}

module.exports = commentController