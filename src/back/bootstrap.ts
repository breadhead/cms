import express from 'express'
import { join } from 'path'

// TODO: express is a temporary solution for proof of concept
const app = express()

app.use(express.static(join(__dirname, '..', 'front')))

export const bootstrap = (port: number) => {
  app.get('/', (_, res) =>
    res.send(`
  <div>
    <div id="root"></div>
    <script src="/index.js" ></script>
  </div>
  `),
  )

  app.listen(port, () => console.log(`Breadheadless CMS on ${port}`))
}
