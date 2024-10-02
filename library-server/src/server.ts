import cors from 'cors';
import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import { config } from './config';
import { registerRoutes } from './routes';

const PORT = config.server.port;

const app: Express = express();

app.use(express.json());
app.use(cors());

(async function startUp() {
  try {
    await mongoose.connect('mongodb://localhost:27017/librarydb', {
      w: "majority",
      retryWrites: true,
      authMechanism: "DEFAULT"
    });

    console.log("Connection to MongoDB successfully made");

    registerRoutes(app);

    app.get("/health", (req: Request, res: Response) => {
      res.status(200).json({ message: "Server is running properly" });
    })

    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    })
  } catch (error) {
    console.log("Could not make a connection to the database");
  }
})();
