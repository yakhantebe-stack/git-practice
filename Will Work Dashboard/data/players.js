
// 5.03 - Create sample player records

// Create the CF_DATA object if it does not exist
window.CF_DATA = window.CF_DATA || {};

// Sample player records
window.CF_DATA.players = [
    {
        id: 1,
        name: "Sam",
        serverId: "s1",
        isBanned: false
    },
    {
        id: 2,
        name: "Alex",
        serverId: "s1",
        isBanned: false
    },
    {
        id: 3,
        name: "Ash Williams",
        serverId: "s1",
        isBanned: true
    },
    {
        id: 4,
        name: "Jordan",
        serverId: "s2",
        isBanned: false
    },
    {
        id: 5,
        name: "Ash Carter",
        serverId: "s2",
        isBanned: false
    },
    {
        id: 6,
        name: "Taylor",
        serverId: "s2",
        isBanned: false
    }
];

console.log("Player records loaded:", window.CF_DATA.players);
