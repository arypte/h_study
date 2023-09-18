import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 3010;

app.get('/', (req: Request, res: Response) => {
  return res.send('Hello Express!');
});

app.get('/my-page', (req, res) => {
  //   if (error) {
  //     return res.json({
  //       ok: true,
  //       message:
  //     });
  //   }

  return res.json({
    ok: true,
    message: 'This My Page',
  });
});

app.listen(port, () => {
  console.log(`🚀 server is listeningon port : ${port}`);
});
