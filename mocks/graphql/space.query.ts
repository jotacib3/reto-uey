import { graphql } from 'msw'
import { space } from 'data';

export default graphql.query('space', (req, res, ctx) =>
  res(
    ctx.data({ space }),
    )
)