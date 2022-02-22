import express from 'express'
import TwitterWebhook from './twitter/webhook'

const app = express();

app.use(TwitterWebhook)

if (require.main === module) {
  const port = 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

export default app;

