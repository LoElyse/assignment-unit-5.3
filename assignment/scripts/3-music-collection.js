console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

const myCollection = [];

console.log('My array:', myCollection);

function addToCollection( collection, artist, title, yearPublished) {
  const album = {
    artist: artist,
    title: title,
    yearPublished: yearPublished
  }
  console.log('test');

  collection.push(album);
  
  return album;
}

addToCollection(myCollection, 'Frank Ocean', 'Blonde', 2016)
addToCollection(myCollection, 'SZA', 'SOS', 2022)
addToCollection(myCollection, 'Fred again..', 'Actual Life 3', 2022)
addToCollection(myCollection, 'Daft Punk', 'Random Access Memories', 2013)
addToCollection(myCollection, 'SZA', 'CTRL', 2016)
addToCollection(myCollection, 'Tame Impala', 'Currents', 2015)

console.log('my collection:', myCollection)

function showCollection(collection) {
 for (const album of collection){
  console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}`)
 }
}

function findByArtist(collection, artist) {
  const matchArtists = []; // I put this inside the function so that no other artists from previous runs are included

  for (const album of collection) {
    if(album.artist === artist){
      matchArtists.push(album);
    }
  }

  console.log(matchArtists);
  return matchArtists;
}

///Stretch

function search(collection, searchCriteria) {
  const matchArtists = [];

  if(!searchCriteria || !searchCriteria.artist || !searchCriteria.yearPublished){
    return collection;
  }
    
  for(const album of collection){
    if(searchCriteria.artist === album.artist && searchCriteria.yearPublished === album.yearPublished){
      matchArtists.push(album);
    }
  }

  return matchArtists;
}









// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
