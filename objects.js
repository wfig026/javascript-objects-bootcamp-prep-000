var playlist = {
  godsmack: 'bulletproof',
  ffdp: 'remember everything',
  metallica: 'master of puppets'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist['Slowdive'] = 'Alison'
  return playlist
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist 
}