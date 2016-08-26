'use strict';

juke.factory('SongFactory', function ($http) {

	let songFact = {
		convert: function (song) {
			song.audioUrl = '/api/songs/' + song.id + '/audio';
			return song;
		},
		fetchAll: () => {
			return $http.get('/api/songs')
				.then((response)=> {
					return response.data;
				})
				.then((songs)=> {
					songs.map(songFact.convert);
					return songs;
				})
		}
	};

	return songFact;
});
