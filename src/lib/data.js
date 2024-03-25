
import { Post, User } from "./models";
import { connectToDb, run } from "./utils";
// const users = [
//   {id:1, name: 'John'},
//   {id:2, name: 'Jane'}
// ]

// export const posts = [
//   {id:1, title: 'Post 1', body: '......', userId: 1},
//   {id:2, title: 'Post 2', body: '......', userId: 1},
//   {id:3, title: 'Post 3', body: '......', userId: 2},
//   {id:4, title: 'Post 4', body: '......', userId: 2}
// ]

export const getPosts = async () => {
  try {
    connectToDb()
    const posts = await Post.find()
    return posts
  } catch (err) {
    console.log("message: ", err)
  }
}

export const getPost = async (slug) => { 
 try {
  connectToDb()
  const posts = await Post.findOne({slug: slug});
  return posts;
} catch (err) {
  console.log("message: ", err)
}
}

export const getUser = async(id) => {
  try {
    connectToDb()
    const user = await User.findById(id)
    return user
  } catch (err) {
    console.log("Message: ", err)
  }
}
export const getUsers = async() => {
  try {
    connectToDb()
    const users = await User.find()
    return users
  } catch (err) {
    console.log("message: ", err)
  }
}