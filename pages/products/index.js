function ProductList({ products }) {
    return (
      <>
        <h1>List of products</h1>
        {products.map(product => {
          return (
            <div key={product.id}>
              <h2>{product.id} {product.title} {product.price}</h2>
              <hr />
            </div>
          )
        })}
      </>
    )
  }
  export default ProductList
  export async function getStaticProps() {
    console.log('Generating / Regenerating ProductList') //so every 10s we reload we see the console log in terminal
    const response = await fetch('http://localhost:4000/products')  // we made a request to our local json server
    // console.log(response);
    const data = await response.json()
    return {
      props: {
        products: data
      },
      revalidate: 10,
      // we asking next js to revalidate this product list page after every 10 seconds
      // this will ensure the updated products data is served almost immediately without having to rebuild the entire app
    }
  }
  