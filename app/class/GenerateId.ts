
export class GenerateId{
  
    static getId(): string{
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let ID = '';
        const length:number=6

        for (let i = 0; i < length; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
            ID += caracteres[indiceAleatorio];
        }
        
        return ID;
    }
}