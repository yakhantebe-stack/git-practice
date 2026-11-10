// 5.10 - Filter activity by type
function filterEventsByType(list, type) {
    if (!type || type === "") {
        return list;
    }

    return list.filter(event =>
        event.type === type
    );
}