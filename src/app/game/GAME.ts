
import { Character } from "./models/character/character.model";
import { Item } from "./models/item/item.model";
import { Room } from "./models/room/room.model";





const CHARACTERS: Array<Character> = [
    new Character("Ebed"),
    new Character("Saturos"),
    new Character("Shenarah"),
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
    {m:"Enter the northern passage.", room: 1}
] 


const room1Options:Array<any> =[
    {m:"Pick up the rusted broadsword.", item: ITEMS[0]},
    {m:"Inspect inscription on door.", String: ""},
    {m:"Enter the eastern passage.", room: 2},
    {m:"Enter the western passage.",room: 3},
    {m:"Enter the southern passage.", room: 0},
] 

const room2Options:Array<any> =[
    {
        m:"Speak to the farmer.", options:[
            {m:"Where is this place?"},
            {m:"Are you okay?", next:"ok"},
        ]
    
    },
    {m:"Enter the western passage.",room: 1},
    {label:"ok", m:"I will see to your daughter", next:"see_daughter"},
    {label:"see_daughter", m:"Attempt to heal the child.", item:ITEMS[1]},

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
    {m:"Enter the eastern passage.",room: 3},
    {m:"Enter the northern passage.",room: 4},
    {label:"wyd", m:"What are you doing?"},
] 

const room4Options:Array<any> =[
    {
        m:"Inspect the glacier. ", options:[
            {requires:ITEMS[1], m:" Pour the alchemist's fire on the glacier.", next:"fire"}
        ]
    },
    {m:"Enter the southern passage.",room: 3},
    {label:"fire", m:"Are you ok?", item:ITEMS[3]},
    
] 

const room5Options:Array<any> =[
    {m:"Step onto the dais and kneel.", next:"riddle1"},
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
    {m:"Enter the southern passage.", room:1},
    {label:"leave", m:"Enter the northern passage.", room:6},
    {label:"right3", m:"Raise your hand to grasp the corporeal light.", item:ITEMS[4]},
    {requires:ITEMS[4], m:"Wave the staff to dispel the illusion.", next:"leave"},
    {label:"wrong", step:"RESET GAME"},
] 


export const ROOMS: Room[] = [
    new Room("Start","/assets/rooms/1or5orStart.png",roomStartOptions, "You awaken on hard packed ice. Grasping your head to shield yourself from a splitting headache, you do your best to recall your situation. You are Elisande, the warrior princess of the North. The last thing you remember is the harsh freezing winds rush through your kingdom, freezing all in its path under a thick layer of crystalline ice.You have heard tales of the dreaded Ice Lich Ancine and his rise to power and it seems his next conquest was your kingdom. You look at your old, rusted broadsword on the ground and begin your quest."),
    new Room("Room 1","/assets/rooms/1or5orStart.png",room1Options,"This room is split into passages to the east, west, and south with a stone door blocking entrance to the north. On the door itself there lies an inscription."),
    new Room("Room 2","/assets/rooms/2.png",room2Options, "An old man, slightly balding stands in the center of the room and looking at a young girl, occasionally brushing her hair and sniffling. He wears the clothes of a farmer."),
    new Room("Room 3","/assets/rooms/3.png", room3Options,"A man with red eyes sits on a chair in the center of the room, lounging." ),
    new Room("Room 4","/assets/rooms/4.png",room4Options, "Inside the room, a huge pillar of ice spirals upward. Its crystalline edifice glimmers softly as a woman with long, pointed ears looks in abject horror."),
    new Room("Room 5","/assets/rooms/1or5orStart.png",room5Options, ""),
    new Room("Room 6","/assets/rooms/6.png"),
    new Room("Room 7","/assets/rooms/7.png"),
    new Room("Room 6-1","/assets/rooms/6.png"),
    new Room("Room 6-2","/assets/rooms/6.png"),
    new Room("Room 6-3","/assets/rooms/6.png"),
    new Room("Room 6-4","/assets/rooms/6.png"),
    new Room("Room 6-5","/assets/rooms/6.png"),
    new Room("Room 6-6","/assets/rooms/6.png"),
    new Room("Room 6-7","/assets/rooms/6.png"),
    new Room("Room 6-8","/assets/rooms/6.png"),
]

