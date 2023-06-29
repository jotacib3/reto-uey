import { rest } from 'msw'
import { products } from 'data';

export default rest.get('http://localhost:4000/products', (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({ products }),
    )
  );