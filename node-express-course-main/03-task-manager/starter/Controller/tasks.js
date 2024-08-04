const Task = require('../Model/Task')

    exports.getAllTasks = async (req , res) => {
        try{
          const Tasks = await Task.find()
          res.status(200).json({Tasks})
        }catch(err){
          res.send(err)
        }
    }
    exports.createTask = async (req , res) => {
       try{
           const task = await Task.create(req.body)
          res.status(201).json({
           task
          })
       }catch(err){
          res.status(500).json({message:err})
       }
    }
    exports.getTask = async (req , res) => {
        const {id:taskId} = req.params
        try{
            const task = await Task.findOne({_id:taskId})
            if(!task){
                res.status(404).json(`Task is exist in the DB with id:${taskId}`)
            }
            res.status(200).json({task})
        }catch(err){
            res.send(err)
        }
    }
    exports.updateTask = async (req , res) => {
        const {id:taskID} = req.params
        try{
         const task = await Task.findByIdAndUpdate({_id:taskID},req.body,{new:true,runValidators:true})
         res.status(200).json({id:taskID,
            task
         },)
        }catch(err){
            res.send(err)
        }
    }
    exports.deleteTask = async(req , res) => {
        try{
            const {id:tourID} = req.params
          const task = await Task.findByIdAndDelete({_id:tourID})
          if(!task){
            res.status(404).json(`This task not found with the id:${tourID}`)
          }
          res.send({status:'success'})
        }catch(err){
           res.send(err)
        }
    }