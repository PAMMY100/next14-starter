"use client";
import Link from "next/link"
import styles from "./links.module.css"
import NavLink from "./navLink/navLink"
import Image from "next/image";
import { useState } from "react"


  const links = [
    {
      title: "Homepage",
      path: "/"
    }, 
    {
      title: "About",
      path: "/about"
    },
    {
      title: "Contact",
      path: "/contact"
    },
    {
      title: "Blog",
      path: "/blog"
    },
  ]

const Links = () => {
  const [open, setOpen] = useState(false)

  //Temporary session authentication
  const session = true
  const isAdmin = true
  return (
    <div className={styles.container}>
        <div className={styles.links}>
          {
            links.map((link) => (
              <NavLink item={link} key={link.title}/>
            ))}
            {session ? (
            <>
              {isAdmin && <NavLink item={{title: "Admin", path: "/admin"}}/>}
              <button styles={styles.logout}>Logout</button>
            </>
            ) : (<NavLink item={{title: "Register", path: "/register"}}/>)}
        </div>
        <Image
        className={styles.menuButton}
        src="/menu.png" 
        alt="" width={30} 
        height={30} 
        onClick={() => setOpen(preV => !preV)} 
        />
        {
          open && <div className={styles.mobileLinks}>
            {
              links.map(link => (<NavLink item={link} key={link.title} />))
            }
          </div>
        }
    </div>
  )
}

export default Links