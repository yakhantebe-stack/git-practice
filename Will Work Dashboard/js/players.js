
// 5.06 - Show the player table

function renderPlayers(list) {
    const playerRows = document.getElementById("player-rows");

    if (!playerRows) return;

    playerRows.innerHTML = "";

    if (list.length === 0) {
        playerRows.innerHTML = `
            <tr>
                <td colspan="4">No players found.</td>
            </tr>
        `;
        return;
    }

    list.forEach(player => {
        const server = window.servers.find(
            s => s.id === player.serverId
        );

        const serverName = server ? server.name : "Unknown Server";
        const status = player.isBanned ? "Banned" : "Active";

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${player.id}</td>
            <td>${player.name}</td>
            <td>${serverName}</td>
            <td>${status}</td>
        `;

        playerRows.appendChild(row);
    });
}
