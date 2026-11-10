
// 5.09 - Show the activity list

function renderEvents(list) {
    const activityList = document.getElementById("activity-list");

    if (!activityList) return;

    activityList.replaceChildren();

    // Handle an empty activity list
    if (!list || list.length === 0) {
        const item = document.createElement("li");
        item.textContent = "No activity found.";
        activityList.appendChild(item);
        return;
    }

    // Display each activity event
    list.forEach(event => {
        const item = document.createElement("li");

        const time = document.createElement("span");
        time.textContent = event.time;

        const type = document.createElement("strong");
        type.textContent = event.type.toUpperCase();

        const message = document.createElement("span");
        message.textContent = event.message;

        item.append(time, type, message);
        activityList.appendChild(item);
    });
}
