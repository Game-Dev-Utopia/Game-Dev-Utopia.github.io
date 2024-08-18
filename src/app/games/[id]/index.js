import { getRequest } from '@/api/api';

// Fetch the list of games and generate paths
export async function generateStaticParams() {
    try {
        const response = await getRequest('/api/event/getallgames');
        const games = await response.json();

        return games.map(game => ({
            id: game._id.toString(), // Adjust this based on your data structure
        }));
    } catch (error) {
        console.error("Failed to fetch games", error);
        return [];
    }
}
