import PostCard from "./PostCard";

function UserPostContainer({currentUser}) {

  // console.log(currentUser.posts)

  return (
      <div className="posts">
          {/* {currentUser.posts.map((post) => (<PostCard key={post.id} currentUser={currentUser}post={post}/>))} */}
      </div>
  );
}

export default UserPostContainer
