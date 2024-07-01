import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"


export default function Product() {

  const { query } = useRouter()

  return(
    <ProductContainer>
      <ImageContainer>
      </ImageContainer>

      <ProductDetails>
        <h1>Camisa X</h1>
        <span>R$ 70,90</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse temporibus incidunt corporis inventore accusantium earum aliquid eius consectetur obcaecati, sit corrupti doloremque sed saepe quae pariatur eaque et. Rerum, blanditiis?</p>

        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}