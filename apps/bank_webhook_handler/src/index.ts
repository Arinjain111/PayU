import express from "express";
import db from "@repo/db/client"

const app = express();

app.post("/hdfcWebhook", async (req, res) => {
    const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };
    await db.balance.update({
        where:{
            userId : paymentInformation.userId
        },
        data: {
            amount: {
                increment: paymentInformation.amount,
            }
        }
    })
    await db.onRampTransaction.updateMany({
        where: {
            token: paymentInformation.token,
        },
        data: {
            status: "Success"
        }
    })
    res.json({
        message: "captured" 
    })
})

