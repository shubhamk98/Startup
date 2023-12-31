import express from "express";
import {handelAllStartUpList,handelAllStartUpFilter} from "../controllers/handelAllStartUpList.js";

const router = express.Router();

router.get('/AllStartUp', handelAllStartUpList);
router.get('/filter', handelAllStartUpFilter);




export default router;
