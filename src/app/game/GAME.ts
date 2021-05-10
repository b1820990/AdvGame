
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
    new Room("Room 3","/assets/rooms/3or4.png"),
    new Room("Room 4","/assets/rooms/3or4.png"),
    new Room("Room 5","/assets/rooms/1or5orStart.png"),
    new Room("Room 6","/assets/rooms/6.png"),
    new Room("Room 7","/assets/rooms/7.png"),
]

export const ITEMS: Item[] = [
    new Item("Broadsword"),
    new Item("Pine Tree Sap"),
    new Item("Sulfur Powder"),
    new Item("Tiara of Ancient Kings"),
    new Item("Scepter Of Untold Magic"),
    new Item("Old, Wooden Jewelery Box"),
    new Item("Boots of Hermes"),
]   



const roomStartOptions:Array<any> =[
    {m:"Enter the northern passage."}
] 


const room1Options:Array<any> =[
    {m:"Pick up the rusted broadsword.", item: ITEMS[0]},
    {m:"Inspect inscription on door.", String: ""},
    {m:"Enter the eastern passage.", room: ROOMS[2]},
    {m:"Enter the western passage.",room: ROOMS[3] },
    {m:"Enter the southern passage.", room: ROOMS[0]},
] 

const room2Options:Array<any> =[
    {
        m:"Speak to the farmer.", options:[
            {m:"Where is this place?"},
            {m:"Are you okay?", next:"ok"},
        ]
    
    },
    {label:"ok", m:"I will see to your daughter", next:"see_daughter"},
    {label:"see_daughter", m:"Attempt to heal the child.", item:ITEMS[1]},
    {m:"Enter the western passage.",room: ROOMS[1]},
] 


const room3Options:Array<any> =[
    {
        m:"Speak to the seated man", options:[
            {m:"Who are you?"},
            {m:"Do you know how to get through the door?"},
            {m:"Do you know anything about the Ice King Ancine?"},
            {m:"What are you doing?", next:"wyd"},
        ]
    
    },
    {label:"wyd", m:"What are you doing?"},
    {m:"Enter the eastern passage.",room: ROOMS[3]},
    {m:"Enter the northern passage.",room: ROOMS[4]},
] 

const room4Options:Array<any> =[
    {
        m:"Inspect the glacier. ", options:[
            {requires:ITEMS[1], m:" Pour the alchemist's fire on the glacier.", next:"fire"}
        ]
    },
    {label:"fire", m:"Are you ok?", item:ITEMS[3]},
    {m:"Enter the southern passage.",room: ROOMS[3]},
] 

const room5Options:Array<any> =[
    {m:"Step onto the dais and kneel.", next:"riddle"},
    {label:"riddle1", m:"If I have it, I don’t share it. If I share it, I don’t have it. What is it?", options:[
        {m:"Solitude.", next:"wrong"},
        {m:"An invisible hamster.", next:"wrong"},
        {m:"A secret.", next:"right1"},
    ]},
    {label:"right1", m:"What goes away as soon as you talk about it?", options:[
        {m:"Seriously, an invisible hamster.", next:"wrong"},
        {m:"Silence.", next:"right2"},
        {m:"Death.", next:"wrong"},
    ]},
    {label:"right2", m:"What goes away as soon as you talk about it?", options:[
        {m:"Death.", next:"right3"},
        {m:"The Unknown.", next:"right3"},
        {m:"Redemption.", next:"right3", item:ITEMS[5]},
    ]},
    {label:"right3", m:"Raise your hand to grasp the corporeal light.", item:ITEMS[4]},
    {requires:ITEMS[4], m:"Wave the staff to dispel the illusion.", next:"leave"},
    {label:"leave", m:"Enter the northern passage.", room:ROOMS[6]},
    {label:"wrong", step:"RESET GAME"},
    {m:"Enter the southern passage.", room:ROOMS[1]}

] 