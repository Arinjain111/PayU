"use client"

import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Select } from "@repo/ui/select";
import { TextInput } from "@repo/ui/textInput";
import { useState } from "react"
import { Center } from "@repo/ui/center";

const SUPPORTED_BANKS = [{
    name: "HDFC BANK",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "AXIS BANK",
    redirecturl: "https://netbanking.axisbank.com"
}]

export const AddMoney = () => {
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
    return <Card title="Add Money">
        <div className="w-full">
            <TextInput label={"Amount"} placeholder={"Amount"} onChange={() => {

            }} />
            <div className="pt-4 pb-2 text-left">
                Bank
            </div>
            <div>
                <Select onSelect={(value) =>{
                    setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "")
                }} options={SUPPORTED_BANKS.map(x => ({
                    key: x.name,
                    value: x.name
                }))}/>
            </div>
            <div className="flex justify-center pt-4">
                <Button onClick={()=> {
                    window.location.href = redirectUrl || ""
                }}>
                    Add Money
                </Button>
            </div>
        </div>
    </Card>
}