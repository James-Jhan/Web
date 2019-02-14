var select = 0;
var sel_val = 0;

$(document).ready(function () {
    $("div-select").empty();

    for (var i = 1; i <= 7; i++) {
        content =
            "<div id='div" + i + "'>" +
                "<img src='../../images/example2_fig/pic_" + i + ".png'>" +
            "</div>";
        $("#div-select").append(content);
        $("#div" + i).on("click", {num : i}, fnChange);
    }

    iconShow();

    $("#btnPrev").on("click", fnPrev);
    $("#btnNext").on("click", fnNext);
});

function fnChange(event) {
    var filename = "../../images/example2_fig/pic_" + event.data.num + ".png";
    $("#show").attr("src", filename);
    $("#show").hidden().fadeIn(1000);
};

function iconShow() {
    if (select < 1) {
        $("btnPrev").attr("style", "display:none;");
    }
    else if (select > 1) {
        $("btnNext").attr("style", "display:none;");
    }
    else {
        $("btnPrev").removeAttr("style");
        $("btnNext").removeAttr("style");
    }
};

function fnPrev() {
    if (select != 0) {
        select -= 1;
        sel_val += 100;
        $("#div-select").css("left", sel_val + "%");
    }
    iconShow();
};

function fnNext() {
    if (select <=1) {
        select += 1;
        sel_val -= 100;
        $("#div-select").css("left", sel_val + "%");
    }
    iconShow();
};
