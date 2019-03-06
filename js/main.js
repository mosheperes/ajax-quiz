//Run jQuery after the document is fully loaded.
$(document).ready(
    //The function that does the stuff.
    function () {
        $('#search').append('<input>');
        $('#button').append('<button>');
        $('#button').bind('click', function (e) {
                    e.preventDefault();
                    let input=$("#search").val();
            $.ajax('http://api.tvmaze.com/singlesearch/shows?q='+input+'&embed=episodes', {
                method: "GET",
                dataType: "json"
            })
            //After the data comes back, use this function
                .done(
                    function (data) {
                        //Add the name
                        $('#name').text(data.name);
                        $('#episodeList').text('');
                        //Add the episodes
                        data._embedded.episodes.forEach(function (episode) {
                            $('#episodeList').append('<tr>'+
                                '<td>' + episode.season + '</td>' +
                                '<td>' + episode.number + '</td>' +
                                '<td>' + episode.name + '</td>' +
                                '<td>' + episode.summary + '</td>' +
                                +' </tr>')
                        })
                    })
        })

        //Make the AJAX call

    }
)
