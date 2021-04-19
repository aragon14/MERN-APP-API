import { Router } from "express";
import { getUser, getUsers, saveUser } from "./userServices";

const router = Router();

router.get("/", (req, resp) => {});

router.get("/:username", (req, resp) => {});

router.post("/", async (req, resp) => {
  try {
    const data = await saveUser(req.body.user);
    resp.json({ data: data });
  } catch (err) {
    resp.status(500).send({ error: err });
    console.log(resp);
  }
});

export default router;
