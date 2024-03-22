console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

const myCollection = [];

console.log('My array:', myCollection);

function addToCollection( collection, artist, title, yearPublished) {


  let album1 =  {
    artist: artist,
    title: title,
    yearPublished: yearPublished
  } 
collection.push(album1);
return album1;


  let album2 = {
    artist: artist,
    title: title,
    yearPublished: yearPublished
   }
   collection.push(album2);
  return album2;
  
  let album3 = {
    artist: artist,
    title: title,
    yearPublished: yearPublished
  }
  collection.push(album3);
  return album3;

  let album4 = {
    artist: artist,
    title: title,
    yearPublished: yearPublished
  }
  collection.push(album4);
  return album4;

  let album5 = {
    artist: artist,
    title: title,
    yearPublished: yearPublished
  }
  collection.push(album5);
  return album5;
 
  let album6 = {
    artist: artist,
    title: title,
    yearPublished: yearPublished
  }
  collection.push(album6);
  return album6;
 
 }

addToCollection(myCollection, 'Frank Ocean', 'Blonde', 2016)
addToCollection(myCollection, 'SZA', 'SOS', 2022)
addToCollection(myCollection, 'Fred again..', 'Actual Life 3', 2022)
addToCollection(myCollection, 'Daft Punk', 'Random Access Memories', 2013)
addToCollection(myCollection, 'Rufus Du Sol', 'Bloom', 2016)
addToCollection(myCollection, 'Tame Impala', 'Currents', 2015)

console.log('my collection:', myCollection)

function showCollection(collection) {
  for (i = 0; i < collection.length; i++) {
    console.log('albums', collection);
 }
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
