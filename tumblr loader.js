get_data = function (data) {
  document.getElementById("page-header").innerHTML 
    += "<style>#containingDiv{width: 200px;height: 200px;} #containingDiv img{width: 100%;height: 100%;}"
    + "#containingDiv data-orig-src{width: 100%;height: 100%;}</style>";
  document.getElementById("page-header").innerHTML += "<div id=\"wrapperhc\">";
  document.getElementById("wrapperhc").innerHTML += "<div id=\"containingDiv\" style=\"float: left; width: 33%; \">"
    + data.response.posts[0].body + "</div>";
  document.getElementById("wrapperhc").innerHTML += "<div  id=\"containingDiv\"  style=\"display: inline-block; width: 33%;\">"
    + data.response.posts[1].body  + "</div>";
  document.getElementById("wrapperhc").innerHTML += "<div  id=\"containingDiv\"  style=\"float: right; width: 33%;\">"
    + data.response.posts[2].body + "</div>";
  document.getElementById("page-header").innerHTML += "</div>";
  console.log("Fetched posts");
};

var hunc_tumblr_jsonp = jQuery.ajax({
   url: "//api.tumblr.com/v2/blog/hungcalfreact.tumblr.com/posts/text?api_key=-&limit=3",
   dataType: "jsonp",
   jsonp: "jsonp"
}).success(get_data);
