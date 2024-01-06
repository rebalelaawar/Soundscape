export const seedSongs = async ( token : string, trackIds : Array<SpotifyApi.TrackLinkObject> ) => {
    const seed = trackIds.join( );
    const seedTrack = '4Dp3yrEK6dQzr9oM2UtZgR, 2XBF1f4RccbgX662FH9yhE';
    const seedFetch = `https://api.spotify.com/v1/recommendations?&seed_tracks=${seed}&limit=1`
    const response = await fetch( seedFetch, { headers: { Authorization: 'Bearer ' + token } });
    if( response.status === 200 ) {
        const data = await response.json( );
        return data ;
    } else {
        console.log("Error : Cannot seed tracks");
        console.log( response.statusText );
        return null;
    };
};
  