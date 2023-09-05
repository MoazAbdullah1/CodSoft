document.addEventListener("DOMContentLoaded", () => {
    const createQuizBtn = document.getElementById("createQuizBtn");
    const takeQuizBtn = document.getElementById("takeQuizBtn");

    createQuizBtn.addEventListener("click", () => {
        
    });

    takeQuizBtn.addEventListener("click", () => {
        
        
    });
});



function checkAnswer() {
            
    var selectedOption = document.querySelector('input[name="answer"]:checked');
    
    
    if (selectedOption) {
        var userAnswer = selectedOption.value;
        
        var correctAnswer = "C";

        
        if (userAnswer === correctAnswer) {
            alert("Correct answer!");
        } else {
            alert("Incorrect answer. Try again.");
        }
    } else {
        alert("Please select an answer.");
    }
}








        var currentQuestion = 0;
        var questions = [
            {
                question: "Which planet is known as the 'Red Planet'?",
                options: ["Earth", "Venus", "Mars", "Jupiter"],
                correctAnswer: "C"
            },
            {
                question: "What is the capital of France?",
                options: ["Berlin", "Madrid", "Paris", "Rome"],
                correctAnswer: "C"
            },
            // Add more questions here
        ];

        function showQuestion() {
            if (currentQuestion < questions.length) {
                var questionObj = questions[currentQuestion];

                var questionCard = document.getElementById("question-card");

                questionCard.innerHTML = `
                    <h1>Multiple Choice Question</h1>
                    <p><strong>Question:</strong> ${questionObj.question}</p>
                    <form>

                        ${questionObj.options.map((option, index) => `
                            <label>
                                <input type="radio" name="answer" value="${String.fromCharCode(65 + index)}"> ${String.fromCharCode(65 + index)}) ${option}
                            </label><br>
                        `).join("")}
                        <br>
                        <button type="button" onclick="checkAnswer()">Submit Answer</button>
                    </form>
                `;

            }
            
            else {
                var questionCard = document.getElementById("question-card");
                questionCard.innerHTML = "<h1>Quiz Complete</h1><p>Congratulations! You have completed the quiz.</p>";
            }
        }

        

        function checkAnswer() {
            var selectedOption = document.querySelector('input[name="answer"]:checked');
            
            if (selectedOption) {
                var userAnswer = selectedOption.value;
                var correctAnswer = questions[currentQuestion].correctAnswer;

                if (userAnswer === correctAnswer) {
                    alert("Correct answer!");

                    // Move to the next question
                    currentQuestion++;
                    showQuestion();
                } else {
                    alert("Incorrect answer. Try again.");
                }
            } else {
                alert("Please select an answer.");
            }
        }

        

        window.onload = showQuestion;









