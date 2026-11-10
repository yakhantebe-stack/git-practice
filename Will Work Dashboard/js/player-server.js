
// 5.08 - Filter players by server

function filterPlayersByServer(list, serverId) {
    // Return everyone if no server is selected
    if (!serverId || serverId.trim() === "") {
        return list;
    }

    // Return only players belonging to the selected server
    return list.filter(player =>
        player.serverId === serverId
    );
}
