var index = 0;
var select = 0;
var sel_val = 0;

$(document).ready(function () {
    change_inf();
    $("#content").html(toHTML(index));

    $("#AddClass").click(function () {
        $("#Flag").addClass("cont-opacity");
    })

    $("#RemoveClass").click(function () {
        $("#Flag").removeClass("cont-opacity");
    })

    $("#ToggleClass").click(function () {
        $("#Flag").toggleClass("cont-opacity");
    })

    $("#Next").click(function () {
        Next();
    })

    $("#ShowList").click(function (){
        ShowList();
    })

    $("#HiddenList").click(function () {
        HiddenList();
    })

    $("#EnableBorder").click(function () {
        EnableBorder();
    })

    $("#DisableBorder").click(function () {
        DisableBorder();
    })

    $("#SearchContury").click(function () {
        SearchContury();
    })

    $("#TurnOnLight").click(function () {
        TurnOnLight();
    })

    $("#TurnOffLight").click(function () {
        TurnOffLight();
    })

    $("#TurnOnLight").hover(function () {
        MouseEnter()
    }, function () {
        MouseLeave()
    })

    $("#ConturyName").on({
        "blur":function () {
            $("#ConturyName").css("background", "white");
        },
        "focus":function () {
            $("#ConturyName").css("background", "pink");
        }
    })

    $("#Show").on("click", function () {
        $("#FireFox").show(500);
    })

    $("#Hide").on("click", function () {
        $("#FireFox").hide("slow");
    })

    $("#FadeIn").on("click", function () {
        $("#FireFox").fadeIn("fast");
    })

    $("#FadeOut").on("click", function () {
        $("#FireFox").fadeOut("normal");
    })

    $("#FadeToggle").on("click", function () {
        $("#FireFox").fadeToggle("slow");
    })

    $("#SlideDown").on("click", function () {
        $("#FireFox").slideDown();
    })

    $("#SlideUp").on("click", function () {
        $("#FireFox").slideUp("fast");
    })

    $("#SlideToggle").on("click", function () {
        $("#FireFox").slideToggle("slow");
    })

    $("#StartAnimate").on("click", function () {
        StartAnimate();
    })

    $("#sel").on({
        "mouseenter": fnToggleClass,
        "mouseleave": fnToggleClass
    });
});

var flag = new Array("../../images/America.png", "../../images/England.png", "../../images/Japan.png");
var caption = new Array("America", "England", "Japan");
var info = new Array("The United States of America (USA), commonly known as the United States (U.S. or US) or America, is a country composed of 50 states, a federal district, five major self-governing territories, and various possessions. At 3.8 million square miles (9.8 million km2), the United States is the world's third or fourth largest country by total area and is slightly smaller than the entire continent of Europe's 3.9 million square miles (10.1 million km2). With a population of over 327 million people, the U.S. is the third most populous country. The capital is Washington, D.C., and the largest city by population is New York. Forty-eight states and the capital's federal district are contiguous in North America between Canada and Mexico. The State of Alaska is in the northwest corner of North America, bordered by Canada to the east and across the Bering Strait from Russia to the west. The State of Hawaii is an archipelago in the mid-Pacific Ocean. The U.S. territories are scattered about the Pacific Ocean and the Caribbean Sea, stretching across nine official time zones. The extremely diverse geography, climate, and wildlife of the United States make it one of the world's 17 megadiverse countries.",
 "England is a country that is part of the United Kingdom. It shares land borders with Wales to the west and Scotland to the north-northwest. The Irish Sea lies west of England and the Celtic Sea lies to the southwest. England is separated from continental Europe by the North Sea to the east and the English Channel to the south. The country covers five-eighths of the island of Great Britain, which lies in the North Atlantic, and includes over 100 smaller islands, such as the Isles of Scilly and the Isle of Wight.",
  "Japan (Japanese: 日本; Nippon [ɲippoɴ] or Nihon [ɲihoɴ]; formally 日本国 About this soundNippon-koku or Nihon-koku, lit. State of Japan) is an island country in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian continent and stretches from the Sea of Okhotsk in the north to the East China Sea and the Philippine Sea in the south.");

var change_inf = function () {
    var sel = $("#jQuery_Selector option:selected").index();

    switch (sel) {
        case 0:
            $("#Selector_Name").text("Tag");
            $("#Example").text("Selecting element by tag name.");
            break;
        case 1:
            $("#Selector_Name").text("Class");
            $("#Example").text("Selecting element by class name.");
            break;
        case 2:
            $("#Selector_Name").text("ID");
            $("#Example").text("Selecting element by property name.");
            break;
        case 3:
            $("#Selector_Name").text("Property");
            $("#Example").text("Selecting element by property name.");
            break;
        case 4:
            $("#Selector_Name").text("Layer");
            $("#Example").text("Selecting element by layer relationship.");
            break;
        case 5:
            $("#Selector_Name").text("Group");
            $("#Example").text("Selecting element by group relationship.");
            break;
        default:
            alert("Error Selector");
            break;
    }
};

var toHTML = function () {
    var fig = "<figure>";
    fig += "<img src=" + "'" + flag[index] + "' " + "width='250' style='margin:10px' id='Flag'>";
    fig += "<figcaption>" + caption[index] + "</figcaption>";
    fig += "</figure>";
    var hm = "<p>" + info[index] + "</p>";
    var content = fig + hm;
    return content;
};

var Next = function () {
    index++;

    if (index >= flag.length) {
        index = 0;
    }

    $("#content").html(toHTML(index));
};

var ShowList = function () {
    $("#content").empty();

    for (var i = 0; i < flag.length; i++) {
        html = "<div class='div-all'"
                 + "<a href='#'>"
                    + "<div class='div-img'>"
                      + "<figure>"
                        + "<img  src=" + "'" + flag[i] + "' width='250' style='margin:10px' id='Flag'>"
                      + "</figure>"
                    + "</div>"
                    + "<div class='div-cont'>"
                      + "<h4>" + caption[i] + "</h4>"
                      + "<p>" + info[i] + "</p>"
                    + "</div>"
                 + "</a>"
               + "</div>"
        $("#content").append(html);
    }
};

var HiddenList = function () {
    $("#content").empty();
    index = 0;
    $("#content").html(toHTML(index));
};

var EnableBorder = function () {
    $("#Flag").attr({"style":"opacity:0.5", "border":"5"});
};

var DisableBorder = function () {
    $("#Flag").removeAttr("style");
    $("#Flag").removeAttr("border");
}

var SearchContury = function () {
    var target = $("#ConturyName").val();
    var find = true;

    if ("America" === target) {
        index = 0;
    }
    else if ("England" === target) {
        index = 1;
    }
    else if ("Japan" === target) {
        index = 2;
    }
    else {
        alert("No Data");
        find = false;
    }

    if (find) {
        $("#content").html(toHTML(index));
    }
};

var TurnOnLight = function () {
    $(".btn").css({"boder-color":"black",
                   "color":"black",
                   "background-color":"white"});
    $("body").css({"background-color":"white",
                   "color":"black"});
};

var TurnOffLight = function () {
    $(".btn").css({"boder-color":"white",
                   "color":"white",
                   "background-color":"black"});
    $("body").css({"background-color":"black",
                   "color":"white"});
};

var MouseEnter = function () {
    $("#TurnOnLight").css({"background-color":"yellow",
                    "color":"green"});
};

var MouseLeave = function () {
    $("#TurnOnLight").css({"background-color":"white",
                    "color":"black"});
};

function StartAnimate() {
    $("#FireFox2").animate(
        {marginLeft: '+=50px', marginTop: '+=5px'}, "slow",
    function (){
        $("#FireFox2").animate(
        {marginLeft: '-=50px', marginTop: '-=5px'}, "fast");
    });
};

function fnToggleClass() {
    $("#about").toggleClass("active");
};
