var nomeCanal = 'backtotriangle';
var upload_id;
$(document).ready(function() {
    $.get("https://www.googleapis.com/youtube/v3/channels", {
        part:'contentDetails',
        forUsername: nomeCanal,
        key: 'AIzaSyBeLqMB2mgw6ThvVcw_u9dUP3cdD4AJnmQ'},
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
                key: 'AIzaSyBeLqMB2mgw6ThvVcw_u9dUP3cdD4AJnmQ'},
        function(data) {
            console.log(data);
        }
        )
    }
});