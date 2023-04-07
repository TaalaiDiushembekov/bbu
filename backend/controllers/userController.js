import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import {generateToken} from "../utils/generateToken.js";


const authUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    const user = await User.findOne({email})
    if (user && await user.matchPassword(password)) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Error email or password')
    }
})

const getUserProfile = asyncHandler(async (req, res) => {
    // const user = await User.findById(req.user._id)
    // if (user){
    //     res.json({
    //         _id: user._id,
    //         name: user.name,
    //         email: user.email,
    //         isAdmin: user.isAdmin
    //     })
    // } else {
    //     res.status(401)
    //     throw new Error('User not found')
    // }


    const user = await User.aggregate([
        {
            $lookup: {
                from: 'products',
                localField: 'name',
                foreignField: 'name',
                as: 'department_manager'
            }
        },
        // {$match: {organization: "1"}}

    ])
    res.json(user)

    // User.aggregate([
    //     {$lookup: {
    //             from: 'products',
    //             localField: 'organization',
    //             foreignField: 'organization',
    //             as:'department_manager'
    //         }},
    //     {$match: {organization: "1"}}
    // ])

})

const registerUser = asyncHandler(async (req, res) => {
    const {email, password, name} = req.body
    const user = await User.findOne({email})
    if (user) {
        res.status(400)
        throw new Error('User already exist')
    }
    let newUser = await User.create({email, password, name})
    if (newUser) {
        res.status(201).json({
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            token: generateToken(newUser._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})


const uploadInfoTwo = asyncHandler(async (req, res) => {
    const {salary, email} = req.body
    const user = await User.findOne({email})
    if (user) {
        res.status(400)
        throw new Error('User already exist')
    }
    let newUser = await User.create({salary})
    if (newUser) {
        res.status(201).json({
            _id: newUser._id,
            salary: newUser.salary,

        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// const uploadInfo = asyncHandler(async(req, res) => {
//     const { id } = req.params
//     const user = await User.findById({_id: id})
//     if (user){
//         res.status(400)
//         throw new Error('User id find')
//     }
//     let newUploadInfo = await User.updateOne({id}, {$set:{info: ''}},{upsert:true, multi: true
//     })
//     if (newUploadInfo){
//         res.status(201).json({
//
//             info: newUploadInfo.info,
//
//         })
//     } else  {
//         res.status(400)
//         throw new Error('Invalid user data')
//     }
// })

const getUsers = asyncHandler(async (req, res) => {
    // const users = await User.find();
    // res.json(users)
    //
    const users = await User.aggregate([
        {
            $lookup: {
                from: 'products',
                localField: 'name',
                foreignField: 'name',
                as: 'department_manager'
            }
        },
        // {$match: {organization: "1"}}

    ])
    res.json(users)


})
const getUsersById = asyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
    if (user) {
        User.aggregate([
            {
                $lookup: {
                    from: 'products',
                    localField: 'organization',
                    foreignField: 'organization',
                    as: 'department_manager'
                }
            },
            {$match: {organization: "1"}}

        ])
        res.json(user)
    } else {
        res.status(404)
    }
})

const updateUser = asyncHandler(async (req, res) => {
    const {cart} = req.body
    let user = await User.updateOne(req.user._id, {cart}, {new: true})
    if (user) {
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data)')
    }
})

export {
    authUser
    , registerUser
    , getUserProfile
    , getUsers
    , getUsersById
    // , uploadInfo
    , updateUser
    , uploadInfoTwo
}
