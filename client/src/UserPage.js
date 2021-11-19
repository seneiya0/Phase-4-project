import NavBar from "./NavBar"
import PostContainer from "./PostContainer"

function UserPage({posts, show, unshow, showForm, deletePost, setCurrentUser, currentUser}){

    const currentPosts= window.location.pathname.split('/')[2];
    const filteredList = posts.filter((post) => post.user.username === currentPosts)

  return(
    <div>
    <NavBar show={show} unshow={unshow} showForm={showForm} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    <PostContainer deletePost={deletePost} currentUser={currentUser} posts={filteredList}/>
    </div>
  )
}

export default UserPage