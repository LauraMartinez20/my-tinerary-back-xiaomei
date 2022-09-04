const Activity = require('../models/Activity')

const activityController = {

    create: async (req, res) => {
        const {
            name,
            photo,
            itinerary,
        } = req.body

        try {
            await new Activity({ name, photo, itinerary, })

            res.status(201).json({
                message: 'Activity created',
                success: true
            })
        } catch (error) {
            res.status(400).json({
                message: "couldn't create activity",
                success: false
            })

        }
    },
    read: async (req, res) => {
        const { id } = req.params
        try {
            let ActivityOne = await Activity.findOne({ _id: id },)

            if (ActivityOne) {

                res.status(200).json({
                    message: 'You get one activity',
                    response: ActivityOne,
                    success: true
                })

            } else {
                res.status(404).json({
                    message: "couldn't find activity",
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


}

module.exports = activityController