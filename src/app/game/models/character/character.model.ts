export class Character {
    private name!: String;
    private dialogue!:any;
    constructor(name:String, dialogue?:any){
        this.name = name;
        this.dialogue = dialogue;
    }

    public getDialog():any{
        return this.dialogue;
    }

    public getName(): String {
        return this.name;
    }

    public setName(name: String): void {
        this.name = name;
    }
}
