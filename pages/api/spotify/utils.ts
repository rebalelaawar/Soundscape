export const seedSongs = async (token: string, trackIds: Array<SpotifyApi.TrackLinkObject>) => {
  const seed = trackIds.join(',');
  const seedFetch = `https://api.spotify.com/v1/recommendations?seed_tracks=${seed}&limit=1`;

  try {
      const response = await fetch(seedFetch, { headers: { Authorization: 'Bearer ' + token } });

      if (response.status === 200) {
          const data = await response.json();
          return data;
      } else if (response.status === 429) {
          const retryAfter = response.headers.get('Retry-After');
          console.log(`Rate limited. Retry after ${retryAfter} seconds.`);
          throw new Error(`Rate limited. Retry after ${retryAfter} seconds.`);
      } else {
          console.log(response.status);
          throw new Error(`Error: ${response.status}`);
      }
  } catch (error) {
      throw error;
  }
};