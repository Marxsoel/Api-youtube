$(document).ready(function() {
    $.get("https://www.googleapis.com/youtube/v3/videos", {
            part: 'statistics',
            id: 'VpeZvzi482o',
            key: 'AIzaSyA6SGlo9kJELISv7iTqEKTpUB7ZEgkCPlI'},
            function(data) {
                console.log(data);
            }
    )
});