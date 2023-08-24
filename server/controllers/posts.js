import mongoose from "mongoose";
import PostModel from "../models/PostModel.js";

export const getAllPosts = async (req,res) => {

    const posts = await PostModel.find();

    try {
        return res.status(200).json(posts);
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "something went wrong..."});
    }
};

export const createPost = async (req,res) => {
    console.log(req.body.desc);
    const {desc, userName} = req.body;

    const newPost = new PostModel({desc,userName});

    try {
        await newPost.save();
        return res.status(200).json(newPost);
    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "something went wrong..."});
    }
};