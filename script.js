/* =====================================
   بدون تهتهه
   Game Logic
===================================== */


/* =====================================
   بيانات اللعبة
===================================== */

const words = [

    ["شقة", "مفروشة"],
    ["لمبة", "منورة"],
    ["عربية", "مكسورة"],
    ["قطة", "بتجري"],
    ["كرسي", "مكسور"],
    ["قهوة", "ساقعة"],
    ["بطاطس", "محمرة"],
    ["باب", "مفتوح"],
    ["شباك", "مقفول"],
    ["تليفزيون", "مكسور"],
    ["جزمة", "مبلولة"],
    ["موبايل", "واقع"],
    ["كوباية", "مليانة"],
    ["سرير", "مكركب"],
    ["أوضة", "مقفولة"],
    ["عجلة", "مفرغة"],
    ["موتوسيكل", "سريع"],
    ["بيت", "قديم"],
    ["شارع", "زحمة"],
    ["تاكسي", "واقف"],
    ["أسانسير", "عطلان"],
    ["كمبيوتر", "سخن"],
    ["لاب", "مفتوح"],
    ["كتاب", "قديم"],
    ["شنطة", "تقيلة"],
    ["قلم", "مكسور"],
    ["ترابيزة", "مليانة"],
    ["تلاجة", "فاضية"],
    ["مطبخ", "مكركب"],
    ["أكل", "سخن"],
    ["عصير", "متلج"],
    ["كوباية", "مكسورة"],
    ["ساعة", "واقفة"],
    ["مروحة", "شغالة"],
    ["تكييف", "ساقع"],
    ["باب", "مخلوع"],
    ["حبل", "مقطوع"],
    ["كرات", "مبعثرة"],
    ["كتاب", "مفتوح"],
    ["كشكول", "مبلول"],
    ["مفتاح", "ضايع"],
    ["فلوس", "مستخبية"],
    ["محفظة", "فاضية"],
    ["شارع", "مقفول"],
    ["محل", "مزدحم"],
    ["مطعم", "فاضي"],
    ["ساندوتش", "ناقص"],
    ["بيتزا", "باردة"],
    ["كوباية", "سخنة"],
    ["مياه", "متلجة"],
    ["مخدة", "ناعمة"],
    ["بطانية", "تقيلة"],
    ["دولاب", "مليان"],
    ["مكتب", "مكركب"],
    ["كرسي", "متحرك"],
    ["لمبة", "مطفية"],
    ["شاحن", "مقطوع"],
    ["سماعة", "مكسورة"],
    ["ريموت", "ضايع"],
    ["تليفون", "بيرن"],
    ["منبه", "بيرن"],
    ["ساعة", "سريعة"],
    ["عربية", "واقفة"],
    ["أتوبيس", "زحمة"],
    ["قطر", "متأخر"],
    ["طيارة", "طائرة"],
    ["كورة", "طائرة"],
    ["قطة", "نايمة"],
    ["كلب", "بيجري"],
    ["عصفورة", "طائرة"],
    ["سمكة", "بتعوم"],
    ["ولد", "بيجري"],
    ["بنت", "بتضحك"],
    ["راجل", "بيجري"],
    ["واحد", "نايم"],
    ["واحد", "مستعجل"],
    ["واحد", "تايه"],
    ["واحد", "جعان"],
    ["واحد", "عطشان"],
    ["واحد", "مبسوط"],
    ["واحد", "زعلان"],
    ["واحد", "متوتر"],
    ["واحد", "مستخبي"],
    ["واحد", "بيتكلم"],
    ["واحد", "بيضحك"],
    ["واحد", "بيعيط"]

];


/* =====================================
   متغيرات اللعبة
===================================== */

let teams = [
    {
        name: "",
        players: [],
        score: 0,
        position: 0
    },
    {
        name: "",
        players: [],
        score: 0,
        position: 0
    }
];

let currentTeamIndex = 0;

let roundNumber = 1;

let timeLimit = 60;
let timeLeft = 60;

let timerInterval = null;

let card1Opened = false;
let card2Opened = false;

let currentWords = [];

let gameEnded = false;


/* =====================================
   عناصر الصفحة
===================================== */

const setupScreen = document.getElementById("setupScreen");
const gameScreen = document.getElementById("gameScreen");
const transitionScreen = document.getElementById("transitionScreen");
const winnerScreen = document.getElementById("winnerScreen");

const timerElement = document.getElementById("timer");

const currentTeamElement = document.getElementById("currentTeam");

const instruction = document.getElementById("instruction");

const answerButtons = document.getElementById("answerButtons");

const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");

const word1 = document.getElementById("word1");
const word2 = document.getElementById("word2");

const blueScore = document.getElementById("blueScore");
const redScore = document.getElementById("redScore");

const blueTeamName = document.getElementById("blueTeamName");
const redTeamName = document.getElementById("redTeamName");

const bluePiece = document.getElementById("bluePiece");
const redPiece = document.getElementById("redPiece");

const roundNumberElement = document.getElementById("roundNumber");


/* =====================================
   بداية اللعبة
===================================== */

function startGame() {

    const team1Name =
        document.getElementById("team1Name").value.trim() ||
        "الفريق الأزرق";

    const player1 =
        document.getElementById("player1Name").value.trim() ||
        "اللاعب الأول";

    const player2 =
        document.getElementById("player2Name").value.trim() ||
        "اللاعب الثاني";


    const team2Name =
        document.getElementById("team2Name").value.trim() ||
        "الفريق الأحمر";

    const player3 =
        document.getElementById("player3Name").value.trim() ||
        "اللاعب الأول";

    const player4 =
        document.getElementById("player4Name").value.trim() ||
        "اللاعب الثاني";


    timeLimit =
        Number(document.getElementById("timeSelect").value);


    teams = [

        {
            name: team1Name,
            players: [player1, player2],
            score: 0,
            position: 0
        },

        {
            name: team2Name,
            players: [player3, player4],
            score: 0,
            position: 0
        }

    ];


    currentTeamIndex = 0;

    roundNumber = 1;

    gameEnded = false;


    blueTeamName.textContent = teams[0].name;
    redTeamName.textContent = teams[1].name;

    blueScore.textContent = "0";
    redScore.textContent = "0";


    setupScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");


    updateTeamUI();

    prepareCards();

}


/* =====================================
   تجهيز الدور
===================================== */

function prepareCards() {

    clearInterval(timerInterval);

    timeLeft = timeLimit;

    card1Opened = false;
    card2Opened = false;


    card1.classList.remove("open");
    card2.classList.remove("open");

    document.getElementById("card1Container")
        .classList.remove("disabled");

    document.getElementById("card2Container")
        .classList.remove("disabled");


    answerButtons.classList.add("hidden");


    timerElement.textContent = timeLeft;

    timerElement.classList.remove("danger");


    currentWords = getRandomWords();


    word1.textContent = currentWords[0];

    word2.textContent = currentWords[1];


    instruction.textContent =
        "افتح أول كرت عشان يبدأ الوقت";


    updateTeamUI();

}


/* =====================================
   اختيار كلمتين عشوائيتين
===================================== */

function getRandomWords() {

    const randomIndex =
        Math.floor(Math.random() * words.length);

    return words[randomIndex];

}


/* =====================================
   فتح الكروت
===================================== */

function openCard(number) {

    if (gameEnded) return;


    if (number === 1 && !card1Opened) {

        card1Opened = true;

        card1.classList.add("open");

        startTimer();

        instruction.textContent =
            "افتح الكرت الثاني";


        return;
    }


    if (
        number === 2 &&
        card1Opened &&
        !card2Opened
    ) {

        card2Opened = true;

        card2.classList.add("open");


        instruction.textContent =
            "وصف الكلمتين لزميلك!";


        answerButtons.classList.remove("hidden");

    }

}


/* =====================================
   تشغيل الوقت
===================================== */

function startTimer() {

    clearInterval(timerInterval);


    timerInterval = setInterval(() => {

        timeLeft--;

        timerElement.textContent = timeLeft;


        if (timeLeft <= 10) {

            timerElement.classList.add("danger");

        }


        if (timeLeft <= 0) {

            clearInterval(timerInterval);

            timeOut();

        }

    }, 1000);

}


/* =====================================
   الإجابة
===================================== */

function answer(isCorrect) {

    if (!card1Opened || !card2Opened) {
        return;
    }


    if (isCorrect) {

        correctAnswer();

    } else {

        wrongAnswer();

    }

}


/* =====================================
   صح
===================================== */

function correctAnswer() {

    teams[currentTeamIndex].score++;

    teams[currentTeamIndex].position++;


    updateScores();

    updateBoard();


    /*
       لو وصل الفريق للنهاية
    */

    if (teams[currentTeamIndex].position >= 10) {

        endGame();

        return;

    }


    /*
       إخفاء أزرار الإجابة
    */

    answerButtons.classList.add("hidden");


    /*
       حركة الكروت
    */

    card1.style.transform =
        "translateX(120px) rotate(15deg)";

    card2.style.transform =
        "translateX(-120px) rotate(-15deg)";


    setTimeout(() => {

        card1.style.transform = "";
        card2.style.transform = "";

        prepareCards();

    }, 350);

}


/* =====================================
   غلط
===================================== */

function wrongAnswer() {

    clearInterval(timerInterval);


    /*
       لا توجد نقطة
       والدور ينتهي فورًا
    */

    showTransition(
        "❌",
        "غلط!",
        `${teams[currentTeamIndex].name} خلص دوره`
    );

}


/* =====================================
   انتهاء الوقت
===================================== */

function timeOut() {

    showTransition(
        "⏰",
        "الوقت خلص!",
        `${teams[currentTeamIndex].name} خلص دوره`
    );

}


/* =====================================
   شاشة الانتقال
===================================== */

function showTransition(icon, title, text) {

    gameScreen.classList.add("hidden");

    transitionScreen.classList.remove("hidden");


    document.getElementById("transitionIcon")
        .textContent = icon;

    document.getElementById("transitionTitle")
        .textContent = title;

    document.getElementById("transitionText")
        .textContent = text;


    const nextTeam =
        teams[currentTeamIndex === 0 ? 1 : 0];


    document.querySelector(
        ".transition-content button"
    ).textContent =
        `ابدأ دور ${nextTeam.name}`;

}


/* =====================================
   الدور التالي
===================================== */

function nextTurn() {

    currentTeamIndex =
        currentTeamIndex === 0 ? 1 : 0;


    roundNumber++;


    transitionScreen.classList.add("hidden");

    gameScreen.classList.remove("hidden");


    prepareCards();

}


/* =====================================
   تحديث بيانات الفريق
===================================== */

function updateTeamUI() {

    const team =
        teams[currentTeamIndex];


    currentTeamElement.textContent =
        currentTeamIndex === 0
            ? `🔵 ${team.name}`
            : `🔴 ${team.name}`;


    roundNumberElement.textContent =
        `الجولة ${roundNumber}`;


    instruction.textContent =
        "افتح أول كرت عشان يبدأ الوقت";

}


/* =====================================
   تحديث النقاط
===================================== */

function updateScores() {

    blueScore.textContent =
        teams[0].score;

    redScore.textContent =
        teams[1].score;

}


/* =====================================
   تحديث البورد
===================================== */

function updateBoard() {

    const track =
        document.querySelector(".board-track");

    const cells =
        track.querySelectorAll(".board-cell");


    /*
       عرض البورد 10 خانات
       نحسب مكان القطعة كنسبة مئوية
    */

    const maxPosition = 10;


    const bluePercent =
        (teams[0].position / maxPosition) * 100;


    const redPercent =
        (teams[1].position / maxPosition) * 100;


    /*
       لأن القطعة absolute
       نحركها على طول البورد
    */

    bluePiece.style.left =
        `calc(${bluePercent}% - 13px)`;


    redPiece.style.left =
        `calc(${redPercent}% - 13px)`;

}


/* =====================================
   نهاية اللعبة
===================================== */

function endGame() {

    gameEnded = true;

    clearInterval(timerInterval);


    const blue = teams[0];

    const red = teams[1];


    let winner;


    if (blue.score > red.score) {

        winner = blue;

    } else if (red.score > blue.score) {

        winner = red;

    } else {

        /*
           في حالة التعادل
        */

        document.getElementById("winnerName")
            .textContent = "تعادل!";

        document.getElementById("finalScore")
            .textContent =
            `${blue.score} - ${red.score}`;

        gameScreen.classList.add("hidden");

        winnerScreen.classList.remove("hidden");

        return;

    }


    document.getElementById("winnerName")
        .textContent = winner.name;


    document.getElementById("finalScore")
        .textContent =
        `${blue.score} - ${red.score}`;


    gameScreen.classList.add("hidden");

    winnerScreen.classList.remove("hidden");

}


/* =====================================
   إعادة اللعبة
===================================== */

function restartGame() {

    clearInterval(timerInterval);

    winnerScreen.classList.add("hidden");

    setupScreen.classList.remove("hidden");


    /*
       تصفير البيانات
    */

    teams[0].score = 0;
    teams[0].position = 0;

    teams[1].score = 0;
    teams[1].position = 0;

    currentTeamIndex = 0;

    roundNumber = 1;

    gameEnded = false;


    bluePiece.style.left = "0";
    redPiece.style.left = "0";

}
