import express from 'express';
import {Router} from 'express';
import bodyParser from 'body-parser';
import {insertPairs,insertSocials,insertWebsites} from '../Controllers/insert.js';

const router = Router();
router.route("/insertPairs").post(insertPairs);
router.route("/insertSocials/:id").post(insertSocials);
router.route("/insertWebsites/:id").post(insertWebsites);

export default router;