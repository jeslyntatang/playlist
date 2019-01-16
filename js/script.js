/* global $ */

// BELOW Update the songs to your favorites songs. There should be at least 4.
var songs = [
    "Ivy",
    "Bloom",
    "Americans",
    "She Will Be Loved",
    "Homemade Dynamite",
    "LA Devotee"
];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images = [
    "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Blonde_-_Frank_Ocean.jpeg/220px-Blonde_-_Frank_Ocean.jpeg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Troye_Sivan_-_Bloom_%28Official_Album_Cover%29.png/220px-Troye_Sivan_-_Bloom_%28Official_Album_Cover%29.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/DirtyComputer.png/220px-DirtyComputer.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Maroon_5_-_Songs_About_Jane.png/220px-Maroon_5_-_Songs_About_Jane.png",
    "https://vignette.wikia.nocookie.net/thelorde/images/8/81/Hdr.jpg/revision/latest?cb=20170914152855",
    "https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Death_of_a_Bachelor.jpg/220px-Death_of_a_Bachelor.jpg"
    ]

var artists = [
    "Frank Ocean",
    "Troye Sivan",
    "Janelle Monae",
    "Maroon 5",
    "Lorde",
    "Panic! at the Disco"
    ]
    
var lengths = [
    "4:10",
    "3:43",
    "4:06",
    "4:18",
    "3:09",
    "3:17"
    ]

var vids = [
    "https://www.youtube.com/watch?v=x6QJPJO2w40",
    "https://https://www.youtube.com/watch?v=S8gYErP4ZDQ",
    "https://www.youtube.com/watch?v=POZNheF-KdY",
    "https://www.youtube.com/watch?v=MzrVMkcVD4M",
    "https://www.youtube.com/watch?v=OQsJ_FCCIMQ",
    "https://www.youtube.com/watch?v=7dQ1xiy-4hY"
    ]



function displaySongInfo(){
    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
    images.forEach(function(pic) {
        $("#images").append(`<img src = "${pic}">`);
    });
    artists.forEach(function(artist) {
        $("#artists").append("<p>" + artist + "</p>");
    });
    lengths.forEach(function(minutes) {
        $("#lengths").append("<p>" + minutes + "</p>");
    });
    vids.forEach(function(link) {
        $("#links").append(`<a href = ${link} > Video</a>`);
    });
    for (var i = 0; i<songs.length;i++) {
        $("#deletecol").append('<button class="testbutton" id="'+i+'">Delete Song</button>');
    }
}

$('.testbutton').click(function()  {
    alert("hsjfj");
    console.log("hksf");
});


function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#artists").empty();
    $("#lengths").empty();
    $("#images").empty();
    $("#links").empty();
    $("#deletecol").empty();
}


function addSongInfo(){
    var songName = $("#song").val();
    songs.push(songName);
    // BELOW write the code to add new items to each of the other arrays
    var artistName = $("#artist").val();
    artists.push(artistName);
    var lengthName = $("#length").val();
    lengths.push(lengthName);
    var imageName = $("#image").val();
    images.push(imageName);
    var linkName = $("#link").val();
    vids.push(linkName);
}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

$("#delete").click(function() {
    emptySongInfo();
});

displaySongInfo();
