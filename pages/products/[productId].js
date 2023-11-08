import { useRouter } from 'next/router'

function Product({ product }) {
  const router = useRouter()

  if (router.isFallback) { return <div>Loading...</div>}
  return (
    <div>
      <h2>{product.id} {product.title} {product.price}</h2>
      <p>{product.description}</p>
      <hr />
    </div>
  )
}
export default Product

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(`http://localhost:4000/products/${params.productId}`)
  const data = await response.json()
  console.log(`Generating page for /products/${params.productId}`)

  return {
    props: {
      product: data
    },
   
  }
}

export async function getStaticPaths() {
  return {
    //to pre-render a particular page
    paths: [{ params: { productId: '1' } }], //to pre-render a dynamic page only for product id =1, to be generated at build time
    fallback: true  // and other pages are generated when a request is made
  }
}
