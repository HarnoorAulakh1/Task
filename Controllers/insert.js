import mongoose from "mongoose";
import pairs from "../Schema/Pairs.js";

export const insertPairs = async (req, res) => {
  const pair = req.body;
  if (pair) {
    if (pair.length > 1) {
      try {
        await pairs.insertMany(pair);
        res.send(pair);
      } catch (error) {
        console.log(error);
        res.send(error);
      }
      return;
    }
    const newPair = new pairs(pair);
    try {
      await newPair.save();
      res.send(newPair);
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  } else {
    res.send("No data");
  }
};

export const insertSocials = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  console.log(data);
  if (data) {
    try {
      const response = await pairs.updateOne(
        { _id: id },
        { $push: { "info.socials": data } }
      );
      res.send("Inserted");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  } else {
    res.send("No data");
  }
};

export const insertWebsites = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  if (data) {
    try {
      const response = await pairs.updateOne(
        { _id: id },
        { $push: { "info.websites": data } }
      );
      res.send("Inserted");
    } catch (error) {
      console.log(error);
      res.send(error);
    }
  } else {
    res.send("No data");
  }
};
