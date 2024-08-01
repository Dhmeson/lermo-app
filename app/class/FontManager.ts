import { responsiveFontSize } from "react-native-responsive-dimensions";

export class FontManager {
    static font_normal=responsiveFontSize(5.2)
    static font_medium=responsiveFontSize(6.5)
    static font_large=responsiveFontSize(8)
    

    static getOptionsFont(content: string[]){
       const haveMaxlength= this.validWordLength(content)
       if(haveMaxlength){
        return [this.font_normal]
       }
       else return [this.font_normal,this.font_medium,this.font_large]
    }
    
    private static validWordLength(content: string[]){
        const haveMaxlength=content.find((word: string) =>{
            return word.length >=12
        })
        return haveMaxlength? true : false
    }
    static getFontDescription(index:number){
        switch(index){
            case 0:
                return 'Normal'
            case 1:
                return 'Medium'
            case 2:
                return 'Large'
            default:
                return 'Normal'
        }
    }
    static getFontSizeValue(index:number){
        switch(index){
            case 0:
                return this.font_normal
            case 1:
                return this.font_medium
            case 2:
                return  this.font_large
            default:
                return this.font_normal
        }
    }

}