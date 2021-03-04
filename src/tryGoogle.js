var params = new URLSearchParams(window.location.search);

if (params.has("q")) {

    var searchText = params.get("q");
    var googleUri = "https://google.com/search?q=" + encodeURIComponent(searchText);

    var anchor = $("<a>");
    anchor.attr("href", googleUri);
    anchor.attr("title", "Try using Google");
    anchor.attr("target", "_blank");
    anchor.attr("rel", "noopener nofollow noreferrer");
    anchor.text("Try Google");

    $(".search-filters").append(anchor);
}