import { rest } from 'msw'

export const handlers = [
  rest.get('/products', (_, res, ctx) => {
    const rand = Math.random()
    console.info(`rand: ${rand}`)
    if (rand < 0.3) {
      return res(
        ctx.status(200),
        ctx.json([
          {
            productId: 'P2193A',
            fullName: 'separative keyboard',
            standardPrice: 13320,
            currency: 'YEN',
            stock: 'ENOUGH'
          },
          {
            productId: 'B00129',
            fullName: 'super big display',
            standardPrice: 1332320,
            currency: 'YEN',
            stock: 'ENOUGH'
          }
        ])
      )
    } else if (rand >= 0.3 && rand < 0.8) {
      return res(ctx.status(200), ctx.json([]))
    } else {
      return res(ctx.status(400))
    }
  })
]
