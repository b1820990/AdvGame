
import { Character } from "./models/character/character.model";
import { Item } from "./models/item/item.model";
import { Room } from "./models/room/room.model";



export const CHARACTERS: Array<Character> = [
    new Character("Ebed"),
    new Character("Saturos"),
    new Character("Shenarah"),
]

export const ROOMS: Room[] = [
    new Room("Start","src/assets/rooms/1or5orStart.png"),
    new Room("Room 1","src/assets/rooms/1or5orStart.png"),
    new Room("Room 2","src/assets/rooms/2.png"),
    new Room("Room 3","src/assets/rooms/3or4.png"),
    new Room("Room 4","src/assets/rooms/3or4.png"),
    new Room("Room 5","src/assets/rooms/1or5orStart.png"),
    new Room("Room 6","src/assets/rooms/6.png"),
    new Room("Room 7","src/assets/rooms/7.png"),
]

export const ITEMS: Item[] = [
    
]