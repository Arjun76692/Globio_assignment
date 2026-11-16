// ============================================================
// GERMAN A1 READINESS CHECK — "Am I Exam-Ready?"
// ============================================================
// Scoring: Simple percentage per skill (Vocab, Grammar, Reading)
// Overall score = total correct / total questions × 100
// Pass threshold: 60% (mirrors the real Goethe/ÖSD A1 exam)
// ============================================================


// ===== QUESTION BANK =====
// 15 questions: 5 Vocabulary, 5 Grammar, 5 Reading
// Each question has a skill, topic, and recommendation key

const questions = [

    // ——— VOCABULARY (5 questions) ———

    {
        skill: "Vocabulary",
        topic: "common-phrases",
        question: 'What does "Entschuldigung" mean?',
        options: ["Thank you", "Excuse me / Sorry", "Good evening", "Goodbye"],
        correct: 1
    },
    {
        skill: "Vocabulary",
        topic: "telling-time",
        question: '"Es ist Viertel nach zehn." — What time is it?',
        options: ["9:45", "10:15", "10:45", "9:15"],
        correct: 1
    },
    {
        skill: "Vocabulary",
        topic: "food",
        question: 'Which word means "bread"?',
        options: ["Brücke", "Brot", "Bruder", "Brief"],
        correct: 1
    },
    {
        skill: "Vocabulary",
        topic: "professions",
        question: 'What does "Krankenschwester" mean?',
        options: ["Teacher", "Sister", "Nurse", "Doctor"],
        correct: 2
    },
    {
        skill: "Vocabulary",
        topic: "places",
        question: '"der Bahnhof" means:',
        options: ["The airport", "The hospital", "The train station", "The bus stop"],
        correct: 2
    },

    // ——— GRAMMAR (5 questions) ———

    {
        skill: "Grammar",
        topic: "verb-conjugation",
        question: 'Complete the sentence: "Er ___ jeden Tag Fußball."',
        options: ["spiele", "spielst", "spielt", "spielen"],
        correct: 2
    },
    {
        skill: "Grammar",
        topic: "noun-genders",
        question: 'Choose the correct article: "___ Lampe ist neu."',
        options: ["Der", "Die", "Das", "Ein"],
        correct: 1
    },
    {
        skill: "Grammar",
        topic: "accusative-case",
        question: 'Accusative case: "Ich trinke ___ Kaffee."',
        options: ["der", "die", "den", "das"],
        correct: 2
    },
    {
        skill: "Grammar",
        topic: "word-order",
        question: "Which question is grammatically correct?",
        options: [
            "Wohin du gehst?",
            "Wo gehst du?",
            "Wohin gehst du?",
            "Gehst wohin du?"
        ],
        correct: 2
    },
    {
        skill: "Grammar",
        topic: "modal-verbs",
        question: 'Complete: "Ich ___ morgen nicht arbeiten."',
        options: ["müsse", "musst", "muss", "müssen"],
        correct: 2
    },

    // ——— READING (5 questions) ———

    {
        skill: "Reading",
        topic: "reading-emails",
        passage: "Liebe Maria,<br>ich komme am Freitag um 18 Uhr. Können wir zusammen essen gehen?<br>Liebe Grüße, Anna",
        question: "When is Anna coming?",
        options: [
            "Thursday at 6 PM",
            "Friday at 6 PM",
            "Friday at 8 PM",
            "Saturday at 6 PM"
        ],
        correct: 1
    },
    {
        skill: "Reading",
        topic: "reading-signs",
        passage: "Öffnungszeiten:<br>Mo–Fr 8:00–17:00<br>Sa 9:00–13:00<br>So geschlossen",
        question: "When is this place closed all day?",
        options: ["Saturday", "Monday", "Sunday", "Friday"],
        correct: 2
    },
    {
        skill: "Reading",
        topic: "reading-ads",
        passage: "Zimmer frei: 2-Zimmer-Wohnung, 65 m², Küche, Bad, 500 € kalt, ab sofort.<br>Tel: 030-789456",
        question: "What is being offered?",
        options: ["A job", "An apartment", "A car", "A language course"],
        correct: 1
    },
    {
        skill: "Reading",
        topic: "reading-schedules",
        passage: "Deutschkurs A1<br>Montag und Mittwoch<br>9:00–11:30 Uhr, Raum 204",
        question: "How often per week is the German course?",
        options: ["Once", "Twice", "Three times", "Every day"],
        correct: 1
    },
    {
        skill: "Reading",
        topic: "reading-notes",
        passage: "Hallo Tom,<br>ich bin im Supermarkt. Milch und Brot sind im Kühlschrank.<br>Bis später! Lisa",
        question: "Where is Lisa right now?",
        options: ["At home", "At the supermarket", "In the kitchen", "At work"],
        correct: 1
    }
];


// ===== RECOMMENDATION DEFINITIONS =====
// Mapped by topic key. When a learner gets a question wrong,
// the recommendation for that topic is surfaced.

const recommendationMap = {
    "common-phrases": {
        title: "Everyday Phrases & Greetings",
        tip: "Review common German expressions: Entschuldigung (excuse me), Bitte (please), Danke (thank you), Tschüss (bye). The exam tests whether you recognise these in real situations."
    },
    "telling-time": {
        title: "Telling Time in German",
        tip: "German time works differently: 'halb drei' means 2:30 (half TO three), 'Viertel nach' means quarter past, 'Viertel vor' means quarter to. Practice with a clock."
    },
    "food": {
        title: "Food & Drink Vocabulary",
        tip: "Learn the most common food words with their articles: das Brot (bread), die Milch (milk), der Kaffee (coffee), das Wasser (water). These appear in almost every A1 exam."
    },
    "professions": {
        title: "Professions & People",
        tip: "Memorise key professions: der Arzt (doctor), die Krankenschwester (nurse), der Lehrer (teacher), der Student (student). The exam often asks you to identify jobs in dialogues."
    },
    "places": {
        title: "Places & Directions",
        tip: "Know key locations: der Bahnhof (train station), das Krankenhaus (hospital), die Apotheke (pharmacy), der Supermarkt (supermarket). These are essential for the reading and listening sections."
    },
    "verb-conjugation": {
        title: "Verb Conjugation (Present Tense)",
        tip: "Master present tense endings: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en. Pay extra attention to irregular verbs like sprechen, fahren, and lesen."
    },
    "noun-genders": {
        title: "Noun Genders (der / die / das)",
        tip: "Always learn nouns WITH their article. A tip: most nouns ending in -e are feminine (die), nouns ending in -ung, -heit, -keit are always feminine, and -chen/-lein are always das."
    },
    "accusative-case": {
        title: "The Accusative Case",
        tip: "In accusative, only the masculine article changes: der → den, ein → einen. Feminine, neuter, and plural stay the same. Practice with common verbs: kaufen, trinken, essen, haben."
    },
    "word-order": {
        title: "German Word Order & Questions",
        tip: "In W-questions (wer, was, wo, wohin, wann), the verb comes second: 'Wohin gehst du?' In yes/no questions, the verb comes first: 'Kommst du morgen?' Practice forming both types."
    },
    "modal-verbs": {
        title: "Modal Verbs (können, müssen, möchten)",
        tip: "Modal verbs are irregular in singular forms: ich kann/muss/möchte, du kannst/musst/möchtest, er kann/muss/möchte. The main verb goes to the end: 'Ich muss morgen arbeiten.'"
    },
    "reading-emails": {
        title: "Reading Short Emails & Messages",
        tip: "Practice reading short German emails. Focus on extracting key facts: who, when, where, what. Look for time words (am Montag, um 10 Uhr) and action verbs."
    },
    "reading-signs": {
        title: "Understanding Signs & Notices",
        tip: "Learn common sign vocabulary: Öffnungszeiten (opening hours), geschlossen (closed), Eingang/Ausgang (entrance/exit), Notausgang (emergency exit). The exam always includes sign-reading tasks."
    },
    "reading-ads": {
        title: "Understanding Classified Ads",
        tip: "Practice reading apartment and job ads. Know key terms: Zimmer (room), Wohnung (apartment), Miete (rent), ab sofort (available immediately), Vollzeit/Teilzeit (full/part time)."
    },
    "reading-schedules": {
        title: "Reading Timetables & Schedules",
        tip: "Practice reading course schedules and transport timetables. Know the German days: Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag."
    },
    "reading-notes": {
        title: "Understanding Everyday Notes",
        tip: "Practice reading short household notes and messages. Focus on understanding who is doing what and where. Look for location clues (im Supermarkt, zu Hause, in der Küche)."
    }
};


// ===== APP STATE =====

let currentQuestion = 0;
let userAnswers = []; // stores index of selected option for each question


// ===== DOM REFERENCES =====

const screens = {
    landing: document.getElementById("landing"),
    quiz: document.getElementById("quiz"),
    results: document.getElementById("results")
};


// ===== SCREEN MANAGEMENT =====

function showScreen(name) {
    Object.values(screens).forEach(s => s.classList.remove("active"));
    screens[name].classList.add("active");

    // Scroll to top when switching screens
    window.scrollTo(0, 0);
}


// ===== START QUIZ =====

function startQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    showScreen("quiz");
    showQuestion(currentQuestion);
}


// ===== SHOW A QUESTION =====

function showQuestion(index) {
    const q = questions[index];

    // Update progress bar
    const progress = ((index) / questions.length) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";

    // Update counter and skill label
    document.getElementById("question-counter").textContent =
        `Question ${index + 1} of ${questions.length}`;
    document.getElementById("question-skill").textContent = q.skill;

    // Show passage if it's a reading question
    const passageBox = document.getElementById("passage-box");
    if (q.passage) {
        passageBox.innerHTML =
            '<p class="passage-label">Read the following:</p>' + q.passage;
        passageBox.style.display = "block";
    } else {
        passageBox.style.display = "none";
    }

    // Set question text
    document.getElementById("question-text").textContent = q.question;

    // Render options
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    q.options.forEach((option, i) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = option;
        btn.onclick = () => selectAnswer(i);
        optionsContainer.appendChild(btn);
    });
}


// ===== HANDLE ANSWER SELECTION =====

function selectAnswer(selectedIndex) {
    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll(".option-btn");

    // Store the answer
    userAnswers.push(selectedIndex);

    // Disable all buttons
    buttons.forEach(btn => btn.classList.add("disabled"));

    // Highlight correct and incorrect
    buttons[q.correct].classList.add("correct");
    if (selectedIndex !== q.correct) {
        buttons[selectedIndex].classList.add("incorrect");
    }

    // Move to next question after a short delay
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion(currentQuestion);
        } else {
            // Fill progress bar to 100% before showing results
            document.getElementById("progress-bar").style.width = "100%";
            setTimeout(() => showResults(), 300);
        }
    }, 800);
}


// ===== CALCULATE SCORES =====

function calculateScores() {
    const skills = { Vocabulary: { correct: 0, total: 0 },
                     Grammar:    { correct: 0, total: 0 },
                     Reading:    { correct: 0, total: 0 } };

    questions.forEach((q, i) => {
        skills[q.skill].total++;
        if (userAnswers[i] === q.correct) {
            skills[q.skill].correct++;
        }
    });

    const totalCorrect = userAnswers.filter((a, i) => a === questions[i].correct).length;
    const totalQuestions = questions.length;
    const overallPercent = Math.round((totalCorrect / totalQuestions) * 100);

    return { skills, totalCorrect, totalQuestions, overallPercent };
}


// ===== GET RECOMMENDATIONS =====
// Returns the top 2-3 topics the learner got wrong, as recommendation objects.

function getRecommendations() {
    const wrongTopics = [];

    questions.forEach((q, i) => {
        if (userAnswers[i] !== q.correct) {
            wrongTopics.push(q.topic);
        }
    });

    // Deduplicate and limit to 3
    const unique = [...new Set(wrongTopics)];
    const topRecs = unique.slice(0, 3).map(topic => recommendationMap[topic]);

    return topRecs;
}


// ===== SHOW RESULTS =====

function showResults() {
    const { skills, totalCorrect, totalQuestions, overallPercent } = calculateScores();
    const recs = getRecommendations();

    // --- Header ---
    let verdictClass, verdictText, verdictSub, scoreClass;

    if (overallPercent >= 80) {
        scoreClass = "score-ready";
        verdictClass = "verdict-ready";
        verdictText = "You're ready! 🎉";
        verdictSub = "You're well-prepared for your Goethe or ÖSD A1 exam. Consider booking your exam date.";
    } else if (overallPercent >= 60) {
        scoreClass = "score-almost";
        verdictClass = "verdict-almost";
        verdictText = "Almost there! 💪";
        verdictSub = "You have a solid foundation but should strengthen a few areas before booking your exam.";
    } else {
        scoreClass = "score-not-yet";
        verdictClass = "verdict-not-yet";
        verdictText = "Keep practicing 📚";
        verdictSub = "You need more preparation before taking your A1 exam. Focus on the areas below.";
    }

    document.getElementById("results-header").innerHTML = `
        <div class="score-big ${scoreClass}">${overallPercent}%</div>
        <div class="verdict ${verdictClass}">${verdictText}</div>
        <p class="verdict-sub">${verdictSub}</p>
        <p class="verdict-sub" style="margin-top:0.5rem; font-size:0.85rem; color:#b2bec3;">
            ${totalCorrect} of ${totalQuestions} correct · Pass mark: 60%
        </p>
    `;

    // --- Skill Bars ---
    const skillBarsContainer = document.getElementById("skill-bars");
    skillBarsContainer.innerHTML = "";

    for (const [name, data] of Object.entries(skills)) {
        const pct = Math.round((data.correct / data.total) * 100);
        let barColor;
        if (pct >= 80) barColor = "#00b894";
        else if (pct >= 60) barColor = "#fdcb6e";
        else barColor = "#e17055";

        skillBarsContainer.innerHTML += `
            <div class="skill-row">
                <span class="skill-name">${name}</span>
                <div class="skill-bar-track">
                    <div class="skill-bar-fill" style="width: ${pct}%; background: ${barColor};"></div>
                </div>
                <span class="skill-score">${data.correct}/${data.total}</span>
            </div>
        `;
    }

    // --- Recommendations ---
    const recsContainer = document.getElementById("recommendations");
    recsContainer.innerHTML = "";

    if (recs.length === 0) {
        recsContainer.innerHTML = `
            <div class="rec-card rec-card-positive">
                <div class="rec-title">Great job!</div>
                <div class="rec-tip">You answered all questions correctly. You're in a strong position for the exam. Keep reviewing to stay sharp!</div>
            </div>
        `;
    } else {
        recs.forEach(rec => {
            recsContainer.innerHTML += `
                <div class="rec-card">
                    <div class="rec-title">${rec.title}</div>
                    <div class="rec-tip">${rec.tip}</div>
                </div>
            `;
        });
    }

    showScreen("results");
}


// ===== RETRY =====

function retryQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    showScreen("landing");
}
