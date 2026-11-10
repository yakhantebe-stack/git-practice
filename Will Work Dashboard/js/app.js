
// 5.01 - Main application file

document.addEventListener("DOMContentLoaded", function () {

    const players = window.CF_DATA.players;
    const events = window.events;

    const searchInput = document.getElementById("player-search");
    const serverFilter = document.getElementById("player-server");
    const eventFilter = document.getElementById("event-type");

    // Display servers
    renderServers(window.servers);

    // Display and filter players
    function updatePlayers() {
        let filtered = filterPlayersByName(
            players,
            searchInput.value
        );

        filtered = filterPlayersByServer(
            filtered,
            serverFilter.value
        );

        renderPlayers(filtered);
    }

    // Display activity
    renderEvents(events);

    // Initial player display
    updatePlayers();

    // Search and filter events
    searchInput.addEventListener("input", updatePlayers);
    serverFilter.addEventListener("change", updatePlayers);

    eventFilter.addEventListener("change", function () {
        const filtered = filterEventsByType(
            events,
            eventFilter.value
        );

        renderEvents(filtered);
    });

});
