export class Item {
    private name!:String;
    private description?:String;


    constructor(name:String, description?: String){
        this.name = name;
        this.description = description;
    }

    public getName(): String {
        return this.name;
    }

    public setName(name: String): void {
        this.name = name;
    }

    public getDescription(): String {
        return this.description!;
    }

    public setDescription(description: String): void {
        this.description = description;
    }


}
