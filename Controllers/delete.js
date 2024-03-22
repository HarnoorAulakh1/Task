import mongoose from "mongoose";
import pairs from "../Schema/Pairs.js";

export const deletePair = async (req, res) => {
    const {id} = req.params;
    try {
        const data = await pairs.findByIdAndDelete(id);
        res.send(data);
    } catch (error) {
        console.log(error);
    }
}
export const deleteSocials = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const response = await pairs.updateOne(
            { _id: id },
            { $pull: { "info.socials":data}}
        ); 
        res.send(response);
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
}

export const deleteWebsites = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    try {
        const response = await pairs.updateOne(
            { _id: id },
            { $pull: { "info.websites":data} }
        );
        res.send(response);
    }
    catch (error) {
        console.log(error);
        res.send(error);
    }
}
export const deleteTxns = async (req, res) => {
    const { id } = req.params;
    const data = "txns."+req.body.txns;
    try {
        const response = await pairs.updateOne(
            { _id: id },
            {$unset:{[data]:""}}
        );
        res.send(response);
    }
    catch (error) {
        console.log(error);
    }
}
