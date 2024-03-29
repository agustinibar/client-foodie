import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPosts } from "../../redux/index"
import { PostWidget } from "./PostWidget"

export const PostsWidget = ({ userId, isProfile=false }) => {
    const dispatch = useDispatch();
    const posts = useSelector((state)=> state.posts);
    const token = useSelector((state)=> state.token);

    const getPosts = async()=>{
        const response = await fetch("https://foodie-site-api-rest.onrender.com/post", {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`}
        });
        
        const data = await response.json();
        dispatch(setPosts({ posts: data }));
    };
    const getUserPosts = async()=>{
        const response = await fetch(`https://foodie-site-api-rest.onrender.com/post/${userId}/posts`, {
            method: "GET",
            headers: {Authorization: `Bearer ${token}`}
        });

        const data = await response.json();
        dispatch(setPosts({ posts: data }));
    };     

    useEffect(()=>{
       if(isProfile){
        getUserPosts();
       } else {
        getPosts();
       }
    }, []);

    // posts.map((post)=>{
    //   console.log(post.userPicturePath)
    // })
    // console.log(posts)
    return (
            <>
                {Array.isArray(posts) ? (
      posts.map(({ _id, userId, firstName, lastName, description, location, picturePath, userPicturePath, likes, comments }) => (
        <PostWidget
          key={_id}
          postId={_id}
          postUserId={userId}
          name={`${firstName} ${lastName}`}
          description={description}
          location={location}
          picturePath={picturePath}
          userPicturePath={userPicturePath}
          likes={likes}
          comments={comments}
        />
      ))
    ) : (
      <p>Cargando publicaciones...</p>
    )}
            </>
  )
};

