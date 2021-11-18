import NavBar from "./NavBar"
import PostContainer from "./PostContainer"
import {useState, useEffect} from 'react'

function MyProfile({posts, show, unshow, showForm}){

  const [currentUser, setCurrentUser] = useState(null)


  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
          })
        }
      })
  }, [])

  console.log(currentUser)

  const filteredList = posts.filter((post) => post.user.username === currentUser.username)

  return(
    <div>
    <NavBar show={show} unshow={unshow} showForm={showForm} currentUser={currentUser} setCurrentUser={setCurrentUser}/>
    <PostContainer currentUser={currentUser} posts={filteredList}/>
    </div>
  )
}

export default MyProfile