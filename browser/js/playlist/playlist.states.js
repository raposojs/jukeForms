juke.config(function ($stateProvider) {
	$stateProvider.state('newPlaylist', {
	url: '/playlists/new',
	templateUrl: '/js/playlist/templates/playlist.html',
	controller: 'playlistCtrl'
	});

	$stateProvider.state('playlist', {
	  url: '/playlists/:playlistId',
	  templateUrl: '/js/playlist/templates/singlePlaylist.html',
	  controller: 'singlePlaylistCtrl',
	  resolve: {
	  	thePlaylist: function(PlaylistFactory, $stateParams){
	  		return PlaylistFactory.fetchById($stateParams.playlistId)
	  	}
	  }
	});

});

