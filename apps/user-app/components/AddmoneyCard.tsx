import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textInput";
import { useState } from "react"

const SUPPORTED_BANKS = [{
    name: "HDFC BANK",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "AXIS BANK",
    redirecturl: "https://netbanking.axisbank.com"
}]

export const addMoney = () => {
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
    return <Card title="add Money">
        <div>
            <TextInput label={"Amount"} placeholder={"Amount"} onChange={() => {

            }} />
            <div>
                Bank
            </div>
            
        </div>
    </Card>
}