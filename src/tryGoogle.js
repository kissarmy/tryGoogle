//get actual language from duckduckgo.com HTML tag
var getActualLanguage = function(){
    if(document.getElementsByTagName('html')[0].getAttribute('lang')){
        var lng = document.getElementsByTagName('html')[0].getAttribute('lang');
        if(lng.length != 5){return "en-EN";};
        return lng;
    } else {return "en-EN";};
;};

//return translate for "Try Google"
var getTranslate = function(){
    var actualLng = getActualLanguage();
    actualLng = actualLng.toLowerCase();    // en-EN to en-en

    //set translate - new Array("name", "title")
    if(actualLng=="cs-cz"){return ["Zkusit Google", "Zkusit hledat Googlem"];};                     // Czech language
    if(actualLng=="sk-sk"){return ["Vyskúšat Google", "Vyskúšajte vyhľadávanie v Google"];};        // Slovak language
    if(actualLng=="de-de"){return ["Versuchen Sie Google", "Versuchen Sie eine Google-Suche"];};    // German language
    if(actualLng=="de-at"){return ["Versuchen Sie Google", "Versuchen Sie eine Google-Suche"];};    // German (Austria) language
    
    //return default translate
    return ["Try Google", "Try using Google"];  // default translate in english;
;};



var params = new URLSearchParams(window.location.search);

if (params.has("q")) {

    var searchText = params.get("q");
    var googleUri = "https://google.com/search?q=" + encodeURIComponent(searchText);

    var translate = getTranslate();

    var anchor = $("<a>");
    anchor.attr("href", googleUri);
    //anchor.attr("title", "Try using Google");
    anchor.attr("title", translate[1]);
    anchor.attr("target", "_blank");
    anchor.attr("rel", "noopener nofollow noreferrer");
    //anchor.attr("class", "dropdown__button");
    //anchor.text("Try Google");
    anchor.text(translate[0]);

    $(".search-filters").append(anchor);
;};


