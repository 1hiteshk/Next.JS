import { useRouter } from "next/router";

function Post({post}){
    // const router = useRouter();

    // if(router.isFallback){
    //     return<h1>Lodaing...</h1>
    // }

    return(
        <div>
            <h1>hehehe</h1>
          <h2>{post.id} {post.title}</h2>
          <p>{post.body}</p>
        </div>
    )
};

export default Post;

export async function getStaticPaths(){
    return {
        paths: [
            { params: { postId: '1'} },
            { params: { postId: '2'} },
            { params: { postId: '3'} },
            { params: { postId: '4'} },
            { params: { postId: '5'} },
        ],
        fallback: `blocking`,
    }

}

export async function getStaticProps(context){
    const { params } = context;
    
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await response.json();

    if(!data.id){
        return{
            notFound: true,
        }
    }
    
    console.log(data, "jj");
    console.log(`generating page for posts ${params.postId} `)

    return {
        props:{
            post:data,
        }
    }
}