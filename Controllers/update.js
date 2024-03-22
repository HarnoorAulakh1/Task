import mongoose from "mongoose";
import pairs from "../Schema/Pairs.js";

export const updatePairVolume = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const keys = Object.keys(data);
  //console.log(keys);
  try {
    for (let i = 0; i < keys.length; i++) {
      const x = "volume." + keys[i];
      const response = await pairs.updateOne(
        { _id: id },
        { $set: { [x]: data[keys[i]] } }
      );
    }
    res.send("Updated");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export const updatePairPrice = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const keys = Object.keys(data);
  //console.log(keys);
  try {
    for (let i = 0; i < keys.length; i++) {
      const x = keys[i];
      const response = await pairs.updateOne(
        { _id: id },
        { $set: { [x]: data[keys[i]] } }
      );
    }
    const result = await pairs.findById(id, { priceUsd: 1, priceNative: 1 });
    res.send("Updated");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export const updateSocials = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const keys = Object.keys(data);
  try {
    const response = await pairs.updateOne(
      { _id: id },
      { $set: { "info.socials.$[elem].url": data.url } },
      { arrayFilters: [{ "elem.type": data.type }] }
    );
    res.send("Updated");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export const updateWebsites = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const keys = Object.keys(data);
  try {
    const response = await pairs.updateOne(
      { _id: id },
      { $set: { "info.websites.$[elem].url": data.url } },
      { arrayFilters: [{ "elem.label": data.label }] }
    );
    res.send("Updated");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export const updateImageUrl = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const response = await pairs.updateOne(
      { _id: id },
      { $set: { "info.image": data.imageUrl } }
    );
    res.send("Updated");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

export const updateTxns = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const keys = Object.keys(data);
  try {
    for (var i = 0; i < keys.length; i++) {
      const keys1 = Object.keys(data[keys[i]]);
      for (var j = 0; j < keys1.length; j++) {
        const x = "txns." + keys[i] + "." + keys1[j];
        const response = await pairs.updateOne(
          { _id: id },
          { $set: { [x]:data[keys[i]][keys1[j]]} }
        );
      }
    }
    res.send("Updated");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
