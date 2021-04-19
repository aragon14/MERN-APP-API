import express from "express";
import useRouter from "./src/users/userRouter";
const app = express();
const port = process.env.PORT || 3000;

// app.get("/api/users", (req, resp) => {
//   resp.json({ Nombre: "zero" });
// });
app.use("/api/users", useRouter);

export default app;
