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
                    maxResults: 12,
                    playlistId: id,
                    key: 'AIzaSyA6SGlo9kJELISv7iTqEKTpUB7ZEgkCPlI'},
            function(data) {
                var imagem;
                var arquivo;
                $.each(data.items, function (i, item) {
                    imagem = item.snippet.thumbnails.medium.url;
                    arquivo = '<li><img src= "' + imagem + '"/></li>';
                    $('div#janela ul').append(arquivo);
                });
            }
        )
    }
});