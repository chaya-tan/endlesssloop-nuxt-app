import express from 'express'
import TwitterWebhook from './twitter/webhook'
import Telegram from './telegram'

const app = express();

app.use(TwitterWebhook)
app.use(Telegram)

if (require.main === module) {
  const port = 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

export default app;

