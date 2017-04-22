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
export default router;