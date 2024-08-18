import { getRequest } from '@/api/api';

// Fetch the list of designs and generate paths
export async function generateStaticParams() {
    try {
        const response = await getRequest('/api/event/getalldesigns');
        const designs = await response.json();

        return designs.map(design => ({
            id: design._id.toString(), // Adjust this based on your data structure
        }));
    } catch (error) {
        console.error("Failed to fetch designs", error);
        return [];
    }
}
