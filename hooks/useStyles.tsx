import { Colors } from "@/constants/Colors"
import { useTheme } from "./useTheme"

export function useStyles(){
    const { theme } = useTheme()
	const styles = { color: Colors[theme].borderColor }
    return {
        styles
    }
}