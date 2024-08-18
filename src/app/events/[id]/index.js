import { getRequest } from '@/api/api';

// Fetch the list of events and generate paths
export async function generateStaticParams() {
    try {
        const response = await getRequest('/api/event/getallevents');
        const events = await response.json();

        return events.map(event => ({
            id: event._id.toString(), // Adjust this based on your data structure
        }));
    } catch (error) {
        console.error("Failed to fetch events", error);
        return [];
    }
}
