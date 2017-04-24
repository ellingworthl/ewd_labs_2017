import express from 'express';
//import posts from './stubAPI';
import stubAPI from './stubAPI';
import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.json());


//get all posts
router.get('/', (req, res) => {
  const posts = stubAPI.getAll();
  res.send({ posts: posts });
});


//Add a post
router.post('/', (req, res) => {
        const newPost = req.body;
		console.log(newPost)
    let result = null;
        if (newPost){
         result = stubAPI.add(newPost.title, newPost.link);
    }    
    if (result){
       return    res.status(201).send({message: "Posts Created"});
      }
          return   res.status(400).send({message: "Unable to find Post in request. No Post Found in body"});

});

//get a post
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const post = stubAPI.getPost(id);

       if(post){
               return   res.status(200).send(post);
              }
              return    res.status(404).send({message: `Unable to find Post ${id}`});


});

//missed from original week8 'API' upload
//upvote a post
router.post('/:id/upvote', (req, res) => {
	 const id = req.params.id;
	 const result = stubAPI.upvote(id);
             if (result) {
                 
                 return  res.status(200).send({message: `Post ${id} Upvoted`}); 
                }
            return    res.status(404).send({message: `Unable to find Post ${id}`});
           
});

//node_lab2 solution
//get post
router.get('/:id', (req, res) => {
    const id = req.params.id;
    const post = stubAPI.getPost(id);

       if(post){
               return   res.status(200).send(post);
              }
              return    res.status(404).send({message: `Unable to find Post ${id}`}); 
              
            
});

//add comment
router.post('/:id/comments', (req, res) => {
   const id = req.params.id;
   const comment = req.body;
   console.log(id);
   const result = stubAPI.addComment(id,comment.comment, comment.author);
 if (result){
            return  res.status(200).send({message: `Comment added to post ${id}`}); 
      }
            return   res.status(400).send({message: `Unable to add comment to post ${id}`});
           
             
});

//upvote comment
router.post('/:postId/comments/:commentId/upvote', (req, res) => {
   const commentId = req.params.commentId;
   const postId = req.params.postId;
   const result = stubAPI.upvoteComment(postId, commentId);
             if (result) {
                      return res.status(200).send({message: `Comment ${commentId} on post ${postId} Upvoted`}); 
                }
            return res.status(404).send({message: `Unable to find comment ${commentId} on post ${postId}`});
           
             
});

export default router;