// we need posts data , we can use the useEffect hook to fetch the data but that would not help to pre render a list of posts
// so we need getStaticProps function 

import Link from "next/link";
function PostList({posts}){

    return(
        <div>
            <h1>list of posts</h1>
            { posts.map((post) => {
                return (
                    <div key={post?.id}>
                       <Link href={`posts/${post.id}`} passHref> 
                       <h2>
                       {post?.id}. 
                            { post?.title }
                          
                         </h2>
                         </Link>
                         <hr />
                    </div>
                )
            })}
        </div>
    )

}

export default PostList;


export async function getStaticProps(){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const data = await response.json();

    return {
        props: {
            posts: data,
        }
    }
}

