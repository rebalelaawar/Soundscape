'use client'
import ClientOnly from './ClientOnly';
import s from './app.module.scss';
import { useState, useEffect } from 'react';
import Scene from '../components/Scene/Scene';
import BottomBar from '../components/BottomBar/BottomBar';


const samples = [
    {
        "_type": "userLikedSongs",
        "added_at": "2024-01-12T20:31:47Z",
        "track": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/6M4QfNzj433rXVijCYpKoB"
                        },
                        "href": "https://api.spotify.com/v1/artists/6M4QfNzj433rXVijCYpKoB",
                        "id": "6M4QfNzj433rXVijCYpKoB",
                        "name": "Aiden Music",
                        "type": "artist",
                        "uri": "spotify:artist:6M4QfNzj433rXVijCYpKoB"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5xhQRvvr6V7zoQn5MPNZfJ"
                        },
                        "href": "https://api.spotify.com/v1/artists/5xhQRvvr6V7zoQn5MPNZfJ",
                        "id": "5xhQRvvr6V7zoQn5MPNZfJ",
                        "name": "skyemane",
                        "type": "artist",
                        "uri": "spotify:artist:5xhQRvvr6V7zoQn5MPNZfJ"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/4YITUChmBAiOqEkfh82OYR"
                },
                "href": "https://api.spotify.com/v1/albums/4YITUChmBAiOqEkfh82OYR",
                "id": "4YITUChmBAiOqEkfh82OYR",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273d013baf8b24444ea9f85a12f",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02d013baf8b24444ea9f85a12f",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851d013baf8b24444ea9f85a12f",
                        "width": 64
                    }
                ],
                "name": "Smooth Operator (TikTok Remix)",
                "total_tracks": 1,
                "uri": "spotify:album:4YITUChmBAiOqEkfh82OYR"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/6M4QfNzj433rXVijCYpKoB"
                    },
                    "href": "https://api.spotify.com/v1/artists/6M4QfNzj433rXVijCYpKoB",
                    "id": "6M4QfNzj433rXVijCYpKoB",
                    "name": "Aiden Music",
                    "type": "artist",
                    "uri": "spotify:artist:6M4QfNzj433rXVijCYpKoB"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5xhQRvvr6V7zoQn5MPNZfJ"
                    },
                    "href": "https://api.spotify.com/v1/artists/5xhQRvvr6V7zoQn5MPNZfJ",
                    "id": "5xhQRvvr6V7zoQn5MPNZfJ",
                    "name": "skyemane",
                    "type": "artist",
                    "uri": "spotify:artist:5xhQRvvr6V7zoQn5MPNZfJ"
                }
            ],
            "disc_number": 1,
            "duration_ms": 225235,
            "explicit": false,
            "external_ids": {
                "isrc": "QZNFJ2301498"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/6zltRCgtPHajYgeZoEqcgv"
            },
            "href": "https://api.spotify.com/v1/tracks/6zltRCgtPHajYgeZoEqcgv",
            "id": "6zltRCgtPHajYgeZoEqcgv",
            "name": "Smooth Operator - TikTok Remix",
            "popularity": 60,
            "preview_url": "https://p.scdn.co/mp3-preview/18634c927578617753aa6d19e5da75a8da33563d?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 1,
            "uri": "spotify:track:6zltRCgtPHajYgeZoEqcgv"
        },
        "audioFeats": {
            "danceability": 0.863,
            "energy": 0.609,
            "key": 9,
            "loudness": -6.962,
            "mode": 0,
            "speechiness": 0.264,
            "acousticness": 0.0397,
            "instrumentalness": 0.000426,
            "liveness": 0.395,
            "valence": 0.395,
            "tempo": 129.985,
            "type": "audio_features",
            "id": "6zltRCgtPHajYgeZoEqcgv",
            "uri": "spotify:track:6zltRCgtPHajYgeZoEqcgv",
            "track_href": "https://api.spotify.com/v1/tracks/6zltRCgtPHajYgeZoEqcgv",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/6zltRCgtPHajYgeZoEqcgv",
            "duration_ms": 225236,
            "time_signature": 4
        }
    },
    {
        "_type": "userLikedSongs",
        "added_at": "2024-01-11T14:44:34Z",
        "track": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5E1yjMbMNS3ghJbXtEvQCe"
                        },
                        "href": "https://api.spotify.com/v1/artists/5E1yjMbMNS3ghJbXtEvQCe",
                        "id": "5E1yjMbMNS3ghJbXtEvQCe",
                        "name": "Pictureplane",
                        "type": "artist",
                        "uri": "spotify:artist:5E1yjMbMNS3ghJbXtEvQCe"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/4SUd4At9HwKeMLWTsiX0s2"
                },
                "href": "https://api.spotify.com/v1/albums/4SUd4At9HwKeMLWTsiX0s2",
                "id": "4SUd4At9HwKeMLWTsiX0s2",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273b0aed078180614180264e6eb",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02b0aed078180614180264e6eb",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851b0aed078180614180264e6eb",
                        "width": 64
                    }
                ],
                "name": "Degenerate",
                "total_tracks": 12,
                "uri": "spotify:album:4SUd4At9HwKeMLWTsiX0s2"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5E1yjMbMNS3ghJbXtEvQCe"
                    },
                    "href": "https://api.spotify.com/v1/artists/5E1yjMbMNS3ghJbXtEvQCe",
                    "id": "5E1yjMbMNS3ghJbXtEvQCe",
                    "name": "Pictureplane",
                    "type": "artist",
                    "uri": "spotify:artist:5E1yjMbMNS3ghJbXtEvQCe"
                }
            ],
            "disc_number": 1,
            "duration_ms": 170666,
            "explicit": false,
            "external_ids": {
                "isrc": "TCADW1803506"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/3aVOiW4txpilQ27jlz83Pv"
            },
            "href": "https://api.spotify.com/v1/tracks/3aVOiW4txpilQ27jlz83Pv",
            "id": "3aVOiW4txpilQ27jlz83Pv",
            "name": "Disasters of War (It's What You're Born For)",
            "popularity": 13,
            "preview_url": "https://p.scdn.co/mp3-preview/7deccb4c5c61ddb90d5f2d0c259efb5dc4b1ba78?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 4,
            "uri": "spotify:track:3aVOiW4txpilQ27jlz83Pv"
        },
        "audioFeats": {
            "danceability": 0.449,
            "energy": 0.809,
            "key": 1,
            "loudness": -6.201,
            "mode": 0,
            "speechiness": 0.0361,
            "acousticness": 0.000117,
            "instrumentalness": 0.547,
            "liveness": 0.0487,
            "valence": 0.285,
            "tempo": 89.955,
            "type": "audio_features",
            "id": "3aVOiW4txpilQ27jlz83Pv",
            "uri": "spotify:track:3aVOiW4txpilQ27jlz83Pv",
            "track_href": "https://api.spotify.com/v1/tracks/3aVOiW4txpilQ27jlz83Pv",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/3aVOiW4txpilQ27jlz83Pv",
            "duration_ms": 170667,
            "time_signature": 4
        }
    },
    {
        "_type": "userLikedSongs",
        "added_at": "2024-01-08T22:09:52Z",
        "track": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/49gaZqfow2v8EEQmjGyEIw"
                        },
                        "href": "https://api.spotify.com/v1/artists/49gaZqfow2v8EEQmjGyEIw",
                        "id": "49gaZqfow2v8EEQmjGyEIw",
                        "name": "Todd Terje",
                        "type": "artist",
                        "uri": "spotify:artist:49gaZqfow2v8EEQmjGyEIw"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/07HuAQQEbH1ShP4b9SsNwp"
                },
                "href": "https://api.spotify.com/v1/albums/07HuAQQEbH1ShP4b9SsNwp",
                "id": "07HuAQQEbH1ShP4b9SsNwp",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273c1fcf7dbd3f2063e265dca99",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02c1fcf7dbd3f2063e265dca99",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851c1fcf7dbd3f2063e265dca99",
                        "width": 64
                    }
                ],
                "name": "It's the Arps",
                "total_tracks": 5,
                "uri": "spotify:album:07HuAQQEbH1ShP4b9SsNwp"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/49gaZqfow2v8EEQmjGyEIw"
                    },
                    "href": "https://api.spotify.com/v1/artists/49gaZqfow2v8EEQmjGyEIw",
                    "id": "49gaZqfow2v8EEQmjGyEIw",
                    "name": "Todd Terje",
                    "type": "artist",
                    "uri": "spotify:artist:49gaZqfow2v8EEQmjGyEIw"
                }
            ],
            "disc_number": 1,
            "duration_ms": 400751,
            "explicit": false,
            "external_ids": {
                "isrc": "NOSTS1219010"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/1NHd4UVxT5d5EGYzlDq17T"
            },
            "href": "https://api.spotify.com/v1/tracks/1NHd4UVxT5d5EGYzlDq17T",
            "id": "1NHd4UVxT5d5EGYzlDq17T",
            "name": "Inspector Norse",
            "popularity": 56,
            "preview_url": "https://p.scdn.co/mp3-preview/ecc5f6cd3f74021f6ddb3c03a82e20b5cd81021a?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 1,
            "uri": "spotify:track:1NHd4UVxT5d5EGYzlDq17T"
        },
        "audioFeats": {
            "danceability": 0.912,
            "energy": 0.782,
            "key": 7,
            "loudness": -7.018,
            "mode": 0,
            "speechiness": 0.0445,
            "acousticness": 0.0741,
            "instrumentalness": 0.763,
            "liveness": 0.348,
            "valence": 0.89,
            "tempo": 119.979,
            "type": "audio_features",
            "id": "1NHd4UVxT5d5EGYzlDq17T",
            "uri": "spotify:track:1NHd4UVxT5d5EGYzlDq17T",
            "track_href": "https://api.spotify.com/v1/tracks/1NHd4UVxT5d5EGYzlDq17T",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/1NHd4UVxT5d5EGYzlDq17T",
            "duration_ms": 400751,
            "time_signature": 4
        }
    },
    {
        "_type": "userLikedSongs",
        "added_at": "2024-01-08T22:09:48Z",
        "track": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0AfNNw1LS2i9KW4icd7inD"
                        },
                        "href": "https://api.spotify.com/v1/artists/0AfNNw1LS2i9KW4icd7inD",
                        "id": "0AfNNw1LS2i9KW4icd7inD",
                        "name": "Fred Falke",
                        "type": "artist",
                        "uri": "spotify:artist:0AfNNw1LS2i9KW4icd7inD"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/4zgA8bqaYJLSrMOn3MkxyU"
                },
                "href": "https://api.spotify.com/v1/albums/4zgA8bqaYJLSrMOn3MkxyU",
                "id": "4zgA8bqaYJLSrMOn3MkxyU",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273c4b4b0124f5fc0ff1d682153",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02c4b4b0124f5fc0ff1d682153",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851c4b4b0124f5fc0ff1d682153",
                        "width": 64
                    }
                ],
                "name": "Part IV",
                "total_tracks": 12,
                "uri": "spotify:album:4zgA8bqaYJLSrMOn3MkxyU"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0AfNNw1LS2i9KW4icd7inD"
                    },
                    "href": "https://api.spotify.com/v1/artists/0AfNNw1LS2i9KW4icd7inD",
                    "id": "0AfNNw1LS2i9KW4icd7inD",
                    "name": "Fred Falke",
                    "type": "artist",
                    "uri": "spotify:artist:0AfNNw1LS2i9KW4icd7inD"
                }
            ],
            "disc_number": 1,
            "duration_ms": 384423,
            "explicit": false,
            "external_ids": {
                "isrc": "DEW411310112"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/332axSkCygFiO7rlQ9TYiC"
            },
            "href": "https://api.spotify.com/v1/tracks/332axSkCygFiO7rlQ9TYiC",
            "id": "332axSkCygFiO7rlQ9TYiC",
            "name": "808 PM At The Beach - Original Mix",
            "popularity": 37,
            "preview_url": "https://p.scdn.co/mp3-preview/63e26f154d5f407c33c4c21e18735d0fdc56d175?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 1,
            "uri": "spotify:track:332axSkCygFiO7rlQ9TYiC"
        },
        "audioFeats": {
            "danceability": 0.688,
            "energy": 0.87,
            "key": 1,
            "loudness": -9.543,
            "mode": 1,
            "speechiness": 0.0665,
            "acousticness": 0.093,
            "instrumentalness": 0.831,
            "liveness": 0.426,
            "valence": 0.355,
            "tempo": 125.988,
            "type": "audio_features",
            "id": "332axSkCygFiO7rlQ9TYiC",
            "uri": "spotify:track:332axSkCygFiO7rlQ9TYiC",
            "track_href": "https://api.spotify.com/v1/tracks/332axSkCygFiO7rlQ9TYiC",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/332axSkCygFiO7rlQ9TYiC",
            "duration_ms": 384424,
            "time_signature": 4
        }
    },
    {
        "_type": "userLikedSongs",
        "added_at": "2024-01-08T22:09:08Z",
        "track": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5OazACOH1YtPTkxiqTtILW"
                        },
                        "href": "https://api.spotify.com/v1/artists/5OazACOH1YtPTkxiqTtILW",
                        "id": "5OazACOH1YtPTkxiqTtILW",
                        "name": "Josh Burnett (UK)",
                        "type": "artist",
                        "uri": "spotify:artist:5OazACOH1YtPTkxiqTtILW"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0vhim3LiEF8Ahlx4RNlTJz"
                        },
                        "href": "https://api.spotify.com/v1/artists/0vhim3LiEF8Ahlx4RNlTJz",
                        "id": "0vhim3LiEF8Ahlx4RNlTJz",
                        "name": "ACT ON",
                        "type": "artist",
                        "uri": "spotify:artist:0vhim3LiEF8Ahlx4RNlTJz"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/7I6qpO1jTxMunIMw3zghgr"
                },
                "href": "https://api.spotify.com/v1/albums/7I6qpO1jTxMunIMw3zghgr",
                "id": "7I6qpO1jTxMunIMw3zghgr",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b27379f1175a27941485e5788874",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e0279f1175a27941485e5788874",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d0000485179f1175a27941485e5788874",
                        "width": 64
                    }
                ],
                "name": "Take You On",
                "total_tracks": 1,
                "uri": "spotify:album:7I6qpO1jTxMunIMw3zghgr"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5OazACOH1YtPTkxiqTtILW"
                    },
                    "href": "https://api.spotify.com/v1/artists/5OazACOH1YtPTkxiqTtILW",
                    "id": "5OazACOH1YtPTkxiqTtILW",
                    "name": "Josh Burnett (UK)",
                    "type": "artist",
                    "uri": "spotify:artist:5OazACOH1YtPTkxiqTtILW"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0vhim3LiEF8Ahlx4RNlTJz"
                    },
                    "href": "https://api.spotify.com/v1/artists/0vhim3LiEF8Ahlx4RNlTJz",
                    "id": "0vhim3LiEF8Ahlx4RNlTJz",
                    "name": "ACT ON",
                    "type": "artist",
                    "uri": "spotify:artist:0vhim3LiEF8Ahlx4RNlTJz"
                }
            ],
            "disc_number": 1,
            "duration_ms": 165581,
            "explicit": false,
            "external_ids": {
                "isrc": "QMDA62397547"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/07VI6sdD2s7hzPEezIMtiT"
            },
            "href": "https://api.spotify.com/v1/tracks/07VI6sdD2s7hzPEezIMtiT",
            "id": "07VI6sdD2s7hzPEezIMtiT",
            "name": "Take You On",
            "popularity": 41,
            "preview_url": "https://p.scdn.co/mp3-preview/e1bd0cfb752d6656ac7eadd7e20f6987ac7806b1?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 1,
            "uri": "spotify:track:07VI6sdD2s7hzPEezIMtiT"
        },
        "audioFeats": {
            "danceability": 0.723,
            "energy": 0.715,
            "key": 7,
            "loudness": -9.498,
            "mode": 1,
            "speechiness": 0.181,
            "acousticness": 0.198,
            "instrumentalness": 0.00299,
            "liveness": 0.146,
            "valence": 0.396,
            "tempo": 128.94,
            "type": "audio_features",
            "id": "07VI6sdD2s7hzPEezIMtiT",
            "uri": "spotify:track:07VI6sdD2s7hzPEezIMtiT",
            "track_href": "https://api.spotify.com/v1/tracks/07VI6sdD2s7hzPEezIMtiT",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/07VI6sdD2s7hzPEezIMtiT",
            "duration_ms": 165589,
            "time_signature": 4
        }
    },
    {
        "_type": "userLikedSongs",
        "added_at": "2024-01-08T22:08:37Z",
        "track": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2o5jDhtHVPhrJdv3cEQ99Z"
                        },
                        "href": "https://api.spotify.com/v1/artists/2o5jDhtHVPhrJdv3cEQ99Z",
                        "id": "2o5jDhtHVPhrJdv3cEQ99Z",
                        "name": "Tiësto",
                        "type": "artist",
                        "uri": "spotify:artist:2o5jDhtHVPhrJdv3cEQ99Z"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/1Pl9ZGXwayXPg5qRVpYo74"
                },
                "href": "https://api.spotify.com/v1/albums/1Pl9ZGXwayXPg5qRVpYo74",
                "id": "1Pl9ZGXwayXPg5qRVpYo74",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273cf8c47967e5c6bbc7dca5abb",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02cf8c47967e5c6bbc7dca5abb",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851cf8c47967e5c6bbc7dca5abb",
                        "width": 64
                    }
                ],
                "name": "DRIVE",
                "total_tracks": 12,
                "uri": "spotify:album:1Pl9ZGXwayXPg5qRVpYo74"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2o5jDhtHVPhrJdv3cEQ99Z"
                    },
                    "href": "https://api.spotify.com/v1/artists/2o5jDhtHVPhrJdv3cEQ99Z",
                    "id": "2o5jDhtHVPhrJdv3cEQ99Z",
                    "name": "Tiësto",
                    "type": "artist",
                    "uri": "spotify:artist:2o5jDhtHVPhrJdv3cEQ99Z"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1yxSLGMDHlW21z4YXirZDS"
                    },
                    "href": "https://api.spotify.com/v1/artists/1yxSLGMDHlW21z4YXirZDS",
                    "id": "1yxSLGMDHlW21z4YXirZDS",
                    "name": "Black Eyed Peas",
                    "type": "artist",
                    "uri": "spotify:artist:1yxSLGMDHlW21z4YXirZDS"
                }
            ],
            "disc_number": 1,
            "duration_ms": 158571,
            "explicit": false,
            "external_ids": {
                "isrc": "CYA112001121"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/4PNKy9P3xrzqMwVzRjxBKt"
            },
            "href": "https://api.spotify.com/v1/tracks/4PNKy9P3xrzqMwVzRjxBKt",
            "id": "4PNKy9P3xrzqMwVzRjxBKt",
            "name": "Pump It Louder",
            "popularity": 67,
            "preview_url": "https://p.scdn.co/mp3-preview/518043558ca2da3e1bf4dd105e22a797a85309de?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 7,
            "uri": "spotify:track:4PNKy9P3xrzqMwVzRjxBKt"
        },
        "audioFeats": {
            "danceability": 0.66,
            "energy": 0.942,
            "key": 4,
            "loudness": -2.273,
            "mode": 1,
            "speechiness": 0.185,
            "acousticness": 0.00789,
            "instrumentalness": 0.0000176,
            "liveness": 0.834,
            "valence": 0.543,
            "tempo": 126.017,
            "type": "audio_features",
            "id": "4PNKy9P3xrzqMwVzRjxBKt",
            "uri": "spotify:track:4PNKy9P3xrzqMwVzRjxBKt",
            "track_href": "https://api.spotify.com/v1/tracks/4PNKy9P3xrzqMwVzRjxBKt",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/4PNKy9P3xrzqMwVzRjxBKt",
            "duration_ms": 158571,
            "time_signature": 4
        }
    },
    {
        "_type": "userLikedSongs",
        "added_at": "2024-01-08T21:43:36Z",
        "track": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4q0N3EI67tVnAeeaXbNQIj"
                        },
                        "href": "https://api.spotify.com/v1/artists/4q0N3EI67tVnAeeaXbNQIj",
                        "id": "4q0N3EI67tVnAeeaXbNQIj",
                        "name": "J. Worra",
                        "type": "artist",
                        "uri": "spotify:artist:4q0N3EI67tVnAeeaXbNQIj"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5v3YOQbNImkHr0cj7biBWW"
                        },
                        "href": "https://api.spotify.com/v1/artists/5v3YOQbNImkHr0cj7biBWW",
                        "id": "5v3YOQbNImkHr0cj7biBWW",
                        "name": "Taylor Moody",
                        "type": "artist",
                        "uri": "spotify:artist:5v3YOQbNImkHr0cj7biBWW"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/1HUEA3Mdj0BqPrQZ49zOTm"
                },
                "href": "https://api.spotify.com/v1/albums/1HUEA3Mdj0BqPrQZ49zOTm",
                "id": "1HUEA3Mdj0BqPrQZ49zOTm",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273d0bf287858833d14b1e24b8e",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02d0bf287858833d14b1e24b8e",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851d0bf287858833d14b1e24b8e",
                        "width": 64
                    }
                ],
                "name": "Lose My Mind (feat. Taylor Moody)",
                "total_tracks": 2,
                "uri": "spotify:album:1HUEA3Mdj0BqPrQZ49zOTm"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4q0N3EI67tVnAeeaXbNQIj"
                    },
                    "href": "https://api.spotify.com/v1/artists/4q0N3EI67tVnAeeaXbNQIj",
                    "id": "4q0N3EI67tVnAeeaXbNQIj",
                    "name": "J. Worra",
                    "type": "artist",
                    "uri": "spotify:artist:4q0N3EI67tVnAeeaXbNQIj"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5v3YOQbNImkHr0cj7biBWW"
                    },
                    "href": "https://api.spotify.com/v1/artists/5v3YOQbNImkHr0cj7biBWW",
                    "id": "5v3YOQbNImkHr0cj7biBWW",
                    "name": "Taylor Moody",
                    "type": "artist",
                    "uri": "spotify:artist:5v3YOQbNImkHr0cj7biBWW"
                }
            ],
            "disc_number": 1,
            "duration_ms": 196075,
            "explicit": false,
            "external_ids": {
                "isrc": "GBCPZ2220696"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/4lYCwQD1GjKmk7MpKSd5d9"
            },
            "href": "https://api.spotify.com/v1/tracks/4lYCwQD1GjKmk7MpKSd5d9",
            "id": "4lYCwQD1GjKmk7MpKSd5d9",
            "name": "Lose My Mind (feat. Taylor Moody)",
            "popularity": 49,
            "preview_url": "https://p.scdn.co/mp3-preview/9c5f4386bd03a0da3fdd57ff8f2365f6934f3275?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 1,
            "uri": "spotify:track:4lYCwQD1GjKmk7MpKSd5d9"
        },
        "audioFeats": {
            "danceability": 0.749,
            "energy": 0.892,
            "key": 10,
            "loudness": -6.074,
            "mode": 0,
            "speechiness": 0.0375,
            "acousticness": 0.247,
            "instrumentalness": 0.69,
            "liveness": 0.0257,
            "valence": 0.907,
            "tempo": 124.044,
            "type": "audio_features",
            "id": "4lYCwQD1GjKmk7MpKSd5d9",
            "uri": "spotify:track:4lYCwQD1GjKmk7MpKSd5d9",
            "track_href": "https://api.spotify.com/v1/tracks/4lYCwQD1GjKmk7MpKSd5d9",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/4lYCwQD1GjKmk7MpKSd5d9",
            "duration_ms": 196075,
            "time_signature": 4
        }
    },
    {
        "_type": "userLikedSongs",
        "added_at": "2024-01-08T21:43:15Z",
        "track": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/37U9sPqTZMd7AKJCWgcvkt"
                        },
                        "href": "https://api.spotify.com/v1/artists/37U9sPqTZMd7AKJCWgcvkt",
                        "id": "37U9sPqTZMd7AKJCWgcvkt",
                        "name": "Pryda",
                        "type": "artist",
                        "uri": "spotify:artist:37U9sPqTZMd7AKJCWgcvkt"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/2MSprf6584peQvdVMWAEMt"
                },
                "href": "https://api.spotify.com/v1/albums/2MSprf6584peQvdVMWAEMt",
                "id": "2MSprf6584peQvdVMWAEMt",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b27390f394b8332c01a9c386a34b",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e0290f394b8332c01a9c386a34b",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d0000485190f394b8332c01a9c386a34b",
                        "width": 64
                    }
                ],
                "name": "PRYDA 15 VOL I",
                "total_tracks": 6,
                "uri": "spotify:album:2MSprf6584peQvdVMWAEMt"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/37U9sPqTZMd7AKJCWgcvkt"
                    },
                    "href": "https://api.spotify.com/v1/artists/37U9sPqTZMd7AKJCWgcvkt",
                    "id": "37U9sPqTZMd7AKJCWgcvkt",
                    "name": "Pryda",
                    "type": "artist",
                    "uri": "spotify:artist:37U9sPqTZMd7AKJCWgcvkt"
                }
            ],
            "disc_number": 1,
            "duration_ms": 503083,
            "explicit": false,
            "external_ids": {
                "isrc": "GB6CM1900146"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/4MxV7MwM5eUBwRW9PCcabQ"
            },
            "href": "https://api.spotify.com/v1/tracks/4MxV7MwM5eUBwRW9PCcabQ",
            "id": "4MxV7MwM5eUBwRW9PCcabQ",
            "name": "Warrior",
            "popularity": 25,
            "preview_url": "https://p.scdn.co/mp3-preview/008b5b319da608951aaed5c4e21acfe33efe219a?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 3,
            "uri": "spotify:track:4MxV7MwM5eUBwRW9PCcabQ"
        },
        "audioFeats": {
            "danceability": 0.718,
            "energy": 0.596,
            "key": 10,
            "loudness": -8.641,
            "mode": 0,
            "speechiness": 0.0444,
            "acousticness": 0.0811,
            "instrumentalness": 0.836,
            "liveness": 0.669,
            "valence": 0.0391,
            "tempo": 125.996,
            "type": "audio_features",
            "id": "4MxV7MwM5eUBwRW9PCcabQ",
            "uri": "spotify:track:4MxV7MwM5eUBwRW9PCcabQ",
            "track_href": "https://api.spotify.com/v1/tracks/4MxV7MwM5eUBwRW9PCcabQ",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/4MxV7MwM5eUBwRW9PCcabQ",
            "duration_ms": 503084,
            "time_signature": 4
        }
    },
    {
        "_type": "userLikedSongs",
        "added_at": "2024-01-08T21:43:04Z",
        "track": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0PszchiiynrfCAwjdHdN5r"
                        },
                        "href": "https://api.spotify.com/v1/artists/0PszchiiynrfCAwjdHdN5r",
                        "id": "0PszchiiynrfCAwjdHdN5r",
                        "name": "Wilee",
                        "type": "artist",
                        "uri": "spotify:artist:0PszchiiynrfCAwjdHdN5r"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/1nOP12IkFkKgSxJZi16hgC"
                },
                "href": "https://api.spotify.com/v1/albums/1nOP12IkFkKgSxJZi16hgC",
                "id": "1nOP12IkFkKgSxJZi16hgC",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273698ff65d67dabb964e33788d",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02698ff65d67dabb964e33788d",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851698ff65d67dabb964e33788d",
                        "width": 64
                    }
                ],
                "name": "Night Drive",
                "total_tracks": 1,
                "uri": "spotify:album:1nOP12IkFkKgSxJZi16hgC"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0PszchiiynrfCAwjdHdN5r"
                    },
                    "href": "https://api.spotify.com/v1/artists/0PszchiiynrfCAwjdHdN5r",
                    "id": "0PszchiiynrfCAwjdHdN5r",
                    "name": "Wilee",
                    "type": "artist",
                    "uri": "spotify:artist:0PszchiiynrfCAwjdHdN5r"
                }
            ],
            "disc_number": 1,
            "duration_ms": 124312,
            "explicit": false,
            "external_ids": {
                "isrc": "US3DF2218074"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/4jrXcjE0rKXu4svwQ7IYzD"
            },
            "href": "https://api.spotify.com/v1/tracks/4jrXcjE0rKXu4svwQ7IYzD",
            "id": "4jrXcjE0rKXu4svwQ7IYzD",
            "name": "Night Drive",
            "popularity": 73,
            "preview_url": "https://p.scdn.co/mp3-preview/eccbc4ed3c4102e4fcb54cfa7145037e434d442b?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 1,
            "uri": "spotify:track:4jrXcjE0rKXu4svwQ7IYzD"
        },
        "audioFeats": {
            "danceability": 0.672,
            "energy": 0.99,
            "key": 0,
            "loudness": -3.811,
            "mode": 1,
            "speechiness": 0.0392,
            "acousticness": 0.137,
            "instrumentalness": 0.851,
            "liveness": 0.103,
            "valence": 0.15,
            "tempo": 119.957,
            "type": "audio_features",
            "id": "4jrXcjE0rKXu4svwQ7IYzD",
            "uri": "spotify:track:4jrXcjE0rKXu4svwQ7IYzD",
            "track_href": "https://api.spotify.com/v1/tracks/4jrXcjE0rKXu4svwQ7IYzD",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/4jrXcjE0rKXu4svwQ7IYzD",
            "duration_ms": 124312,
            "time_signature": 4
        }
    },
    {
        "_type": "userLikedSongs",
        "added_at": "2024-01-08T21:42:52Z",
        "track": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2bcrMsFlF632EQ6VZERWFu"
                        },
                        "href": "https://api.spotify.com/v1/artists/2bcrMsFlF632EQ6VZERWFu",
                        "id": "2bcrMsFlF632EQ6VZERWFu",
                        "name": "The Bravery",
                        "type": "artist",
                        "uri": "spotify:artist:2bcrMsFlF632EQ6VZERWFu"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/3GNa5HhqzUlonZoLGYC8vb"
                },
                "href": "https://api.spotify.com/v1/albums/3GNa5HhqzUlonZoLGYC8vb",
                "id": "3GNa5HhqzUlonZoLGYC8vb",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2732ccfbfadf7611c50d7870d0f",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e022ccfbfadf7611c50d7870d0f",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048512ccfbfadf7611c50d7870d0f",
                        "width": 64
                    }
                ],
                "name": "The Bravery",
                "total_tracks": 12,
                "uri": "spotify:album:3GNa5HhqzUlonZoLGYC8vb"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2bcrMsFlF632EQ6VZERWFu"
                    },
                    "href": "https://api.spotify.com/v1/artists/2bcrMsFlF632EQ6VZERWFu",
                    "id": "2bcrMsFlF632EQ6VZERWFu",
                    "name": "The Bravery",
                    "type": "artist",
                    "uri": "spotify:artist:2bcrMsFlF632EQ6VZERWFu"
                }
            ],
            "disc_number": 1,
            "duration_ms": 219706,
            "explicit": false,
            "external_ids": {
                "isrc": "USIR20500157"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/7DoMGZLVzga3vhyZlb0hBX"
            },
            "href": "https://api.spotify.com/v1/tracks/7DoMGZLVzga3vhyZlb0hBX",
            "id": "7DoMGZLVzga3vhyZlb0hBX",
            "name": "An Honest Mistake",
            "popularity": 57,
            "preview_url": "https://p.scdn.co/mp3-preview/8b082999e06c3f2569bda12aca2503394606e9ab?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 1,
            "uri": "spotify:track:7DoMGZLVzga3vhyZlb0hBX"
        },
        "audioFeats": {
            "danceability": 0.465,
            "energy": 0.883,
            "key": 2,
            "loudness": -4.259,
            "mode": 0,
            "speechiness": 0.0297,
            "acousticness": 0.00000329,
            "instrumentalness": 0.506,
            "liveness": 0.101,
            "valence": 0.644,
            "tempo": 140.047,
            "type": "audio_features",
            "id": "7DoMGZLVzga3vhyZlb0hBX",
            "uri": "spotify:track:7DoMGZLVzga3vhyZlb0hBX",
            "track_href": "https://api.spotify.com/v1/tracks/7DoMGZLVzga3vhyZlb0hBX",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/7DoMGZLVzga3vhyZlb0hBX",
            "duration_ms": 219707,
            "time_signature": 4
        }
    },
    {
        "_type": "userLikedSongs",
        "added_at": "2024-01-08T21:42:34Z",
        "track": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5P5i4EeZfrKrcRGHRTqJr0"
                        },
                        "href": "https://api.spotify.com/v1/artists/5P5i4EeZfrKrcRGHRTqJr0",
                        "id": "5P5i4EeZfrKrcRGHRTqJr0",
                        "name": "Kris Menace",
                        "type": "artist",
                        "uri": "spotify:artist:5P5i4EeZfrKrcRGHRTqJr0"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/5LxIYl1H7lhD6DTHqXqW2n"
                },
                "href": "https://api.spotify.com/v1/albums/5LxIYl1H7lhD6DTHqXqW2n",
                "id": "5LxIYl1H7lhD6DTHqXqW2n",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273804cbf0be2ab008cf462fa78",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02804cbf0be2ab008cf462fa78",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851804cbf0be2ab008cf462fa78",
                        "width": 64
                    }
                ],
                "name": "Idiosyncrasies",
                "total_tracks": 30,
                "uri": "spotify:album:5LxIYl1H7lhD6DTHqXqW2n"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3sa5sqxJqYjDZhGxmo4Ko5"
                    },
                    "href": "https://api.spotify.com/v1/artists/3sa5sqxJqYjDZhGxmo4Ko5",
                    "id": "3sa5sqxJqYjDZhGxmo4Ko5",
                    "name": "Lifelike",
                    "type": "artist",
                    "uri": "spotify:artist:3sa5sqxJqYjDZhGxmo4Ko5"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5P5i4EeZfrKrcRGHRTqJr0"
                    },
                    "href": "https://api.spotify.com/v1/artists/5P5i4EeZfrKrcRGHRTqJr0",
                    "id": "5P5i4EeZfrKrcRGHRTqJr0",
                    "name": "Kris Menace",
                    "type": "artist",
                    "uri": "spotify:artist:5P5i4EeZfrKrcRGHRTqJr0"
                }
            ],
            "disc_number": 1,
            "duration_ms": 561306,
            "explicit": false,
            "external_ids": {
                "isrc": "GBDLM0900002"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/61RlktJeYy38pu1vY70pgU"
            },
            "href": "https://api.spotify.com/v1/tracks/61RlktJeYy38pu1vY70pgU",
            "id": "61RlktJeYy38pu1vY70pgU",
            "name": "Discopolis - Original Mix",
            "popularity": 37,
            "preview_url": "https://p.scdn.co/mp3-preview/402ab1c63e782d51cae08f8c1a90876d0e01eb0c?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 1,
            "uri": "spotify:track:61RlktJeYy38pu1vY70pgU"
        },
        "audioFeats": {
            "danceability": 0.639,
            "energy": 0.805,
            "key": 1,
            "loudness": -5.221,
            "mode": 0,
            "speechiness": 0.0459,
            "acousticness": 0.026,
            "instrumentalness": 0.798,
            "liveness": 0.0587,
            "valence": 0.73,
            "tempo": 119.986,
            "type": "audio_features",
            "id": "61RlktJeYy38pu1vY70pgU",
            "uri": "spotify:track:61RlktJeYy38pu1vY70pgU",
            "track_href": "https://api.spotify.com/v1/tracks/61RlktJeYy38pu1vY70pgU",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/61RlktJeYy38pu1vY70pgU",
            "duration_ms": 561307,
            "time_signature": 4
        }
    },
    {
        "_type": "userLikedSongs",
        "added_at": "2024-01-07T23:47:56Z",
        "track": {
            "album": {
                "album_type": "compilation",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3h11MHQeCrcsUgRRijI1zL"
                        },
                        "href": "https://api.spotify.com/v1/artists/3h11MHQeCrcsUgRRijI1zL",
                        "id": "3h11MHQeCrcsUgRRijI1zL",
                        "name": "Mark Knight",
                        "type": "artist",
                        "uri": "spotify:artist:3h11MHQeCrcsUgRRijI1zL"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/63RM7A9bT2GwUF3opNeaI7"
                },
                "href": "https://api.spotify.com/v1/albums/63RM7A9bT2GwUF3opNeaI7",
                "id": "63RM7A9bT2GwUF3opNeaI7",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273ecb127b9eae019b3c9e94795",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02ecb127b9eae019b3c9e94795",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851ecb127b9eae019b3c9e94795",
                        "width": 64
                    }
                ],
                "name": "Toolroom Radio EP700",
                "total_tracks": 50,
                "uri": "spotify:album:63RM7A9bT2GwUF3opNeaI7"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5T4UKHhr4HGIC0VzdZQtAE"
                    },
                    "href": "https://api.spotify.com/v1/artists/5T4UKHhr4HGIC0VzdZQtAE",
                    "id": "5T4UKHhr4HGIC0VzdZQtAE",
                    "name": "Faithless",
                    "type": "artist",
                    "uri": "spotify:artist:5T4UKHhr4HGIC0VzdZQtAE"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3h11MHQeCrcsUgRRijI1zL"
                    },
                    "href": "https://api.spotify.com/v1/artists/3h11MHQeCrcsUgRRijI1zL",
                    "id": "3h11MHQeCrcsUgRRijI1zL",
                    "name": "Mark Knight",
                    "type": "artist",
                    "uri": "spotify:artist:3h11MHQeCrcsUgRRijI1zL"
                }
            ],
            "disc_number": 1,
            "duration_ms": 322601,
            "explicit": false,
            "external_ids": {
                "isrc": "GBJAJ2301114"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/1sOXmtmaaF58aXf2nZ4G9r"
            },
            "href": "https://api.spotify.com/v1/tracks/1sOXmtmaaF58aXf2nZ4G9r",
            "id": "1sOXmtmaaF58aXf2nZ4G9r",
            "name": "Music Matters (feat. Cass Fox) - Mark Knight Remix - TR700",
            "popularity": 17,
            "preview_url": "https://p.scdn.co/mp3-preview/59ee26968a26b5299c54b23f662e7d8f3b491b1a?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 39,
            "uri": "spotify:track:1sOXmtmaaF58aXf2nZ4G9r"
        },
        "audioFeats": {
            "danceability": 0.7,
            "energy": 0.741,
            "key": 2,
            "loudness": -8.528,
            "mode": 1,
            "speechiness": 0.0584,
            "acousticness": 0.000651,
            "instrumentalness": 0.619,
            "liveness": 0.371,
            "valence": 0.103,
            "tempo": 127.984,
            "type": "audio_features",
            "id": "1sOXmtmaaF58aXf2nZ4G9r",
            "uri": "spotify:track:1sOXmtmaaF58aXf2nZ4G9r",
            "track_href": "https://api.spotify.com/v1/tracks/1sOXmtmaaF58aXf2nZ4G9r",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/1sOXmtmaaF58aXf2nZ4G9r",
            "duration_ms": 322602,
            "time_signature": 4
        }
    },
    {
        "_type": "userLikedSongs",
        "added_at": "2024-01-07T02:25:37Z",
        "track": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5M0HAqHXyOh3q7WQnvce8o"
                        },
                        "href": "https://api.spotify.com/v1/artists/5M0HAqHXyOh3q7WQnvce8o",
                        "id": "5M0HAqHXyOh3q7WQnvce8o",
                        "name": "Part Time",
                        "type": "artist",
                        "uri": "spotify:artist:5M0HAqHXyOh3q7WQnvce8o"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/6A4z4K3qR8IOkaclwvT8gU"
                },
                "href": "https://api.spotify.com/v1/albums/6A4z4K3qR8IOkaclwvT8gU",
                "id": "6A4z4K3qR8IOkaclwvT8gU",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b27381173f55a729cd649b0c15ed",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e0281173f55a729cd649b0c15ed",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d0000485181173f55a729cd649b0c15ed",
                        "width": 64
                    }
                ],
                "name": "What Would You Say?",
                "total_tracks": 11,
                "uri": "spotify:album:6A4z4K3qR8IOkaclwvT8gU"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5M0HAqHXyOh3q7WQnvce8o"
                    },
                    "href": "https://api.spotify.com/v1/artists/5M0HAqHXyOh3q7WQnvce8o",
                    "id": "5M0HAqHXyOh3q7WQnvce8o",
                    "name": "Part Time",
                    "type": "artist",
                    "uri": "spotify:artist:5M0HAqHXyOh3q7WQnvce8o"
                }
            ],
            "disc_number": 1,
            "duration_ms": 240240,
            "explicit": false,
            "external_ids": {
                "isrc": "GX53U2027164"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/4QP0ZewH0w5z4iTlaU8hDD"
            },
            "href": "https://api.spotify.com/v1/tracks/4QP0ZewH0w5z4iTlaU8hDD",
            "id": "4QP0ZewH0w5z4iTlaU8hDD",
            "name": "Living in Pretend",
            "popularity": 30,
            "preview_url": "https://p.scdn.co/mp3-preview/80f9586682f99ac93053e02844e1b1b470169046?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 3,
            "uri": "spotify:track:4QP0ZewH0w5z4iTlaU8hDD"
        },
        "audioFeats": {
            "danceability": 0.539,
            "energy": 0.864,
            "key": 5,
            "loudness": -7.875,
            "mode": 0,
            "speechiness": 0.0291,
            "acousticness": 0.00187,
            "instrumentalness": 0.794,
            "liveness": 0.248,
            "valence": 0.701,
            "tempo": 84.899,
            "type": "audio_features",
            "id": "4QP0ZewH0w5z4iTlaU8hDD",
            "uri": "spotify:track:4QP0ZewH0w5z4iTlaU8hDD",
            "track_href": "https://api.spotify.com/v1/tracks/4QP0ZewH0w5z4iTlaU8hDD",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/4QP0ZewH0w5z4iTlaU8hDD",
            "duration_ms": 240240,
            "time_signature": 4
        }
    },
    {
        "_type": "userLikedSongs",
        "added_at": "2024-01-06T05:48:06Z",
        "track": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5lVNSw2GPci8kebrAQpZqU"
                        },
                        "href": "https://api.spotify.com/v1/artists/5lVNSw2GPci8kebrAQpZqU",
                        "id": "5lVNSw2GPci8kebrAQpZqU",
                        "name": "Eli Brown",
                        "type": "artist",
                        "uri": "spotify:artist:5lVNSw2GPci8kebrAQpZqU"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/4igCnwKUaJNezJWHlWv8Bs"
                },
                "href": "https://api.spotify.com/v1/albums/4igCnwKUaJNezJWHlWv8Bs",
                "id": "4igCnwKUaJNezJWHlWv8Bs",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273526df18094b5d7f51d5aa88b",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02526df18094b5d7f51d5aa88b",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851526df18094b5d7f51d5aa88b",
                        "width": 64
                    }
                ],
                "name": "Diamonds On My Mind",
                "total_tracks": 1,
                "uri": "spotify:album:4igCnwKUaJNezJWHlWv8Bs"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5lVNSw2GPci8kebrAQpZqU"
                    },
                    "href": "https://api.spotify.com/v1/artists/5lVNSw2GPci8kebrAQpZqU",
                    "id": "5lVNSw2GPci8kebrAQpZqU",
                    "name": "Eli Brown",
                    "type": "artist",
                    "uri": "spotify:artist:5lVNSw2GPci8kebrAQpZqU"
                }
            ],
            "disc_number": 1,
            "duration_ms": 168529,
            "explicit": true,
            "external_ids": {
                "isrc": "GBUM72307390"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/5AWGyFvWNof3Knq7QrN3jD"
            },
            "href": "https://api.spotify.com/v1/tracks/5AWGyFvWNof3Knq7QrN3jD",
            "id": "5AWGyFvWNof3Knq7QrN3jD",
            "name": "Diamonds On My Mind",
            "popularity": 68,
            "preview_url": "https://p.scdn.co/mp3-preview/a7e621c0ace6c43c4291547ad130fed780e17e16?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 1,
            "uri": "spotify:track:5AWGyFvWNof3Knq7QrN3jD"
        },
        "audioFeats": {
            "danceability": 0.743,
            "energy": 0.851,
            "key": 2,
            "loudness": -5.457,
            "mode": 1,
            "speechiness": 0.195,
            "acousticness": 0.0121,
            "instrumentalness": 0.00382,
            "liveness": 0.0604,
            "valence": 0.745,
            "tempo": 135.969,
            "type": "audio_features",
            "id": "5AWGyFvWNof3Knq7QrN3jD",
            "uri": "spotify:track:5AWGyFvWNof3Knq7QrN3jD",
            "track_href": "https://api.spotify.com/v1/tracks/5AWGyFvWNof3Knq7QrN3jD",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/5AWGyFvWNof3Knq7QrN3jD",
            "duration_ms": 168529,
            "time_signature": 4
        }
    },
    {
        "_type": "userLikedSongs",
        "added_at": "2024-01-06T02:20:43Z",
        "track": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2mLA48B366zkELXYx7hcDN"
                        },
                        "href": "https://api.spotify.com/v1/artists/2mLA48B366zkELXYx7hcDN",
                        "id": "2mLA48B366zkELXYx7hcDN",
                        "name": "Peggy Gou",
                        "type": "artist",
                        "uri": "spotify:artist:2mLA48B366zkELXYx7hcDN"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/2LVDNOUUy2g8517ZEtQIcK"
                },
                "href": "https://api.spotify.com/v1/albums/2LVDNOUUy2g8517ZEtQIcK",
                "id": "2LVDNOUUy2g8517ZEtQIcK",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b27388d71aadd009fe1a83df88f2",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e0288d71aadd009fe1a83df88f2",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d0000485188d71aadd009fe1a83df88f2",
                        "width": 64
                    }
                ],
                "name": "(It Goes Like) Nanana [Edit]",
                "total_tracks": 1,
                "uri": "spotify:album:2LVDNOUUy2g8517ZEtQIcK"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2mLA48B366zkELXYx7hcDN"
                    },
                    "href": "https://api.spotify.com/v1/artists/2mLA48B366zkELXYx7hcDN",
                    "id": "2mLA48B366zkELXYx7hcDN",
                    "name": "Peggy Gou",
                    "type": "artist",
                    "uri": "spotify:artist:2mLA48B366zkELXYx7hcDN"
                }
            ],
            "disc_number": 1,
            "duration_ms": 231545,
            "explicit": false,
            "external_ids": {
                "isrc": "GBBKS2300080"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/23RoR84KodL5HWvUTneQ1w"
            },
            "href": "https://api.spotify.com/v1/tracks/23RoR84KodL5HWvUTneQ1w",
            "id": "23RoR84KodL5HWvUTneQ1w",
            "name": "(It Goes Like) Nanana - Edit",
            "popularity": 89,
            "preview_url": "https://p.scdn.co/mp3-preview/e36e0bd4714844f1f9d992398b41a3e333f15cc9?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 1,
            "uri": "spotify:track:23RoR84KodL5HWvUTneQ1w"
        },
        "audioFeats": {
            "danceability": 0.671,
            "energy": 0.876,
            "key": 7,
            "loudness": -5.681,
            "mode": 0,
            "speechiness": 0.0352,
            "acousticness": 0.12,
            "instrumentalness": 0.188,
            "liveness": 0.0823,
            "valence": 0.964,
            "tempo": 129.998,
            "type": "audio_features",
            "id": "23RoR84KodL5HWvUTneQ1w",
            "uri": "spotify:track:23RoR84KodL5HWvUTneQ1w",
            "track_href": "https://api.spotify.com/v1/tracks/23RoR84KodL5HWvUTneQ1w",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/23RoR84KodL5HWvUTneQ1w",
            "duration_ms": 231545,
            "time_signature": 4
        }
    },
    {
        "_type": "userLikedSongs",
        "added_at": "2024-01-04T05:15:39Z",
        "track": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4O15NlyKLIASxsJ0PrXPfz"
                        },
                        "href": "https://api.spotify.com/v1/artists/4O15NlyKLIASxsJ0PrXPfz",
                        "id": "4O15NlyKLIASxsJ0PrXPfz",
                        "name": "Lil Uzi Vert",
                        "type": "artist",
                        "uri": "spotify:artist:4O15NlyKLIASxsJ0PrXPfz"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/0zicd2mBV8HTzSubByj4vP"
                },
                "href": "https://api.spotify.com/v1/albums/0zicd2mBV8HTzSubByj4vP",
                "id": "0zicd2mBV8HTzSubByj4vP",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2730d5a84e4e47399d2726c330c",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e020d5a84e4e47399d2726c330c",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048510d5a84e4e47399d2726c330c",
                        "width": 64
                    }
                ],
                "name": "Luv Is Rage 2 (Deluxe)",
                "total_tracks": 20,
                "uri": "spotify:album:0zicd2mBV8HTzSubByj4vP"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4O15NlyKLIASxsJ0PrXPfz"
                    },
                    "href": "https://api.spotify.com/v1/artists/4O15NlyKLIASxsJ0PrXPfz",
                    "id": "4O15NlyKLIASxsJ0PrXPfz",
                    "name": "Lil Uzi Vert",
                    "type": "artist",
                    "uri": "spotify:artist:4O15NlyKLIASxsJ0PrXPfz"
                }
            ],
            "disc_number": 1,
            "duration_ms": 207038,
            "explicit": true,
            "external_ids": {
                "isrc": "USAT21703427"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/5evSAk9q0l3TfF5dYDwDBO"
            },
            "href": "https://api.spotify.com/v1/tracks/5evSAk9q0l3TfF5dYDwDBO",
            "id": "5evSAk9q0l3TfF5dYDwDBO",
            "name": "Sauce It Up",
            "popularity": 54,
            "preview_url": "https://p.scdn.co/mp3-preview/ab7ed8574cacaf378d0b703e1d9c427ebec78bd2?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 3,
            "uri": "spotify:track:5evSAk9q0l3TfF5dYDwDBO"
        },
        "audioFeats": {
            "danceability": 0.813,
            "energy": 0.528,
            "key": 6,
            "loudness": -6.305,
            "mode": 0,
            "speechiness": 0.313,
            "acousticness": 0.0715,
            "instrumentalness": 0,
            "liveness": 0.125,
            "valence": 0.131,
            "tempo": 79.532,
            "type": "audio_features",
            "id": "5evSAk9q0l3TfF5dYDwDBO",
            "uri": "spotify:track:5evSAk9q0l3TfF5dYDwDBO",
            "track_href": "https://api.spotify.com/v1/tracks/5evSAk9q0l3TfF5dYDwDBO",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/5evSAk9q0l3TfF5dYDwDBO",
            "duration_ms": 207039,
            "time_signature": 4
        }
    },
    {
        "_type": "userLikedSongs",
        "added_at": "2024-01-04T02:16:04Z",
        "track": {
            "album": {
                "album_type": "album",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
                        },
                        "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
                        "id": "4tZwfgrHOc3mvqYlEYSvVi",
                        "name": "Daft Punk",
                        "type": "artist",
                        "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/2noRn2Aes5aoNVsU6iWThc"
                },
                "href": "https://api.spotify.com/v1/albums/2noRn2Aes5aoNVsU6iWThc",
                "id": "2noRn2Aes5aoNVsU6iWThc",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273b33d46dfa2635a47eebf63b2",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02b33d46dfa2635a47eebf63b2",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851b33d46dfa2635a47eebf63b2",
                        "width": 64
                    }
                ],
                "name": "Discovery",
                "total_tracks": 14,
                "uri": "spotify:album:2noRn2Aes5aoNVsU6iWThc"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4tZwfgrHOc3mvqYlEYSvVi"
                    },
                    "href": "https://api.spotify.com/v1/artists/4tZwfgrHOc3mvqYlEYSvVi",
                    "id": "4tZwfgrHOc3mvqYlEYSvVi",
                    "name": "Daft Punk",
                    "type": "artist",
                    "uri": "spotify:artist:4tZwfgrHOc3mvqYlEYSvVi"
                }
            ],
            "disc_number": 1,
            "duration_ms": 301373,
            "explicit": false,
            "external_ids": {
                "isrc": "GBDUW0000058"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/2VEZx7NWsZ1D0eJ4uv5Fym"
            },
            "href": "https://api.spotify.com/v1/tracks/2VEZx7NWsZ1D0eJ4uv5Fym",
            "id": "2VEZx7NWsZ1D0eJ4uv5Fym",
            "name": "Digital Love",
            "popularity": 68,
            "preview_url": "https://p.scdn.co/mp3-preview/1975b7202f835305dc2e8b44995bea0e1dc9b557?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 3,
            "uri": "spotify:track:2VEZx7NWsZ1D0eJ4uv5Fym"
        },
        "audioFeats": {
            "danceability": 0.644,
            "energy": 0.664,
            "key": 9,
            "loudness": -8.398,
            "mode": 1,
            "speechiness": 0.0332,
            "acousticness": 0.048,
            "instrumentalness": 0.867,
            "liveness": 0.342,
            "valence": 0.53,
            "tempo": 124.726,
            "type": "audio_features",
            "id": "2VEZx7NWsZ1D0eJ4uv5Fym",
            "uri": "spotify:track:2VEZx7NWsZ1D0eJ4uv5Fym",
            "track_href": "https://api.spotify.com/v1/tracks/2VEZx7NWsZ1D0eJ4uv5Fym",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/2VEZx7NWsZ1D0eJ4uv5Fym",
            "duration_ms": 301373,
            "time_signature": 4
        }
    },
    {
        "_type": "userLikedSongs",
        "added_at": "2024-01-04T01:43:41Z",
        "track": {
            "album": {
                "album_type": "compilation",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of"
                        },
                        "href": "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                        "id": "0LyfQWJT6nXafLPZqxe9Of",
                        "name": "Various Artists",
                        "type": "artist",
                        "uri": "spotify:artist:0LyfQWJT6nXafLPZqxe9Of"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/31QCnHMnS7Cb4UdJkubgrr"
                },
                "href": "https://api.spotify.com/v1/albums/31QCnHMnS7Cb4UdJkubgrr",
                "id": "31QCnHMnS7Cb4UdJkubgrr",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273707fe4c159f0384c613dc4d2",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02707fe4c159f0384c613dc4d2",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851707fe4c159f0384c613dc4d2",
                        "width": 64
                    }
                ],
                "name": "The Music of Grand Theft Auto V, Vol. 1: Original Music",
                "total_tracks": 18,
                "uri": "spotify:album:31QCnHMnS7Cb4UdJkubgrr"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/13ubrt8QOOCPljQ2FL1Kca"
                    },
                    "href": "https://api.spotify.com/v1/artists/13ubrt8QOOCPljQ2FL1Kca",
                    "id": "13ubrt8QOOCPljQ2FL1Kca",
                    "name": "A$AP Rocky",
                    "type": "artist",
                    "uri": "spotify:artist:13ubrt8QOOCPljQ2FL1Kca"
                }
            ],
            "disc_number": 1,
            "duration_ms": 139706,
            "explicit": true,
            "external_ids": {
                "isrc": "TCABQ1372658"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/6AtscuPpNRwDvuehpFtWw1"
            },
            "href": "https://api.spotify.com/v1/tracks/6AtscuPpNRwDvuehpFtWw1",
            "id": "6AtscuPpNRwDvuehpFtWw1",
            "name": "r - Cali",
            "popularity": 66,
            "preview_url": "https://p.scdn.co/mp3-preview/cec84a49ba6920c2a3f9842e1952b0a5b239f4ca?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 12,
            "uri": "spotify:track:6AtscuPpNRwDvuehpFtWw1"
        },
        "audioFeats": {
            "danceability": 0.714,
            "energy": 0.764,
            "key": 4,
            "loudness": -6.212,
            "mode": 0,
            "speechiness": 0.354,
            "acousticness": 0.0104,
            "instrumentalness": 0,
            "liveness": 0.564,
            "valence": 0.517,
            "tempo": 74.986,
            "type": "audio_features",
            "id": "6AtscuPpNRwDvuehpFtWw1",
            "uri": "spotify:track:6AtscuPpNRwDvuehpFtWw1",
            "track_href": "https://api.spotify.com/v1/tracks/6AtscuPpNRwDvuehpFtWw1",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/6AtscuPpNRwDvuehpFtWw1",
            "duration_ms": 139707,
            "time_signature": 4
        }
    },
    {
        "_type": "userLikedSongs",
        "added_at": "2024-01-04T01:06:59Z",
        "track": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4LLpKhyESsyAXpc4laK94U"
                        },
                        "href": "https://api.spotify.com/v1/artists/4LLpKhyESsyAXpc4laK94U",
                        "id": "4LLpKhyESsyAXpc4laK94U",
                        "name": "Mac Miller",
                        "type": "artist",
                        "uri": "spotify:artist:4LLpKhyESsyAXpc4laK94U"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/4UI7APfopnHnbpbGz1zuDs"
                },
                "href": "https://api.spotify.com/v1/albums/4UI7APfopnHnbpbGz1zuDs",
                "id": "4UI7APfopnHnbpbGz1zuDs",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2733318aba7fdc75a9dad671e5e",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e023318aba7fdc75a9dad671e5e",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048513318aba7fdc75a9dad671e5e",
                        "width": 64
                    }
                ],
                "name": "Donald Trump",
                "total_tracks": 2,
                "uri": "spotify:album:4UI7APfopnHnbpbGz1zuDs"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4LLpKhyESsyAXpc4laK94U"
                    },
                    "href": "https://api.spotify.com/v1/artists/4LLpKhyESsyAXpc4laK94U",
                    "id": "4LLpKhyESsyAXpc4laK94U",
                    "name": "Mac Miller",
                    "type": "artist",
                    "uri": "spotify:artist:4LLpKhyESsyAXpc4laK94U"
                }
            ],
            "disc_number": 1,
            "duration_ms": 165908,
            "explicit": true,
            "external_ids": {
                "isrc": "USA2P1173908"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/4no1bVGLUhgFEOQY3gb8lv"
            },
            "href": "https://api.spotify.com/v1/tracks/4no1bVGLUhgFEOQY3gb8lv",
            "id": "4no1bVGLUhgFEOQY3gb8lv",
            "name": "Donald Trump",
            "popularity": 38,
            "preview_url": "https://p.scdn.co/mp3-preview/379ea5b2b59baf8f71d47d491e0daeea78b35d27?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 1,
            "uri": "spotify:track:4no1bVGLUhgFEOQY3gb8lv"
        },
        "audioFeats": {
            "danceability": 0.637,
            "energy": 0.9,
            "key": 1,
            "loudness": -7.094,
            "mode": 0,
            "speechiness": 0.12,
            "acousticness": 0.118,
            "instrumentalness": 0,
            "liveness": 0.392,
            "valence": 0.834,
            "tempo": 162.993,
            "type": "audio_features",
            "id": "4no1bVGLUhgFEOQY3gb8lv",
            "uri": "spotify:track:4no1bVGLUhgFEOQY3gb8lv",
            "track_href": "https://api.spotify.com/v1/tracks/4no1bVGLUhgFEOQY3gb8lv",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/4no1bVGLUhgFEOQY3gb8lv",
            "duration_ms": 165908,
            "time_signature": 4
        }
    },
    {
        "_type": "userLikedSongs",
        "added_at": "2023-12-31T22:40:31Z",
        "track": {
            "album": {
                "album_type": "single",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1KpCi9BOfviCVhmpI4G2sY"
                        },
                        "href": "https://api.spotify.com/v1/artists/1KpCi9BOfviCVhmpI4G2sY",
                        "id": "1KpCi9BOfviCVhmpI4G2sY",
                        "name": "Tchami",
                        "type": "artist",
                        "uri": "spotify:artist:1KpCi9BOfviCVhmpI4G2sY"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/2FS78T34iGLD2SEKtK9GZV"
                },
                "href": "https://api.spotify.com/v1/albums/2FS78T34iGLD2SEKtK9GZV",
                "id": "2FS78T34iGLD2SEKtK9GZV",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b27369cbabafa239c9ef38694f32",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e0269cbabafa239c9ef38694f32",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d0000485169cbabafa239c9ef38694f32",
                        "width": 64
                    }
                ],
                "name": "Untrue",
                "total_tracks": 2,
                "uri": "spotify:album:2FS78T34iGLD2SEKtK9GZV"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1KpCi9BOfviCVhmpI4G2sY"
                    },
                    "href": "https://api.spotify.com/v1/artists/1KpCi9BOfviCVhmpI4G2sY",
                    "id": "1KpCi9BOfviCVhmpI4G2sY",
                    "name": "Tchami",
                    "type": "artist",
                    "uri": "spotify:artist:1KpCi9BOfviCVhmpI4G2sY"
                }
            ],
            "disc_number": 1,
            "duration_ms": 250413,
            "explicit": false,
            "external_ids": {
                "isrc": "NLZ541400208"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/4Dp3yrEK6dQzr9oM2UtZgR"
            },
            "href": "https://api.spotify.com/v1/tracks/4Dp3yrEK6dQzr9oM2UtZgR",
            "id": "4Dp3yrEK6dQzr9oM2UtZgR",
            "name": "Untrue",
            "popularity": 42,
            "preview_url": "https://p.scdn.co/mp3-preview/5cf57cfa0ec08fe3e6547eb1230a78d606b21b49?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 1,
            "uri": "spotify:track:4Dp3yrEK6dQzr9oM2UtZgR"
        },
        "audioFeats": {
            "danceability": 0.68,
            "energy": 0.869,
            "key": 4,
            "loudness": -5.085,
            "mode": 0,
            "speechiness": 0.034,
            "acousticness": 0.00326,
            "instrumentalness": 0.818,
            "liveness": 0.261,
            "valence": 0.403,
            "tempo": 121.028,
            "type": "audio_features",
            "id": "4Dp3yrEK6dQzr9oM2UtZgR",
            "uri": "spotify:track:4Dp3yrEK6dQzr9oM2UtZgR",
            "track_href": "https://api.spotify.com/v1/tracks/4Dp3yrEK6dQzr9oM2UtZgR",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/4Dp3yrEK6dQzr9oM2UtZgR",
            "duration_ms": 250413,
            "time_signature": 4
        }
    },
    {
        "_type": "recomended",
        "track": {
            "album": {
                "album_type": "SINGLE",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5Igpc9iLZ3YGtKeYfSrrOE"
                        },
                        "href": "https://api.spotify.com/v1/artists/5Igpc9iLZ3YGtKeYfSrrOE",
                        "id": "5Igpc9iLZ3YGtKeYfSrrOE",
                        "name": "Chris Lake",
                        "type": "artist",
                        "uri": "spotify:artist:5Igpc9iLZ3YGtKeYfSrrOE"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5ITI6SEoUZMIXXkzCfr4oE"
                        },
                        "href": "https://api.spotify.com/v1/artists/5ITI6SEoUZMIXXkzCfr4oE",
                        "id": "5ITI6SEoUZMIXXkzCfr4oE",
                        "name": "Aluna",
                        "type": "artist",
                        "uri": "spotify:artist:5ITI6SEoUZMIXXkzCfr4oE"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/4PCf8xkYY6ZlrQh48AQP1V"
                },
                "href": "https://api.spotify.com/v1/albums/4PCf8xkYY6ZlrQh48AQP1V",
                "id": "4PCf8xkYY6ZlrQh48AQP1V",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b27333e18b9b63b4de1887880cb5",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e0233e18b9b63b4de1887880cb5",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d0000485133e18b9b63b4de1887880cb5",
                        "width": 64
                    }
                ],
                "name": "Beggin'",
                "total_tracks": 1,
                "uri": "spotify:album:4PCf8xkYY6ZlrQh48AQP1V"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5Igpc9iLZ3YGtKeYfSrrOE"
                    },
                    "href": "https://api.spotify.com/v1/artists/5Igpc9iLZ3YGtKeYfSrrOE",
                    "id": "5Igpc9iLZ3YGtKeYfSrrOE",
                    "name": "Chris Lake",
                    "type": "artist",
                    "uri": "spotify:artist:5Igpc9iLZ3YGtKeYfSrrOE"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5ITI6SEoUZMIXXkzCfr4oE"
                    },
                    "href": "https://api.spotify.com/v1/artists/5ITI6SEoUZMIXXkzCfr4oE",
                    "id": "5ITI6SEoUZMIXXkzCfr4oE",
                    "name": "Aluna",
                    "type": "artist",
                    "uri": "spotify:artist:5ITI6SEoUZMIXXkzCfr4oE"
                }
            ],
            "disc_number": 1,
            "duration_ms": 183397,
            "explicit": false,
            "external_ids": {
                "isrc": "USUG12301938"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/74nEGIzIefJhJ5qX7NeIAz"
            },
            "href": "https://api.spotify.com/v1/tracks/74nEGIzIefJhJ5qX7NeIAz",
            "id": "74nEGIzIefJhJ5qX7NeIAz",
            "name": "Beggin'",
            "popularity": 75,
            "preview_url": null,
            "track_number": 1,
            "uri": "spotify:track:74nEGIzIefJhJ5qX7NeIAz"
        },
        "audioFeats": {
            "danceability": 0.817,
            "energy": 0.67,
            "key": 8,
            "loudness": -6.315,
            "mode": 0,
            "speechiness": 0.0545,
            "acousticness": 0.156,
            "instrumentalness": 0.168,
            "liveness": 0.111,
            "valence": 0.712,
            "tempo": 125.972,
            "type": "audio_features",
            "id": "74nEGIzIefJhJ5qX7NeIAz",
            "uri": "spotify:track:74nEGIzIefJhJ5qX7NeIAz",
            "track_href": "https://api.spotify.com/v1/tracks/74nEGIzIefJhJ5qX7NeIAz",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/74nEGIzIefJhJ5qX7NeIAz",
            "duration_ms": 183397,
            "time_signature": 4
        }
    },
    {
        "_type": "recomended",
        "track": {
            "album": {
                "album_type": "ALBUM",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/7eQZTqEMozBcuSubfu52i4"
                        },
                        "href": "https://api.spotify.com/v1/artists/7eQZTqEMozBcuSubfu52i4",
                        "id": "7eQZTqEMozBcuSubfu52i4",
                        "name": "The Knife",
                        "type": "artist",
                        "uri": "spotify:artist:7eQZTqEMozBcuSubfu52i4"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/4gZFp1kGzdaQLD9UMM54C6"
                },
                "href": "https://api.spotify.com/v1/albums/4gZFp1kGzdaQLD9UMM54C6",
                "id": "4gZFp1kGzdaQLD9UMM54C6",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273a523ff0d1d57945165965289",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02a523ff0d1d57945165965289",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851a523ff0d1d57945165965289",
                        "width": 64
                    }
                ],
                "name": "Silent Shout",
                "total_tracks": 11,
                "uri": "spotify:album:4gZFp1kGzdaQLD9UMM54C6"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/7eQZTqEMozBcuSubfu52i4"
                    },
                    "href": "https://api.spotify.com/v1/artists/7eQZTqEMozBcuSubfu52i4",
                    "id": "7eQZTqEMozBcuSubfu52i4",
                    "name": "The Knife",
                    "type": "artist",
                    "uri": "spotify:artist:7eQZTqEMozBcuSubfu52i4"
                }
            ],
            "disc_number": 1,
            "duration_ms": 293640,
            "explicit": false,
            "external_ids": {
                "isrc": "SEWCE0600201"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/00rbvrrBciAqI3VAONRN6j"
            },
            "href": "https://api.spotify.com/v1/tracks/00rbvrrBciAqI3VAONRN6j",
            "id": "00rbvrrBciAqI3VAONRN6j",
            "name": "Silent Shout",
            "popularity": 42,
            "preview_url": "https://p.scdn.co/mp3-preview/93ee8a866c45113a63333faa72d2b2d7e0756ac8?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 1,
            "uri": "spotify:track:00rbvrrBciAqI3VAONRN6j"
        },
        "audioFeats": {
            "danceability": 0.601,
            "energy": 0.699,
            "key": 2,
            "loudness": -10.488,
            "mode": 1,
            "speechiness": 0.0393,
            "acousticness": 0.106,
            "instrumentalness": 0.888,
            "liveness": 0.123,
            "valence": 0.39,
            "tempo": 128.574,
            "type": "audio_features",
            "id": "00rbvrrBciAqI3VAONRN6j",
            "uri": "spotify:track:00rbvrrBciAqI3VAONRN6j",
            "track_href": "https://api.spotify.com/v1/tracks/00rbvrrBciAqI3VAONRN6j",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/00rbvrrBciAqI3VAONRN6j",
            "duration_ms": 293640,
            "time_signature": 4
        }
    },
    {
        "_type": "recomended",
        "track": {
            "album": {
                "album_type": "SINGLE",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1u7OVFmWah4wQhOPIbUb8U"
                        },
                        "href": "https://api.spotify.com/v1/artists/1u7OVFmWah4wQhOPIbUb8U",
                        "id": "1u7OVFmWah4wQhOPIbUb8U",
                        "name": "Will Sparks",
                        "type": "artist",
                        "uri": "spotify:artist:1u7OVFmWah4wQhOPIbUb8U"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/6qmP3e4qPHcnj0576IRaV6"
                },
                "href": "https://api.spotify.com/v1/albums/6qmP3e4qPHcnj0576IRaV6",
                "id": "6qmP3e4qPHcnj0576IRaV6",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273dc2862bc4d54ce2b802fa166",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02dc2862bc4d54ce2b802fa166",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851dc2862bc4d54ce2b802fa166",
                        "width": 64
                    }
                ],
                "name": "Say It Again",
                "total_tracks": 1,
                "uri": "spotify:album:6qmP3e4qPHcnj0576IRaV6"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1u7OVFmWah4wQhOPIbUb8U"
                    },
                    "href": "https://api.spotify.com/v1/artists/1u7OVFmWah4wQhOPIbUb8U",
                    "id": "1u7OVFmWah4wQhOPIbUb8U",
                    "name": "Will Sparks",
                    "type": "artist",
                    "uri": "spotify:artist:1u7OVFmWah4wQhOPIbUb8U"
                }
            ],
            "disc_number": 1,
            "duration_ms": 207272,
            "explicit": false,
            "external_ids": {
                "isrc": "NLF712202021"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/0dDGl66J8riMFyp2yUn88W"
            },
            "href": "https://api.spotify.com/v1/tracks/0dDGl66J8riMFyp2yUn88W",
            "id": "0dDGl66J8riMFyp2yUn88W",
            "name": "Say It Again",
            "popularity": 62,
            "preview_url": "https://p.scdn.co/mp3-preview/812b86fcb823ef6fee0ec8cd832dd81497cd6481?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 1,
            "uri": "spotify:track:0dDGl66J8riMFyp2yUn88W"
        },
        "audioFeats": {
            "danceability": 0.635,
            "energy": 0.983,
            "key": 1,
            "loudness": -6.252,
            "mode": 0,
            "speechiness": 0.0516,
            "acousticness": 0.199,
            "instrumentalness": 0.852,
            "liveness": 0.419,
            "valence": 0.035,
            "tempo": 132.004,
            "type": "audio_features",
            "id": "0dDGl66J8riMFyp2yUn88W",
            "uri": "spotify:track:0dDGl66J8riMFyp2yUn88W",
            "track_href": "https://api.spotify.com/v1/tracks/0dDGl66J8riMFyp2yUn88W",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/0dDGl66J8riMFyp2yUn88W",
            "duration_ms": 207273,
            "time_signature": 4
        }
    },
    {
        "_type": "recomended",
        "track": {
            "album": {
                "album_type": "SINGLE",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/4pnp4w9g30yLfVIAFnZMRd"
                        },
                        "href": "https://api.spotify.com/v1/artists/4pnp4w9g30yLfVIAFnZMRd",
                        "id": "4pnp4w9g30yLfVIAFnZMRd",
                        "name": "ACRAZE",
                        "type": "artist",
                        "uri": "spotify:artist:4pnp4w9g30yLfVIAFnZMRd"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/6EYwIO2gr5pTgQBysWPQvt"
                },
                "href": "https://api.spotify.com/v1/albums/6EYwIO2gr5pTgQBysWPQvt",
                "id": "6EYwIO2gr5pTgQBysWPQvt",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273f000e1ae98c8cf4ee2b1e838",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02f000e1ae98c8cf4ee2b1e838",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851f000e1ae98c8cf4ee2b1e838",
                        "width": 64
                    }
                ],
                "name": "Take Me Away",
                "total_tracks": 1,
                "uri": "spotify:album:6EYwIO2gr5pTgQBysWPQvt"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/4pnp4w9g30yLfVIAFnZMRd"
                    },
                    "href": "https://api.spotify.com/v1/artists/4pnp4w9g30yLfVIAFnZMRd",
                    "id": "4pnp4w9g30yLfVIAFnZMRd",
                    "name": "ACRAZE",
                    "type": "artist",
                    "uri": "spotify:artist:4pnp4w9g30yLfVIAFnZMRd"
                }
            ],
            "disc_number": 1,
            "duration_ms": 179528,
            "explicit": false,
            "external_ids": {
                "isrc": "USUM72301826"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/1EXDjOpV3Lbiv8CzJ7caHs"
            },
            "href": "https://api.spotify.com/v1/tracks/1EXDjOpV3Lbiv8CzJ7caHs",
            "id": "1EXDjOpV3Lbiv8CzJ7caHs",
            "name": "Take Me Away",
            "popularity": 66,
            "preview_url": null,
            "track_number": 1,
            "uri": "spotify:track:1EXDjOpV3Lbiv8CzJ7caHs"
        },
        "audioFeats": {
            "danceability": 0.727,
            "energy": 0.982,
            "key": 11,
            "loudness": -4.011,
            "mode": 0,
            "speechiness": 0.0782,
            "acousticness": 0.000274,
            "instrumentalness": 0.854,
            "liveness": 0.286,
            "valence": 0.719,
            "tempo": 126.036,
            "type": "audio_features",
            "id": "1EXDjOpV3Lbiv8CzJ7caHs",
            "uri": "spotify:track:1EXDjOpV3Lbiv8CzJ7caHs",
            "track_href": "https://api.spotify.com/v1/tracks/1EXDjOpV3Lbiv8CzJ7caHs",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/1EXDjOpV3Lbiv8CzJ7caHs",
            "duration_ms": 179529,
            "time_signature": 4
        }
    },
    {
        "_type": "recomended",
        "track": {
            "album": {
                "album_type": "ALBUM",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3rIZMv9rysU7JkLzEaC5Jp"
                        },
                        "href": "https://api.spotify.com/v1/artists/3rIZMv9rysU7JkLzEaC5Jp",
                        "id": "3rIZMv9rysU7JkLzEaC5Jp",
                        "name": "Snow Patrol",
                        "type": "artist",
                        "uri": "spotify:artist:3rIZMv9rysU7JkLzEaC5Jp"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/6rnHGj9PUHcEQCp4xdjbeJ"
                },
                "href": "https://api.spotify.com/v1/albums/6rnHGj9PUHcEQCp4xdjbeJ",
                "id": "6rnHGj9PUHcEQCp4xdjbeJ",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2733da246ae81087859a89fe42a",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e023da246ae81087859a89fe42a",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048513da246ae81087859a89fe42a",
                        "width": 64
                    }
                ],
                "name": "Final Straw",
                "total_tracks": 12,
                "uri": "spotify:album:6rnHGj9PUHcEQCp4xdjbeJ"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3rIZMv9rysU7JkLzEaC5Jp"
                    },
                    "href": "https://api.spotify.com/v1/artists/3rIZMv9rysU7JkLzEaC5Jp",
                    "id": "3rIZMv9rysU7JkLzEaC5Jp",
                    "name": "Snow Patrol",
                    "type": "artist",
                    "uri": "spotify:artist:3rIZMv9rysU7JkLzEaC5Jp"
                }
            ],
            "disc_number": 1,
            "duration_ms": 226026,
            "explicit": false,
            "external_ids": {
                "isrc": "GBAKW0300947"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/7FnPuMFgc7YDuwQkGpttr2"
            },
            "href": "https://api.spotify.com/v1/tracks/7FnPuMFgc7YDuwQkGpttr2",
            "id": "7FnPuMFgc7YDuwQkGpttr2",
            "name": "Spitting Games",
            "popularity": 53,
            "preview_url": null,
            "track_number": 5,
            "uri": "spotify:track:7FnPuMFgc7YDuwQkGpttr2"
        },
        "audioFeats": {
            "danceability": 0.498,
            "energy": 0.885,
            "key": 7,
            "loudness": -3.922,
            "mode": 1,
            "speechiness": 0.0291,
            "acousticness": 0.00055,
            "instrumentalness": 0.034,
            "liveness": 0.574,
            "valence": 0.563,
            "tempo": 145.217,
            "type": "audio_features",
            "id": "7FnPuMFgc7YDuwQkGpttr2",
            "uri": "spotify:track:7FnPuMFgc7YDuwQkGpttr2",
            "track_href": "https://api.spotify.com/v1/tracks/7FnPuMFgc7YDuwQkGpttr2",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/7FnPuMFgc7YDuwQkGpttr2",
            "duration_ms": 226027,
            "time_signature": 4
        }
    },
    {
        "_type": "recomended",
        "track": {
            "album": {
                "album_type": "ALBUM",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/5T4UKHhr4HGIC0VzdZQtAE"
                        },
                        "href": "https://api.spotify.com/v1/artists/5T4UKHhr4HGIC0VzdZQtAE",
                        "id": "5T4UKHhr4HGIC0VzdZQtAE",
                        "name": "Faithless",
                        "type": "artist",
                        "uri": "spotify:artist:5T4UKHhr4HGIC0VzdZQtAE"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/7K7043KUSpb6tHaK8cBlhu"
                },
                "href": "https://api.spotify.com/v1/albums/7K7043KUSpb6tHaK8cBlhu",
                "id": "7K7043KUSpb6tHaK8cBlhu",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2733cf7ea75a5da1c1c9513bf1e",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e023cf7ea75a5da1c1c9513bf1e",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048513cf7ea75a5da1c1c9513bf1e",
                        "width": 64
                    }
                ],
                "name": "All Blessed",
                "total_tracks": 12,
                "uri": "spotify:album:7K7043KUSpb6tHaK8cBlhu"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5T4UKHhr4HGIC0VzdZQtAE"
                    },
                    "href": "https://api.spotify.com/v1/artists/5T4UKHhr4HGIC0VzdZQtAE",
                    "id": "5T4UKHhr4HGIC0VzdZQtAE",
                    "name": "Faithless",
                    "type": "artist",
                    "uri": "spotify:artist:5T4UKHhr4HGIC0VzdZQtAE"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/5XnwG6JFrOMlVGOZfy54ck"
                    },
                    "href": "https://api.spotify.com/v1/artists/5XnwG6JFrOMlVGOZfy54ck",
                    "id": "5XnwG6JFrOMlVGOZfy54ck",
                    "name": "Suli Breaks",
                    "type": "artist",
                    "uri": "spotify:artist:5XnwG6JFrOMlVGOZfy54ck"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2Bohv14bNCQi67Ft5pWI0g"
                    },
                    "href": "https://api.spotify.com/v1/artists/2Bohv14bNCQi67Ft5pWI0g",
                    "id": "2Bohv14bNCQi67Ft5pWI0g",
                    "name": "Jazzie B.",
                    "type": "artist",
                    "uri": "spotify:artist:2Bohv14bNCQi67Ft5pWI0g"
                }
            ],
            "disc_number": 1,
            "duration_ms": 246600,
            "explicit": false,
            "external_ids": {
                "isrc": "GB5KW2002501"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/4CiYuJT4tYPevwx6fTEEKd"
            },
            "href": "https://api.spotify.com/v1/tracks/4CiYuJT4tYPevwx6fTEEKd",
            "id": "4CiYuJT4tYPevwx6fTEEKd",
            "name": "Innadadance (feat. Suli Breaks & Jazzie B)",
            "popularity": 35,
            "preview_url": "https://p.scdn.co/mp3-preview/8a6c9c2eb34e892669bcacb4455d471b48fa37d7?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 11,
            "uri": "spotify:track:4CiYuJT4tYPevwx6fTEEKd"
        },
        "audioFeats": {
            "danceability": 0.867,
            "energy": 0.665,
            "key": 7,
            "loudness": -8.802,
            "mode": 0,
            "speechiness": 0.0639,
            "acousticness": 0.000713,
            "instrumentalness": 0.323,
            "liveness": 0.286,
            "valence": 0.551,
            "tempo": 126.005,
            "type": "audio_features",
            "id": "4CiYuJT4tYPevwx6fTEEKd",
            "uri": "spotify:track:4CiYuJT4tYPevwx6fTEEKd",
            "track_href": "https://api.spotify.com/v1/tracks/4CiYuJT4tYPevwx6fTEEKd",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/4CiYuJT4tYPevwx6fTEEKd",
            "duration_ms": 246600,
            "time_signature": 4
        }
    },
    {
        "_type": "recomended",
        "track": {
            "album": {
                "album_type": "SINGLE",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1QEd635szhierW6gzRiS1o"
                        },
                        "href": "https://api.spotify.com/v1/artists/1QEd635szhierW6gzRiS1o",
                        "id": "1QEd635szhierW6gzRiS1o",
                        "name": "Hannah Laing",
                        "type": "artist",
                        "uri": "spotify:artist:1QEd635szhierW6gzRiS1o"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/3F3QWH7UilOE5tiKzAzgde"
                        },
                        "href": "https://api.spotify.com/v1/artists/3F3QWH7UilOE5tiKzAzgde",
                        "id": "3F3QWH7UilOE5tiKzAzgde",
                        "name": "HVRR",
                        "type": "artist",
                        "uri": "spotify:artist:3F3QWH7UilOE5tiKzAzgde"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/4quE07XoEsKoWZpiCRCtlq"
                },
                "href": "https://api.spotify.com/v1/albums/4quE07XoEsKoWZpiCRCtlq",
                "id": "4quE07XoEsKoWZpiCRCtlq",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b2732d01af34a2247247ecad57c6",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e022d01af34a2247247ecad57c6",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d000048512d01af34a2247247ecad57c6",
                        "width": 64
                    }
                ],
                "name": "Party All The Time",
                "total_tracks": 1,
                "uri": "spotify:album:4quE07XoEsKoWZpiCRCtlq"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1QEd635szhierW6gzRiS1o"
                    },
                    "href": "https://api.spotify.com/v1/artists/1QEd635szhierW6gzRiS1o",
                    "id": "1QEd635szhierW6gzRiS1o",
                    "name": "Hannah Laing",
                    "type": "artist",
                    "uri": "spotify:artist:1QEd635szhierW6gzRiS1o"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/3F3QWH7UilOE5tiKzAzgde"
                    },
                    "href": "https://api.spotify.com/v1/artists/3F3QWH7UilOE5tiKzAzgde",
                    "id": "3F3QWH7UilOE5tiKzAzgde",
                    "name": "HVRR",
                    "type": "artist",
                    "uri": "spotify:artist:3F3QWH7UilOE5tiKzAzgde"
                }
            ],
            "disc_number": 1,
            "duration_ms": 129860,
            "explicit": false,
            "external_ids": {
                "isrc": "GBUM72307123"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/49iD1q5Z58aEDqCemEXpS1"
            },
            "href": "https://api.spotify.com/v1/tracks/49iD1q5Z58aEDqCemEXpS1",
            "id": "49iD1q5Z58aEDqCemEXpS1",
            "name": "Party All The Time",
            "popularity": 68,
            "preview_url": null,
            "track_number": 1,
            "uri": "spotify:track:49iD1q5Z58aEDqCemEXpS1"
        },
        "audioFeats": {
            "danceability": 0.668,
            "energy": 0.971,
            "key": 7,
            "loudness": -4.018,
            "mode": 0,
            "speechiness": 0.0999,
            "acousticness": 0.0103,
            "instrumentalness": 0.0146,
            "liveness": 0.252,
            "valence": 0.292,
            "tempo": 140.006,
            "type": "audio_features",
            "id": "49iD1q5Z58aEDqCemEXpS1",
            "uri": "spotify:track:49iD1q5Z58aEDqCemEXpS1",
            "track_href": "https://api.spotify.com/v1/tracks/49iD1q5Z58aEDqCemEXpS1",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/49iD1q5Z58aEDqCemEXpS1",
            "duration_ms": 129861,
            "time_signature": 4
        }
    },
    {
        "_type": "recomended",
        "track": {
            "album": {
                "album_type": "ALBUM",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2ODbg2404zUzTi02qIPEjB"
                        },
                        "href": "https://api.spotify.com/v1/artists/2ODbg2404zUzTi02qIPEjB",
                        "id": "2ODbg2404zUzTi02qIPEjB",
                        "name": "Tay-K",
                        "type": "artist",
                        "uri": "spotify:artist:2ODbg2404zUzTi02qIPEjB"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/1S7KWH0szrqutOvzsqxiBv"
                },
                "href": "https://api.spotify.com/v1/albums/1S7KWH0szrqutOvzsqxiBv",
                "id": "1S7KWH0szrqutOvzsqxiBv",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273fbfeb7ded12a79fbd98f99e8",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02fbfeb7ded12a79fbd98f99e8",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851fbfeb7ded12a79fbd98f99e8",
                        "width": 64
                    }
                ],
                "name": "#SantanaWorld (+)",
                "total_tracks": 10,
                "uri": "spotify:album:1S7KWH0szrqutOvzsqxiBv"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2ODbg2404zUzTi02qIPEjB"
                    },
                    "href": "https://api.spotify.com/v1/artists/2ODbg2404zUzTi02qIPEjB",
                    "id": "2ODbg2404zUzTi02qIPEjB",
                    "name": "Tay-K",
                    "type": "artist",
                    "uri": "spotify:artist:2ODbg2404zUzTi02qIPEjB"
                }
            ],
            "disc_number": 1,
            "duration_ms": 70000,
            "explicit": true,
            "external_ids": {
                "isrc": "TCADD1794558"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/7m1cNdKABpKy0aAtsKAIGx"
            },
            "href": "https://api.spotify.com/v1/tracks/7m1cNdKABpKy0aAtsKAIGx",
            "id": "7m1cNdKABpKy0aAtsKAIGx",
            "name": "Saran Pack",
            "popularity": 72,
            "preview_url": "https://p.scdn.co/mp3-preview/c8bd4d0d286ac6f6d31e1b7616c94937db5b55bc?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 7,
            "uri": "spotify:track:7m1cNdKABpKy0aAtsKAIGx"
        },
        "audioFeats": {
            "danceability": 0.781,
            "energy": 0.731,
            "key": 8,
            "loudness": -8.3,
            "mode": 1,
            "speechiness": 0.226,
            "acousticness": 0.0432,
            "instrumentalness": 0,
            "liveness": 0.0454,
            "valence": 0.139,
            "tempo": 139.977,
            "type": "audio_features",
            "id": "7m1cNdKABpKy0aAtsKAIGx",
            "uri": "spotify:track:7m1cNdKABpKy0aAtsKAIGx",
            "track_href": "https://api.spotify.com/v1/tracks/7m1cNdKABpKy0aAtsKAIGx",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/7m1cNdKABpKy0aAtsKAIGx",
            "duration_ms": 70000,
            "time_signature": 4
        }
    },
    {
        "_type": "recomended",
        "track": {
            "album": {
                "album_type": "ALBUM",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/0AkpPlFLnr0VQwZQeMGht0"
                        },
                        "href": "https://api.spotify.com/v1/artists/0AkpPlFLnr0VQwZQeMGht0",
                        "id": "0AkpPlFLnr0VQwZQeMGht0",
                        "name": "Modjo",
                        "type": "artist",
                        "uri": "spotify:artist:0AkpPlFLnr0VQwZQeMGht0"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/0vwDxngkhZuwNbcxzebCXI"
                },
                "href": "https://api.spotify.com/v1/albums/0vwDxngkhZuwNbcxzebCXI",
                "id": "0vwDxngkhZuwNbcxzebCXI",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b27354c5c304064df85d61253ac7",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e0254c5c304064df85d61253ac7",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d0000485154c5c304064df85d61253ac7",
                        "width": 64
                    }
                ],
                "name": "Modjo (Remastered)",
                "total_tracks": 12,
                "uri": "spotify:album:0vwDxngkhZuwNbcxzebCXI"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/0AkpPlFLnr0VQwZQeMGht0"
                    },
                    "href": "https://api.spotify.com/v1/artists/0AkpPlFLnr0VQwZQeMGht0",
                    "id": "0AkpPlFLnr0VQwZQeMGht0",
                    "name": "Modjo",
                    "type": "artist",
                    "uri": "spotify:artist:0AkpPlFLnr0VQwZQeMGht0"
                }
            ],
            "disc_number": 1,
            "duration_ms": 196022,
            "explicit": false,
            "external_ids": {
                "isrc": "FR9W10100537"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/2dvKaRYQOaOyYxtHWKWrJ5"
            },
            "href": "https://api.spotify.com/v1/tracks/2dvKaRYQOaOyYxtHWKWrJ5",
            "id": "2dvKaRYQOaOyYxtHWKWrJ5",
            "name": "Peace of Mind",
            "popularity": 38,
            "preview_url": "https://p.scdn.co/mp3-preview/e4bc71109433f0ba2a9427ebd53dc52a0beea366?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 5,
            "uri": "spotify:track:2dvKaRYQOaOyYxtHWKWrJ5"
        },
        "audioFeats": {
            "danceability": 0.773,
            "energy": 0.677,
            "key": 7,
            "loudness": -6.882,
            "mode": 0,
            "speechiness": 0.0562,
            "acousticness": 0.00309,
            "instrumentalness": 0.00000101,
            "liveness": 0.0382,
            "valence": 0.492,
            "tempo": 105.035,
            "type": "audio_features",
            "id": "2dvKaRYQOaOyYxtHWKWrJ5",
            "uri": "spotify:track:2dvKaRYQOaOyYxtHWKWrJ5",
            "track_href": "https://api.spotify.com/v1/tracks/2dvKaRYQOaOyYxtHWKWrJ5",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/2dvKaRYQOaOyYxtHWKWrJ5",
            "duration_ms": 196023,
            "time_signature": 4
        }
    },
    {
        "_type": "recomended",
        "track": {
            "album": {
                "album_type": "SINGLE",
                "artists": [
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/2cW1LUTqGx2JMe0oAGx9OV"
                        },
                        "href": "https://api.spotify.com/v1/artists/2cW1LUTqGx2JMe0oAGx9OV",
                        "id": "2cW1LUTqGx2JMe0oAGx9OV",
                        "name": "Redfield",
                        "type": "artist",
                        "uri": "spotify:artist:2cW1LUTqGx2JMe0oAGx9OV"
                    },
                    {
                        "external_urls": {
                            "spotify": "https://open.spotify.com/artist/1xNmvlEiICkRlRGqlNFZ43"
                        },
                        "href": "https://api.spotify.com/v1/artists/1xNmvlEiICkRlRGqlNFZ43",
                        "id": "1xNmvlEiICkRlRGqlNFZ43",
                        "name": "Axwell",
                        "type": "artist",
                        "uri": "spotify:artist:1xNmvlEiICkRlRGqlNFZ43"
                    }
                ],
                "external_urls": {
                    "spotify": "https://open.spotify.com/album/26HyQIXrWpS7638X2pvedE"
                },
                "href": "https://api.spotify.com/v1/albums/26HyQIXrWpS7638X2pvedE",
                "id": "26HyQIXrWpS7638X2pvedE",
                "images": [
                    {
                        "height": 640,
                        "url": "https://i.scdn.co/image/ab67616d0000b273dd82e7428031bb7820843a5a",
                        "width": 640
                    },
                    {
                        "height": 300,
                        "url": "https://i.scdn.co/image/ab67616d00001e02dd82e7428031bb7820843a5a",
                        "width": 300
                    },
                    {
                        "height": 64,
                        "url": "https://i.scdn.co/image/ab67616d00004851dd82e7428031bb7820843a5a",
                        "width": 64
                    }
                ],
                "name": "Don't Worry (Axwell Cut)",
                "total_tracks": 2,
                "uri": "spotify:album:26HyQIXrWpS7638X2pvedE"
            },
            "artists": [
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/2cW1LUTqGx2JMe0oAGx9OV"
                    },
                    "href": "https://api.spotify.com/v1/artists/2cW1LUTqGx2JMe0oAGx9OV",
                    "id": "2cW1LUTqGx2JMe0oAGx9OV",
                    "name": "Redfield",
                    "type": "artist",
                    "uri": "spotify:artist:2cW1LUTqGx2JMe0oAGx9OV"
                },
                {
                    "external_urls": {
                        "spotify": "https://open.spotify.com/artist/1xNmvlEiICkRlRGqlNFZ43"
                    },
                    "href": "https://api.spotify.com/v1/artists/1xNmvlEiICkRlRGqlNFZ43",
                    "id": "1xNmvlEiICkRlRGqlNFZ43",
                    "name": "Axwell",
                    "type": "artist",
                    "uri": "spotify:artist:1xNmvlEiICkRlRGqlNFZ43"
                }
            ],
            "disc_number": 1,
            "duration_ms": 180483,
            "explicit": false,
            "external_ids": {
                "isrc": "GBKCF1900783"
            },
            "external_urls": {
                "spotify": "https://open.spotify.com/track/4fX1PGVgbxqY6NVzZqhMuz"
            },
            "href": "https://api.spotify.com/v1/tracks/4fX1PGVgbxqY6NVzZqhMuz",
            "id": "4fX1PGVgbxqY6NVzZqhMuz",
            "name": "Don't Worry - Axwell Cut",
            "popularity": 45,
            "preview_url": "https://p.scdn.co/mp3-preview/0f644cfbae741b3d96f28a2ea6da791c070798c3?cid=270b2e4d29334c5c8648b8e031bf32cf",
            "track_number": 1,
            "uri": "spotify:track:4fX1PGVgbxqY6NVzZqhMuz"
        },
        "audioFeats": {
            "danceability": 0.824,
            "energy": 0.809,
            "key": 7,
            "loudness": -4.277,
            "mode": 0,
            "speechiness": 0.0493,
            "acousticness": 0.0307,
            "instrumentalness": 0.135,
            "liveness": 0.0992,
            "valence": 0.896,
            "tempo": 124.007,
            "type": "audio_features",
            "id": "4fX1PGVgbxqY6NVzZqhMuz",
            "uri": "spotify:track:4fX1PGVgbxqY6NVzZqhMuz",
            "track_href": "https://api.spotify.com/v1/tracks/4fX1PGVgbxqY6NVzZqhMuz",
            "analysis_url": "https://api.spotify.com/v1/audio-analysis/4fX1PGVgbxqY6NVzZqhMuz",
            "duration_ms": 180484,
            "time_signature": 4
        }
    }
];

const Wrapper = ({ token } : { token: string; }) => {

    const [ play, _play ] = useState( false );
    const [ parsed, setParsed ] = useState<Array<JSX.Element>>([ ]);        
    const [ darkMode, set_theme ] = useState( false );
    const [ songs, setSong ] = useState(samples);

    const click = ( ) => _play( !play );

    const getSomeLikedSongs = async () => {
        const userLikedSongs = await fetch(`/api/spotify/usersLikedSongs/?token=${token}`)
        const data = await userLikedSongs.json();
        const songsArray = data.songArray;        
        setSong(songsArray);
    };
      

    useEffect(( ) => {        
        // getSomeLikedSongs();
        set_theme(  window.matchMedia('(prefers-color-scheme: dark)').matches );
        const themeWatcher = window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => set_theme( e.matches ));
        console.warn("Should remove this ^");
    }, [token]);


    return <div id={ s.Main }>

        <ClientOnly>
            <Scene play={ play } darkMode={ darkMode } songs={ songs }/>
        </ClientOnly>


        <div id={ s.TopArea }>
            <div>Welcome</div> 
            <div id={ s.RefreshBtnHolster }>
                <div id={ s.RefreshBtn } onClick={( ) => window.location.reload( )}/>
                
            </div>
        </div>
        <BottomBar onPlayBtn={ click }/>
    </div>;
};

export default Wrapper;