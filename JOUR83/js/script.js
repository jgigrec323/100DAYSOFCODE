document.getElementById('search').addEventListener('click', function() {
    const songSearch = document.getElementById('songSearch').value;
    console.log(songSearch);

    fetch(`https://api.lyrics.ovh/suggest/${songSearch}`)
        .then(res => res.json())
        .then(data => {
            document.getElementById('searchResult').innerHTML = '';
            for (let i = 0; i < 10; i++) {
                console.log(data.data);
                const songName = data.data[i].title;
                const albumBy = data.data[i].artist.name;

                document.getElementById('searchResult').innerHTML += `<div >
        <div class="single-result row align-items-center my-3 p-3">
            <div class="col-md-9">
                <h3 id="lyricsName" class="lyrics-name">${songName}</h3>
                <p  class="author lead">Album by <span id="albumName">${albumBy}</span></p>
            </div>
            <div class="col-md-3 text-md-right text-center">
            <a style="color:white; text-decoration: none;" href="#"><button onclick="getLyrics('${songName}','${albumBy}')" class="btn btn-success">Get Lyrics</button> </a>
            </div>
        </div>
        </div>
        `;
            }
        })
        .catch(err => alert('Not Found'))

})


function getLyrics(title, name) {
    fetch(`https://api.lyrics.ovh/v1/${name}/${title}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.lyrics);
            if (data.lyrics == undefined) {
                document.getElementById('lyrics').innerText = 'Sorry!! lyrics not found';
            } else {
                document.getElementById('lyrics').innerText = data.lyrics;

            }
        })

}