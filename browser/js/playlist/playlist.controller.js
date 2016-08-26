juke.controller('playlistCtrl', function ($state, $scope, PlaylistFactory) {

  $scope.createPlaylist = function(){
    PlaylistFactory.create(new Playlist($scope.playlistName))
      .then(function(playlist){
        $scope.playlistName = null
        $scope.playlistCreate.$setPristine()
        $state.go('playlist', {playlistId: playlist.id})
      })

  }

  function Playlist (name) {
    this.name = name;
  }



});

juke.controller('playlistsCtrl', function ($scope, PlaylistFactory) {
  PlaylistFactory.fetchAll()
    .then(function(playlists){
      $scope.playlists = playlists
    })
})

juke.controller('singlePlaylistCtrl', function ($scope, PlaylistFactory, PlayerFactory, thePlaylist) {
  
  $scope.playlist = thePlaylist

  $scope.toggle = function (song) {
    if (song !== PlayerFactory.getCurrentSong()) {
      PlayerFactory.start(song, $scope.playlist.songs);
    } else if ( PlayerFactory.isPlaying() ) {
      PlayerFactory.pause();
    } else {
      PlayerFactory.resume();
    }
  };

  $scope.getCurrentSong = function () {
    return PlayerFactory.getCurrentSong();
  };

  $scope.isPlaying = function (song) {
    return PlayerFactory.isPlaying() && PlayerFactory.getCurrentSong() === song;
  };

})