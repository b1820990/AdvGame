
import { Character } from "./models/character/character.model";
import { Item } from "./models/item/item.model";
import { Room } from "./models/room/room.model";



export const CHARACTERS: Array<Character> = [
    new Character("Ebed"),
    new Character("Saturos"),
    new Character("Shenarah"),
]

export const ROOMS: Room[] = [
    new Room("Start","/assets/rooms/1or5orStart.png"),
    new Room("Room 1","/assets/rooms/1or5orStart.png"),
    new Room("Room 2","/assets/rooms/2.png"),
    new Room("Room 3","/assets/rooms/3.png"),
    new Room("Room 4","/assets/rooms/4.png"),
    new Room("Room 5","/assets/rooms/1or5orStart.png"),
    new Room("Room 6","/assets/rooms/6.png"),
    new Room("Room 7","/assets/rooms/7.png"),
]

export const ITEMS: Item[] = [
    
]