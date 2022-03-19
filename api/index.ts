import express from 'express'
import TwitterWebhook from './twitter/webhook'
import TwitterRequestToken from './twitter/auth/requesttoken'
import TwitterAuthCallback from './twitter/auth/callback'
import TwitterUserShow from './twitter/user/show'
import Telegram from './telegram'

const app = express();

app.use(TwitterWebhook)
app.use(TwitterRequestToken)
app.use(TwitterAuthCallback)
app.use(TwitterUserShow)
app.use(Telegram)

if (require.main === module) {
  const port = 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

export default app;

