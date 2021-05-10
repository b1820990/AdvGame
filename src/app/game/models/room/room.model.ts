import { Item } from "../item/item.model";
import { Character } from "../character/character.model";

export class Room {
    private name!: String;
    private imagePath!:any;
    private item?: Item;
    private description?: String; 
    private options?: any[];
    private character?:Character;
    private isVisited?:boolean;

    constructor(name: String, imagePath:String,options?:any[],  description?:String, item?: Item,  character?:Character, isVisited?: boolean){
        this.name = name;
        this.imagePath = imagePath;
        this.item = item;
        this.description = description; 
        this.options = options
        this.character = character;
        this.isVisited = isVisited;
    }
    public getImagePath(): String{
        return this.imagePath;
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
    public getVisit(): boolean{
        return this.isVisited!; 
    }
}

