
// 5.07 - Search players by name

function filterPlayersByName(list, query) {
    // Remove spaces and make the search lowercase
    const search = query.trim().toLowerCase();

    // Return everyone if the search is blank
    if (search === "") {
        return list;
    }

    // Find players whose names contain the search
    return list.filter(player =>
        player.name.toLowerCase().includes(search)
    );
}
