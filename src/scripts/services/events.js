import { baseUrl, eventsQuantity } from "../variables.js";

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}${userName}/events`);
    const events = await response.json();
    return events.filter(element => element.type === 'CreateEvent' || element.type === 'PushEvent').slice(0, eventsQuantity);
};
export { getEvents };
