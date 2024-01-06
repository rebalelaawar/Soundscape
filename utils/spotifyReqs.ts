export const getUserLikedSongs = async ( token : string, limit: number ) : Promise<Array<SpotifyApi.TrackLinkObject>> => {
    const req = await fetch(`https://api.spotify.com/v1/me/tracks?limit=${ limit }`, { headers: { Authorization: 'Bearer ' + token }})
    .then((r) => { if (r.status === 200) return r.json(); else throw r; });
    return req;
};

export const seedSongs = async ( token : string, trackIds : Array<SpotifyApi.TrackLinkObject> ) => {
    const seed = trackIds.join( );
    const seedFetch = `https://api.spotify.com/v1/recommendations?seed_tracks=${seed}`
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
  