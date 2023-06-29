import { rest } from 'msw'
import { space } from 'data';

export default rest.get('http://localhost:4000/space', (req, res, ctx) =>
{
  console.log(req.params);
return req.params.id === space?.id?.toString() ? res(
ctx.status(200),
ctx.json(space),
) : res(
  ctx.status(204),
)
});