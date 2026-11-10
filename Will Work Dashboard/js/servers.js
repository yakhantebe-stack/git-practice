
// 5.05 - Show server cards

function renderServers(list) {
    const serverList = document.getElementById("server-list");

    if (!serverList) return;

    serverList.replaceChildren();

    // Handle an empty server list
    if (!list || list.length === 0) {
        const message = document.createElement("p");
        message.textContent = "No servers available.";
        serverList.appendChild(message);
        return;
    }

    // Create a card for each server
    list.forEach(server => {
        const card = document.createElement("div");
        card.className = "server-card";

        const heading = document.createElement("h3");
        heading.textContent = server.name;

        const game = document.createElement("p");
        game.textContent = "Game: " + server.game;

        const status = document.createElement("p");
        status.className = "server-status";
        status.textContent = "Status: " + server.status;

        card.append(heading, game, status);
        serverList.appendChild(card);
    });
}
