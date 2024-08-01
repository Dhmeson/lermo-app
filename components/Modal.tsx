import { Alert, AlertButton, AlertOptions } from "react-native";
interface Props{
    title: string, message?: string, buttons?: AlertButton[], options?: AlertOptions
}
export function Modal(data:Props){
    const {title,buttons,message,options}=data
    return Alert.alert(title,message,buttons,options)
}