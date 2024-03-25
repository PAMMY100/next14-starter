import PostUser from "@/components/postUser/PostUser"
import styles from "./singlePostPage.module.css"
import Image from "next/image"
import { Suspense } from "react"
import { getPost } from "@/lib/data"

const SinglePostPage = async ({params}) => {
  const {slug} = params;

  const post = getPost(slug)
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3633689/pexels-photo-3633689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img}/>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
          className={styles.avatar} 
          src="https://images.pexels.com/photos/3633689/pexels-photo-3633689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          width={50}
          height={50}
          />
          {post && (<Suspense fallback={<div>Loading...</div>}>
            <PostUser />
          </Suspense>)}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          {post.body}
        </div>
      </div>
    </div>
  )
}
export default SinglePostPage