import { Card } from "@repo/ui/card"

export const OnRampTransactions = ({ transactions }: {
transactions: {
    time: Date,
    amount: number,
    status: string,
    provider: string,
}[]
}) => {
if (!transactions.length) {
    return (
    <Card title="Recent Transactions">
        <div className="text-center pb-8 pt-8">
            No Recent Transactions</div>
    </Card>
    )
}
return (
    <Card title="Recent Transactions">
    <div className="pt-2">
        {transactions.map((t) => (
        <div className="flex justify-start justify-between items-center my-2">
            <div className="flex flex-col ">
                <div className="text-sm">{t.status}</div>
                <div className="text-slate-600 text-xs">{t.time.toDateString()}</div>
            </div>
            <div className="flex flex-col justify-center">+ Rs {t.amount / 100}</div>
        </div>
        ))}
    </div>
    </Card>
)
}
  