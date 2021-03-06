import { Router } from "express";
const router = Router();

import * as parroquiaCtrl from "../controllers/parroquia.controller";
import { authJwt } from "../middlewares";



router.get("/:parroquiasId", parroquiaCtrl.getParroquiasById);

router.get("/", parroquiaCtrl.getParroquias);

router.post("/", parroquiaCtrl.createParroquias);

router.put("/:parroquiasId", parroquiaCtrl.updateParroquiasById);

router.delete("/:id", parroquiaCtrl.deleteParroquiasById);


export default router;