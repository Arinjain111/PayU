import { getServerSession } from "next-auth";
import { SendCard } from "../../../components/SendCard";
import { TransferTransactions } from "../../../components/TransferTransactions";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";

async function getTransferTransactions() {
    const session = await getServerSession(authOptions);
    const txns = await prisma.p2pTransfer.findMany({
        where: {
            OR: [
                {
                    ToUserId: Number(session?.user?.id)
                }, 
                {
                    fromUserId: Number(session?.user?.id)
                }
            ]
        }
    });
    return txns.map((t) => {
        if(t.fromUserId == session?.user?.id) {
            return (
                {
                    time: new Date(t.timestamp),
                    amount: t.amount,
                    type: "DEBIT",
                    userId: t.ToUserId,
                }
            )
        } else if (t.ToUserId == session?.user?.id) {
            return (
                {
                    time: new Date(t.timestamp),
                    amount: t.amount,
                    type: "CREDIT",
                    userId: t.fromUserId,
                }
            )
        }
    })
}

//there is an error in transactions={transactions} and "strictNullChecks": false is set in tsconfig.json

export default async function() {
    const transaction = await getTransferTransactions();
    return <div className="w-full grid grid-cols-2">
        <SendCard></SendCard>
        <TransferTransactions transactions={transaction}></TransferTransactions>
    </div>
}