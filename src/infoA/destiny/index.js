
import { Container } from './styled'
import ProductQuantity from './productQuantity'
import ProductList from './productsList'

export default function Destiny() {
  return (
    <Container>
      <h1> Destiny </h1>
      <ProductQuantity />
      <br /> <br />

      <ProductList />

    </Container>
  )
}