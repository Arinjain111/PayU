import { Card } from "@repo/ui/card";
import { TextInput } from "@repo/ui/textInput";

async function getNumbers(){

}

export default function() {
    return <div>
        <div className="text-4xl mb-8 pt-8 text-[#6a51a6] font-bold">
            Transfer in Minutes !!
        </div>
        <Card title="Send">
            <div>
                {/* <TextInput placeholder="9854320125" label="Number" onChange={(e) =>{
                    
                }}></TextInput> */}
            </div>
        </Card>
    </div>
}