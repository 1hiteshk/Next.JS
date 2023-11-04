import Link from "next/link";

function Home(){
  return <>
  <h1>home page is here</h1>
  <Link href='/users'>
    users
  </Link>
  <Link href='/posts' legacyBehavior>
  <a>
    posts
  </a>
  </Link>
  </>
}

export default Home;