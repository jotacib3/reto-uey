import { graphql } from 'msw'
import { rentable } from 'data';

export default graphql.query('rentable', (req, res, ctx) =>
  res(
    ctx.data({ rentable }),
    )
)