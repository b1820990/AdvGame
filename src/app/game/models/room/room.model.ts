import { Item } from "../item/item.model";
import { Character } from "../character/character.model";

export class Room {
    private name!: String;
    private imagePath!:any;
    private item?: Item;
    private description?: String; 
    private options?: String[];
    private character?:Character;

    constructor(name: String, imagePath:String,  item?: Item, description?:String, options?:String[], character?:Character){
        this.name = name;
        this.imagePath = imagePath;
        this.item = item;
        this.description = description; 
        this.options = options
        this.character = character;
    }
    
    //Setters and getters
    public getName(): String {
        return this.name;
    }

    public setName(name: String): void {
        this.name = name;
    }

    public getItem(): Item {
        return this.item!;
    }

    public setItem(item: Item): void {
        this.item = item;
    }

    public getDescription(): String {
        return this.description!;
    }

    public setDescription(description: String): void {
        this.description = description;
    }

    public getOptions(): String[] {
        return this.options!;
    }

    public setOptions(options: String[]): void {
        this.options = options;
    }
    public getCharacter(): Character {
        return this.character!;
    }
}

