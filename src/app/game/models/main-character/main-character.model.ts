import { Item } from "../item/item.model";
import { Room } from "../room/room.model";

export class MainCharacter {
    private name!:String;
    private currentRoom!:Room;
    private inventory!:Item[];
    private image?: File;

    constructor(name:String, currentRoom:Room, inventory:Item[],image:File){
        this.name = name;
        this.currentRoom = currentRoom;
        this.inventory = inventory;
        this.image = image;  
    }

    public getImage(): File {
        return this.image!;
    }

    public setImage(image: File): void {
        this.image = image;
    }


    private addItem(item: Item){
        this.inventory.push(item);
    }

    private removeItem(itemName: String){
        this.inventory.filter(item => item.getName() !== itemName)
    }

    public getName(): String {
        return this.name!;
    }

    public setName(name: String): void {
        this.name! = name;
    }

    public getCurrentRoom(): Room {
        return this.currentRoom!;
    }

    public setCurrentRoom(currentRoom: Room): void {
        this.currentRoom = currentRoom;
    }

    public getInventory(): Item[] {
        return this.inventory;
    }

    public setInventory(inventory: Item[]): void {
        this.inventory = inventory;
    }


}
