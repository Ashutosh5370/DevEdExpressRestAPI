const express = require('express');
const router = express.Router();
const Post = require('../models/post');


//Get All the post
router.get('/' , async  (req , res) => {

   try{
       const posts = await Post.find();
       res.json(posts)

   }catch(err){
       res.json(err)
   }

});


//Get specific the post
router.get('/:postId' , async  (req , res) => {


    try{
        const posts = await Post.findById(req.params.postId);
        res.json(posts)
 
    }catch(err){
        res.json(err)
    }
 
 });

//submit post 
router.post('/save', async (req,res)=> {
        const post = new Post({
            title : req.body.title,
            description : req.body.description
        });
        try{
       const savedPost = await post.save()
        res.json(savedPost);
        }catch(err){
            res.json(err);
        }
})

//Delete specific post 

router.delete('/:postId' ,  async (req , res)=>{

    try{
   const removePost = await  Post.deleteOne({_id : req.params.postId})
   res.json(removePost)
    }
    catch(err){
        res.json(err)
    }
})


//Update a post 

router.patch('/:postId' ,  async (req , res)=>{

    try{
   const updatePost = await  Post.updateOne({_id : req.params.postId} ,
     {$set : {title: req.body.title}});

     res.json(updatePost)

   res.json(updatePost)
    }
    catch(err){
        res.json(err)
    }
})

module.exports = router;