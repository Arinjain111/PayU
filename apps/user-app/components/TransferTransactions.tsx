import { Card } from "@repo/ui/card"
import { Center } from "@repo/ui/center"

export const TransferTransactions=({ transactions } : {
   transactions: {
        time: Date,
        amount: number,
        type: string,
        status: any,
        userId: number
   }[]
}) => {
    if (!transactions.length) {
        return <div className="">
            <Center>
                <Card title="Recent Transactions">
                    <div>
                        No Recent Transactions
                    </div>
                </Card>
            </Center>
        </div>
    }
    return (
        <Center>
            <Card title="Recent Transactions">
                <div className="pt-2">
                    {transactions.map(t => <div className="flex justify-between">
                        <div>
                            <div className="text-sm">
                                {t.type === "DEBIT" ? `Sent to ${t.userId}` : `Received from ${t.userId}`}
                            </div>

                            <div className="text-slate-600 text-xs">
                                {t.time.toDateString()}
                            </div>
                        </div>
                        {t.type === "DEBIT" ?
                            <div className="flex flex-col justify-center text-red-600">
                                - Rs {t.amount / 100}
                            </div> : <div className="flex flex-col justify-center text-green-600">
                                Rs {t.amount / 100}
                            </div>
                        }
                    </div>)}
                </div>
            </Card >
        </Center>
    )
}