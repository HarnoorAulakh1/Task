import express from 'express';
import {Router} from 'express';
import bodyParser from 'body-parser';
import {deletePair,deleteSocials,deleteWebsites,deleteTxns} from '../Controllers/delete.js';

const router = Router();

router.route("/deletePair/:id").delete(deletePair);
router.route("/deleteSocials/:id").delete(deleteSocials);
router.route("/deleteWebsites/:id").delete(deleteWebsites);
router.route("/deleteTxns/:id").delete(deleteTxns);

export default router