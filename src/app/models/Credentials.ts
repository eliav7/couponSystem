export class Credentials{
    private static instance : Credentials;
    
    private constructor(public email?:string, public password?:string, public type?:string){   
    }

    public static getInstance():Credentials{
        if (this.instance===undefined) {
            console.log("1");
            this.instance = new Credentials();
        }
         console.log("2");
          return this.instance;
    }

}