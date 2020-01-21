
$(document).ready(function() {
    $("#currentDay").append(moment().format('MMMM Do YYYY'));

    $("#nineSave").click(saveNine);
    $("#tenSave").click(saveTen);
    $("#elevenSave").click(saveEleven);
    $("#twelveSave").click(saveTwelve);
    $("#oneSave").click(saveOne);
    $("#twoSave").click(saveTwo);
    $("#threeSave").click(saveThree);
    $("#fourSave").click(saveFour);
    $("#fiveSave").click(saveFive);


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
        hidden915 = $("#nineFifteenToDo").val();
        localStorage.setItem("hidden915", hidden915);
    }
    var hidden915 = localStorage.getItem("hidden915", hidden915);
    $("#nineFifteenToDo").val(hidden915);
    // 9:30
    $("#ninethirtySave").click(saveHidden930);
    function saveHidden930() {
        hidden930 = $("#nineThirtyToDo").val();
        localStorage.setItem("hidden930", hidden930);
    }
    var hidden930 = localStorage.getItem("hidden930", hidden930);
    $("#nineThirtyToDo").val(hidden930);
    // 9:45
    $("#ninefourtyfiveSave").click(saveHidden945);
    function saveHidden945() {
        hidden945 = $("#nineFourtyFiveToDo").val();
        localStorage.setItem("hidden945", hidden945);
    }
    var hidden945 = localStorage.getItem("hidden945", hidden945);
    $("#nineFourtyFiveToDo").val(hidden945);


    var nineAM = localStorage.getItem("nineAM", nineAM);
        $("#nineToDo").val(nineAM);
    var tenAM = localStorage.getItem("tenAM", tenAM);
        $("#tenToDo").val(tenAM);
    var elevenAM = localStorage.getItem("elevenAM", elevenAM);
        $("#elevenToDo").val(elevenAM);
    var twelvePM = localStorage.getItem("twelvePM", twelvePM);
        $("#twelveToDo").val(twelvePM);
    var onePM = localStorage.getItem("onePM", onePM);
        $("#oneToDo").val(onePM);
    var twoPM = localStorage.getItem("twoPM", twoPM);
        $("#twoToDo").val(twoPM);
    var threePM = localStorage.getItem("threePM", threePM);
        $("#threeToDo").val(threePM);
    var fourPM = localStorage.getItem("fourPM", fourPM);
        $("#fourToDo").val(fourPM);
    var fivePM =localStorage.getItem("fivePM", fivePM);
        $("#fiveToDo").val(fivePM);


    function saveNine() {
        nineAM = $("#nineToDo").val();
        localStorage.setItem("nineAM", nineAM);
    }
    function saveTen() {
        tenAM = $("#tenToDo").val();
        localStorage.setItem("tenAM", tenAM);
    }
    function saveEleven() {
        elevenAM = $("#elevenToDo").val();
        localStorage.setItem("elevenAM", elevenAM);
    }
    function saveTwelve() {
        twelvePM = $("#twelveToDo").val();
        localStorage.setItem("twelvePM", twelvePM);
    }
    function saveOne() {
        onePM = $("#oneToDo").val();
        localStorage.setItem("onePM", onePM);
    }
    function saveTwo() {
        twoPM = $("#twoToDo").val();
        localStorage.setItem("twoPM", twoPM);
    }
    function saveThree() {
        threePM = $("#threeToDo").val();
        localStorage.setItem("threePM", threePM);
    }
    function saveFour() {
        fourPM = $("#fourToDo").val();
        localStorage.setItem("fourPM", fourPM);
    }
    function saveFive() {
        fivePM = $("#fiveToDo").val();
        localStorage.setItem("fivePM", fivePM);
    }
})