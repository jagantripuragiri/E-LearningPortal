function startTest() {
    const testType = document.getElementById("testType").value;
    const questionSet = questions[testType];

    if (!questionSet) return;

    const container = document.getElementById("questionsContainer");
    const form = document.getElementById("quizForm");

    form.innerHTML = "";
    questionSet.forEach((q, index) => {
        const div = document.createElement("div");
        div.classList.add("question");

        let optionsHTML = "";
        q.options.forEach(opt => {
            optionsHTML += `
                <label>
                    <input type="radio" name="q${index}" value="${opt}"> ${opt}
                </label><br>
            `;
        });

        div.innerHTML = `<p>${index + 1}. ${q.q}</p>${optionsHTML}`;
        form.appendChild(div);
    });

    container.style.display = "block";
}

function submitTest() {
    const testType = document.getElementById("testType").value;
    const questionSet = questions[testType];
    let score = 0;
    let resultHTML = "<h3>Results:</h3>";

    questionSet.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        const isCorrect = selectedOption && selectedOption.value === q.answer;

        resultHTML += `<p>${index + 1}. ${q.q} <br> 
        Your Answer: ${selectedOption ? selectedOption.value : "Not Answered"} <br>
        Correct Answer: ${q.answer} <br>
        ${isCorrect ? "✅ Correct" : "❌ Wrong"}</p><hr>`;

        if (isCorrect) score++;
    });

    resultHTML += `<h2>You scored ${score} out of ${questionSet.length}</h2>`;
    
    document.getElementById("result").innerHTML = resultHTML;
}
