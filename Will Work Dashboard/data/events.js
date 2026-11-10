
// 5.04 - Create sample activity records

window.events = [
    {
        time: "09:00",
        type: "join",
        playerId: 1,
        serverId: "s1",
        message: "Sam joined Coast Survival."
    },
    {
        time: "09:10",
        type: "join",
        playerId: 4,
        serverId: "s2",
        message: "Jordan joined Battle Arena."
    },
    {
        time: "09:20",
        type: "leave",
        playerId: 1,
        serverId: "s1",
        message: "Sam left Coast Survival."
    },
    {
        time: "09:30",
        type: "join",
        playerId: 5,
        serverId: "s2",
        message: "Ash Carter joined Battle Arena."
    },
    {
        time: "09:40",
        type: "leave",
        playerId: 6,
        serverId: "s2",
        message: "Taylor left Battle Arena."
    },
    {
        time: "09:50",
        type: "ban",
        playerId: 3,
        serverId: "s1",
        message: "Ash Williams was banned from Coast Survival."
    }
];

console.log("Activity records loaded:", window.events);
