document.write(
"    <nav class='navbar navbar-default navbar-fixed-top' data-nav-highlight='true'>"+
"      <div class='container menu'>"+
"        <div class='navbar-header'>"+
"          <button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar' aria-expanded='false' aria-controls='navbar'>"+
"            <span class='icon-bar'></span>"+
"            <span class='icon-bar'></span>"+
"            <span class='icon-bar'></span>"+
"          </button>"+
"          <a class='navbar-brand' href='index.html'>binaryns.github.io/www/</a>"+
"        </div>"+
"        <div id='navbar' class='collapse navbar-collapse'>"+
"          <ul class='nav navbar-nav'>"+
"            <li><a href='models.html'>models</a></li>"+
"            <li><a href='contribute.html'>contribute</a></li>"+
"          </ul>"+
"        </div><!--/.nav-collapse -->"+
"      </div>"+
"    </nav>"
);

$(function () {
    $("nav[data-nav-highlight='true']").find("li").children("a").each(function () {
        var language = window.location.pathname.match(/\/(de|en)\//)[1];
        if ($(this).attr("href") === window.location.pathname.split('/').pop() ||
            $(this).attr("href").match(new RegExp('\/('+language+')\/'))) {
            $(this).parent().addClass("active");
        } else {
            $(this).parent().removeClass("active");
        }
    });
});
