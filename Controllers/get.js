import mongoose from "mongoose";
import pairs from "../Schema/Pairs.js";

export const getPair = async (req, res) => {
    const {id} = req.params;
    try {
        const data = await pairs.findById(id);
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

export const getAllPairs = async (req, res) => {
    try {
        const data = await pairs.find();
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

export const getPairVolume = async (req, res) => {
    const {id} = req.params;
    console.log(id);
    try {
        const data = await pairs.findById(id,{volume:1});
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

export const getPairPrice=async(req,res)=>{
    const {id} = req.params;
    try {
        const data = await pairs.findById(id,{priceUsd:1,priceNative:1});
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

export const getSocials=async(req,res)=>{
    const {id} = req.params;
    try {
        const data = await pairs.findById(id,{"info.socials":1});
        res.send(data.info.socials);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

export const getWebsites=async(req,res)=>{
    const {id} = req.params;
    try {
        const data = await pairs.findById(id,{"info.websites":1});
        res.send(data.info.websites);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}

export const getLiquidity=async(req,res)=>{
    const {id} = req.params;
    try {
        const data = await pairs.findById(id,{liquidity:1});
        res.send(data);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
}
