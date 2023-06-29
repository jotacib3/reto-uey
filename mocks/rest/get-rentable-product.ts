import { rest } from 'msw'
import { rentable } from 'data';

export default rest.get('http://localhost:4000/rentable/:id', (req, res, ctx) =>
    {
        console.log(req.params);
     return req.params.id === rentable?.id?.toString() ? res(
      ctx.status(200),
      ctx.json(rentable),
    ) : res(
        ctx.status(204),
    )
    });