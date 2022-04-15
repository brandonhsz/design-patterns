interface IData{
  name : string,
  age : number,
}

class Singleton {
  
  private static instance: Singleton

  private constructor() {}

  public static getInstance(): Singleton {
    if( !Singleton.instance){
      Singleton.instance = new Singleton()
    }

    return Singleton.instance
  }

}


const objeto = Singleton.getInstance();
const objeto2 = Singleton.getInstance();

objeto === objeto2 ? console.log("Singleton") : console.log("Not Singleton");




