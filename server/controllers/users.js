import express from 'express';
import mongoose from 'mongoose';
import UserModel from '../models/UserModel.js';
import bcryptjs from 'bcryptjs';


export const createUser = async(req,res) => {
    const {fullName, userName, email, password} = req.body;
    console.log(fullName, userName);

    const emailexist = await UserModel.findOne({email});
    
    const userNameExist = await UserModel.findOne({userName});

    if(userNameExist || emailexist) return res.status(400).json({message: "User already exists..."});

    const hashedPassword = await bcryptjs.hash(password,1);
    const newUser = new UserModel({fullName, userName, email, password:hashedPassword});

    try {
        await newUser.save();
        return res.status(200).json(newUser);

    } catch (error) {
        console.log(error);
        return res.status(400).json({message: "something went wrong..."})
    }
};


export const getUser = async(req,res) => {
    const {emailorUsername, password} = req.body;
    // console.log(fullName, userName);

    const emailgiven = emailorUsername.includes("@");
    let user;

    if(emailgiven){
        const finduser = await UserModel.findOne({email:emailorUsername});

        if(!finduser) return res.status(400).json({message: "No user found..."});

        const passwordMatch = await bcryptjs.compare(password, finduser.password);

        if(!passwordMatch) return res.status(400).json({message: "No user found..."});
        user = finduser;

    }else{
        const finduser = await UserModel.findOne({userName:emailorUsername});

        if(!finduser) return res.status(400).json({message: "No user found..."});

        const passwordMatch = await bcryptjs.compare(password, finduser.password);

        if(!passwordMatch) return res.status(400).json({message: "No user found..."});
        user = finduser;
    }
    return res.status(200).json(user);
    // try {
    //     await newUser.save();
    //     return res.status(200).json(newUser);

    // } catch (error) {
    //     console.log(error);
    //     return res.status(400).json({message: "something went wrong..."})
    // }
};