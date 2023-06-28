import { graphql } from 'msw'
import { products } from 'data';

export default graphql.query('products', (req, res, ctx) =>
  res(
    ctx.data({ products }),
    )
)