import express from 'express';
import {Router} from 'express';
import bodyParser from 'body-parser';
import {updatePairVolume,updatePairPrice,updateSocials,updateWebsites, updateImageUrl,updateTxns} from '../Controllers/update.js';

const router = Router();


router.route("/updateVolume/:id").patch(updatePairVolume);
router.route("/updatePrice/:id").patch(updatePairPrice);
router.route("/updateSocials/:id").patch(updateSocials);
router.route("/updateWebsites/:id").patch(updateWebsites);
router.route("/updateImageUrl/:id").patch(updateImageUrl);
router.route("/updateTxns/:id").patch(updateTxns);

export default router;
