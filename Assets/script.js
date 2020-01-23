
$(document).ready(function() {
    $("#currentDay").append(moment().format('MMMM Do YYYY'));
    var currentHour = moment().format('HH');

    $(".toDo").each(function (index, element) {
        if (currentHour > $(element).attr("id")) {
            $(element).addClass("past");
        } else if (currentHour === $(element).attr("id")) {
            $(element).addClass("present");
        } else {
            $(element).addClass("future");
        }
    });

    $("#nineSave").click(saveNine);
    $("#tenSave").click(saveTen);
    $("#elevenSave").click(saveEleven);
    $("#twelveSave").click(saveTwelve);
    $("#oneSave").click(saveOne);
    $("#twoSave").click(saveTwo);
    $("#threeSave").click(saveThree);
    $("#fourSave").click(saveFour);
    $("#fiveSave").click(saveFive);

// ---------------------------------------------------------------------------
    // hidden 9:15-9:45 call
    //if click 9 am, show a 9:15, 9:30, and 9:45 am 
    $("#nineTime").click(function() {
        var hiddenTime = document.querySelector(".hide");
        if (hiddenTime.style.display === "none") {
            hiddenTime.style.display = "block";
        } else {
            hiddenTime.style.display = "none";
        }
    })
    // 9:15
    $("#ninefifteenSave").click(saveHidden915);
    function saveHidden915() {
        hidden915 = $(".nineFifteenToDo").val();
        localStorage.setItem("hidden915", hidden915);
    }
    var hidden915 = localStorage.getItem("hidden915", hidden915);
    $(".nineFifteenToDo").val(hidden915);
    // 9:30
    $("#ninethirtySave").click(saveHidden930);
    function saveHidden930() {
        hidden930 = $(".nineThirtyToDo").val();
        localStorage.setItem("hidden930", hidden930);
    }
    var hidden930 = localStorage.getItem("hidden930", hidden930);
    $(".nineThirtyToDo").val(hidden930);
    // 9:45
    $("#ninefourtyfiveSave").click(saveHidden945);
    function saveHidden945() {
        hidden945 = $(".nineFourtyFiveToDo").val();
        localStorage.setItem("hidden945", hidden945);
    }
    var hidden945 = localStorage.getItem("hidden945", hidden945);
    $(".nineFourtyFiveToDo").val(hidden945);
// ----------------------------------------------------------------------------

    var nineAM = localStorage.getItem("nineAM", nineAM);
        $("#09").val(nineAM);
    var tenAM = localStorage.getItem("tenAM", tenAM);
        $("#10").val(tenAM);
    var elevenAM = localStorage.getItem("elevenAM", elevenAM);
        $("#11").val(elevenAM);
    var twelvePM = localStorage.getItem("twelvePM", twelvePM);
        $("#12").val(twelvePM);
    var onePM = localStorage.getItem("onePM", onePM);
        $("#13").val(onePM);
    var twoPM = localStorage.getItem("twoPM", twoPM);
        $("#14").val(twoPM);
    var threePM = localStorage.getItem("threePM", threePM);
        $("#15").val(threePM);
    var fourPM = localStorage.getItem("fourPM", fourPM);
        $("#16").val(fourPM);
    var fivePM =localStorage.getItem("fivePM", fivePM);
        $("#17").val(fivePM);


    function saveNine() {
        nineAM = $("#09").val();
        localStorage.setItem("nineAM", nineAM);
    }
    function saveTen() {
        tenAM = $("#10").val();
        localStorage.setItem("tenAM", tenAM);
    }
    function saveEleven() {
        elevenAM = $("#11").val();
        localStorage.setItem("elevenAM", elevenAM);
    }
    function saveTwelve() {
        twelvePM = $("#12").val();
        localStorage.setItem("twelvePM", twelvePM);
    }
    function saveOne() {
        onePM = $("#13").val();
        localStorage.setItem("onePM", onePM);
    }
    function saveTwo() {
        twoPM = $("#14").val();
        localStorage.setItem("twoPM", twoPM);
    }
    function saveThree() {
        threePM = $("#15").val();
        localStorage.setItem("threePM", threePM);
    }
    function saveFour() {
        fourPM = $("#16").val();
        localStorage.setItem("fourPM", fourPM);
    }
    function saveFive() {
        fivePM = $("#17").val();
        localStorage.setItem("fivePM", fivePM);
    }
})