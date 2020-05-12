export class CompanyName{
    private static instance : CompanyName;
    
    private constructor(public name?:string){   
    }

    public static getInstance():CompanyName{
        if (this.instance===undefined) {
            console.log("1");
            this.instance = new CompanyName();
        }
         console.log("2");
          return this.instance;
    }

}