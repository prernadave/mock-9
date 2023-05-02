const express = require('express')
const register = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models/user.model')
require('dotenv').config()


// -------------- This endpoint should return a list of all registered users.------------------------------
register.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users)
    } catch (error) {
        console.log(error);
        res.status(500).json({ "message": "Something went wrong" })
    }
})

// ----------------------------------This endpoint should allow users to register. Hash the password on store.------------------

register.post('/register', async (req, res) => {
    const { name, email, password, dob, bio } = req.body;
    try {
        const exists = await User.findOne({ email });
        if (exists) {
            res.status(200).json({ "message": "User already exsists. Please Login!!" });
        } else {
            bcrypt.hash(password, 7, async (err, secured) => {
                if (secured) {
                    const user = new User({ name, email, password: secured, dob, bio });
                    await user.save()
                    res.status(200).json({ "message": "User Registered" });
                } else {
                    console.log(err);
                    res.status(404).json({ "message": "Something went wrong" })
                }
            });
        }
    } catch (error) {
        console.log(error);
        res.status(404).json({ "message": "Something went wrong" })
    }
})
// 6450bd89f947d73213ddbddf

//---- This endpoint should allow the user to send a friend request to another user identified by its ID.---
register.post("/users/:id/friends", async (req, res) => {
    const myID = req.params.id
    const myFriend = req.body.friendId;
    try {
        const me = await User.findById(myID)
        const friend = await User.findById(myFriend)
        me.friendRequests.push(friend)
        await me.save();
        res.status(201).json({ msg: "Friend Request Sent successfully" })
    } catch (error) {
        console.log(error);
        res.status(500).send('failed to send friend request')
    }
})


// This endpoint should return a list of all friends of a specific user identified by its ID.

register.get('/users/:id/friends',async (req,res)=>{
    const myId = req.params.id;
    try {
        const user = await User.findById(myId);
        if(!user){
            res.send({message:"user not found"})
        }else{
         const allfriends =user.friends
         if(allfriends.length!=0){
         console.log(allfriends);
         res.status(200).json({"Message":`here is your all friends:${allfriends}`})
        }else{
            res.status(200).json({"Message":`Sorry you have no friends.}`})
        }
    }
    } catch (error) {
        res.status(500).send('failed to fetch')
    }
})


register.post("/users/:id/friends/:friendId", async(req,res)=>{
    const myId = req.params.id;
    const myFriendId = req.params.friendId;
 
    const flag = req.body.flag
    try{
        const me = await User.findById(myId)
        const mydost = await User.findById(myFriendId)
        let friends = me.friends
        const request = me.friendRequests
       console.log(me);
       console.log(friends);
       if(flag){
        friends.push(mydost);
        res.status(200).json({"Message":`accepted`})}
    else{
        res.json({"Message":`declined`})
    }
}
    catch(error){
        console.log(error);
        res.status(500).send('failed to perform ')
    }
})


module.exports = { register }