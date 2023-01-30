import { PathParams, ResponseResolver, RestContext, RestRequest } from 'msw';

const put: ResponseResolver<RestRequest<never, PathParams<string>>, RestContext> = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      token: 'mock-000000004',
      admin: false,
      name: 'mock-fugafuga'
    })
  );
};

const mockPosts = {
  put
};

export default mockPosts;
