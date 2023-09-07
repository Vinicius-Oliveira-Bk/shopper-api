import express from "express";
import { config } from "dotenv";
import { MySQLClient } from "./database/mysql";
import Route from "./routes/index";


const main = async () => {
  config();

  const app = express();

  app.use(express.json());

  await MySQLClient();

  app.use('./products', Route)
  app.use('./packs', Route)

//   app.patch("/users/:id", async (req, res) => {
//     const mongoUpdateUserRepository = new MongoUpdateUserRepository();

//     const updateUserController = new UpdateUserController(
//       mongoUpdateUserRepository
//     );

//     const { body, statusCode } = await updateUserController.handle({
//       body: req.body,
//       params: req.params,
//     });

//     res.status(statusCode).send(body);
//   });

  const port = process.env.PORT || 3001;

  app.listen(port, () => console.log(`listening on port ${port}!`));
};

main();
