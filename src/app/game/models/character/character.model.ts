export class Character {
    private name!: String;
    
    constructor(name:String){
        this.name = name;
    }

    public getName(): String {
        return this.name;
    }

    public setName(name: String): void {
        this.name = name;
    }
}
