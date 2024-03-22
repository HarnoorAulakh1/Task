import express from 'express';
import {Router} from 'express';
import bodyParser from 'body-parser';
import {getAllPairs, getPairVolume,getPairPrice,getPair,getLiquidity,getSocials,getWebsites} from '../Controllers/get.js';

const router = Router();


router.route("/getAllPairs").get(getAllPairs);
router.route("/getPairVolume/:id").get(getPairVolume);
router.route("/getPairPrice/:id").get(getPairPrice);
router.route("/getPair/:id").get(getPair);
router.route("/getSocials/:id").get(getSocials);
router.route("/getWebsites/:id").get(getWebsites);
router.route("/getLiquidity/:id").get(getLiquidity);

export default router;