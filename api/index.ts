import express from 'express'
import bodyParser from 'body-parser'

import TwitterWebhook from './twitter/webhook'
import TwitterRequestToken from './twitter/auth/requesttoken'
import TwitterAuthCallback from './twitter/auth/callback'
import TwitterUserShow from './twitter/user/show'
import Telegram from './telegram'
import LineWebhook from './line/webhook'

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(TwitterWebhook)
app.use(TwitterRequestToken)
app.use(TwitterAuthCallback)
app.use(TwitterUserShow)
app.use(LineWebhook)
app.use(Telegram)



app.post('/requests', (req, res) => {
  console.log(req.body);
  res.status(201).json('all ok');
})

if (require.main === module) {
  const port = 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}

export default app;

