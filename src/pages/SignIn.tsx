import {Button} from "../components/ui/Button"
import {Input} from "../components/ui/Input"

export const SignIn = () => {
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center"  >
         <div className="bg-white rounded-xl border min-w-48 p-8" >
            <Input placeholder="Username"/>
            <Input placeholder="Password"/>
             <div className="flex justify-center items-center pt-4 py-2">
            <Button loading={false} variant="secondary" size="sm" text="SignIn"
            fullWidth={true} />
            </div>
        </div>
    </div>
}