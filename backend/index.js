import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import UserRouter from "./routes/UserRoute.js";

const app = express();
mongoose.connect(
	"mongodb+srv://TonicDevalop777:TonicDevalop777@cluster0.prropwc.mongodb.net/?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}
);

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once('open', () => console.log("Database connected!....."));

app.use(cors());
app.use(express.json());
app.use(UserRouter);

app.listen(5000, () => console.log("Server up and running..."));
