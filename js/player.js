
// USER-DEFINED CLASSES //
class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
        
    }
    getAlbums = function() {
        return this.albums
    }
    getAlbum = function(artist, title) {
        let album = null
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].artist==artist && this.albums[i].title==title) {
                album = this.albums[i]
            }
        }
        return album
    }

    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
        console.log(this.display())
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

// GLOBAL VARIABLES //
let jbox = new Jukebox()


// DOCUMENT ELEMENTS //
let optionSelectAlbum = document.getElementById("selectAlbum");
let btnShowFavoriteAlbum = document.getElementById("showFavoriteAlbum")
let btnPlayAlbum = document.getElementById("playAlbum")
let divShowAlbum = document.getElementById("divShowAlbum");


// FUNCTIONS //
function showFavoriteAlbum(event) {
    event.preventDefault();
    divShowAlbum.innerHTML =
            "<p>Your favorite album is:  " + jbox.favoriteAlbum() +
            "</p>";
}

function playAlbum(event) {
    event.preventDefault();
    try {
        // jbox.getAlbum(optionSelectAlbum.value.split(":")[0], 
        //     optionSelectAlbum.value.split(":")[1]).play()
        let album = jbox.getAlbum(optionSelectAlbum.value.split(":")[0],
                optionSelectAlbum.value.split(":")[1])
        album.play()
        alert(`Playing album\n${album.artist}: ${album.title}`)
    } catch(e) {
        console.log(e)
    }
}

function init() {
    // Populate jukebox with albums
    const albums = [["Operation Ivy", "Energy"], 
                    ["Blink 182", "Dude Ranch"],
                    ["New Found Glory", "Sticks and Stones"]]
    for (album of albums) {
        console.log("adding album to jukebox: " + album)
        jbox.addAlbum(new Album(album[0], album[1]))
    }
    // Populate dropdown list with albums from jukebox
    jbox.getAlbums().forEach(function(item) {
        let o = document.createElement("option");
        o.text = item.artist + ":  " + item.title;
        o.value = item.artist + ":" + item.title;
        optionSelectAlbum.appendChild(o);
    });
}


// EVENT LISTENERS //
btnShowFavoriteAlbum.addEventListener("submit", function(event) {
    showFavoriteAlbum(event);});
btnPlayAlbum.addEventListener("submit", function(event) {
    playAlbum(event);});


init()

