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
                
                console.log(data);
                $.each(data.items, function (i, item) {
                    imagem = item.snippet.thumbnails.medium.url;
                    titulo = item.snippet.title;
                    data = formatarData(item.snippet.publishedAt);
                    descricao = item.snippet.description;
                    arquivo = '<li class= "principal"><div class="foto"><img src= "' + imagem + '"/><div class= "legenda"><h5>' + titulo + '</h5><p>' + data + '</p></div></div></li>';
                    $('div#janela ul').append(arquivo);
                });
            }
        )
    }

    function formatarData (data) {
        return data.substr(8,2) + '/' + data.substr(5,2) + "/" + data.substr(0,4);
    }
});