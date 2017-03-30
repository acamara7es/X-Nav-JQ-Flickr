jQuery(document).ready(function() {
    $("#submit").click(function() {
        tag = $("#tag").val();
        mostrarFotos(tag);
    });

});

function mostrarFotos(tag) {
    $.getJSON("https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
            "tags": tag,
            "tagmode": "all",
            "format": "json"
        })
        .done(function(data) {
            console.log(data);
            $("#fotos").empty();
            if (data.items.length === 0) {
                $("#fotos").append($("<p>").html("No hay resultados que mostrar"));
            }
            $.each(data.items, function(i, item) {
                var new_div = $("<div>").addClass("foto");
                new_div.append($("<p>").html(item.title));
                var link = $("<a>").attr("href", item.link);
                new_div.append(link.html($("<img>").attr("src", item.media.m)));
                new_div.appendTo("#fotos");
            });
        });
};
