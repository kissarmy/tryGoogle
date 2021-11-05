var params = new URLSearchParams(window.location.search);

if (params.has("q")) {

    var searchText = params.get("q");
    var googleUri = "https://google.com/search?q=" + encodeURIComponent(searchText);

    var anchor = document.createElement("a");
    anchor.setAttribute("href", googleUri);
    anchor.setAttribute("title", "Try using Google");
    anchor.setAttribute("target", "_blank");
    anchor.setAttribute("rel", "noopener nofollow noreferrer");
    anchor.innerText = "Try Google";

    document.querySelector(".search-filters").appendChild(anchor);
}
