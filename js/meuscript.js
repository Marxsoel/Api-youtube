var nomeCanal = 'backtotriangle';
var upload_id;
$(document).ready(function() {
    $.get("https://www.googleapis.com/youtube/v3/channels", {
        part:'contentDetails',
        forUsername: nomeCanal,
        key: 'AIzaSyA6SGlo9kJELISv7iTqEKTpUB7ZEgkCPlI'},
        function(data) {
            upload_id = data.items[0].contentDetails.relatedPlaylists.uploads;
            pergarVideos(upload_id);
        }
    )

    function pergarVideos(id) {
        $.get("https://www.googleapis.com/youtube/v3/playlistItems", {
                part:'snippet',
                maxResults: 10,
                playlistId: id,
                key: 'AIzaSyA6SGlo9kJELISv7iTqEKTpUB7ZEgkCPlI'},
        function(data) {
            console.log(data);
        }
        )
    }
});