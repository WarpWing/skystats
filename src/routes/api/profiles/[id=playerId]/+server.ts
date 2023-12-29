import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';
import { FetchProfiles } from '$api/hypixel';

// GET /api/profiles/[id=playerId]
export const GET: RequestHandler = async ({ params }) => {
	const { id } = params;

	const data = await FetchProfiles(id);

	if (!data) {
		throw error(404, 'Player has no SkyBlock profiles.');
	}

	return data;
};