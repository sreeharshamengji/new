// Global variable to hold test data
let testData = {}; 

// Function to generate dynamic input fields for each question
function generateQuestionInputs() {
    const numQuestions = document.getElementById('numQuestions').value;
    const questionsContainer = document.getElementById('questionsContainer');
    questionsContainer.innerHTML = ''; // Clear any existing questions

    if (numQuestions && numQuestions > 0) {
        // Generate question inputs for the number of questions specified
        for (let i = 1; i <= numQuestions; i++) {
            const questionBlock = `
                <h4>Question ${i}</h4>
                <label for="question${i}">Question:</label>
                <input type="text" id="question${i}" name="question${i}" required><br><br>

                <label for="option1_${i}">Option 1:</label>
                <input type="text" id="option1_${i}" name="option1_${i}" required><br>

                <label for="option2_${i}">Option 2:</label>
                <input type="text" id="option2_${i}" name="option2_${i}" required><br>

                <label for="option3_${i}">Option 3:</label>
                <input type="text" id="option3_${i}" name="option3_${i}" required><br>

                <label for="option4_${i}">Option 4:</label>
                <input type="text" id="option4_${i}" name="option4_${i}" required><br>

                <label for="correct_${i}">Correct Option (1-4):</label>
                <input type="number" id="correct_${i}" name="correct_${i}" min="1" max="4" required><br>

                <label for="hint_${i}">Hint:</label>
                <input type="text" id="hint_${i}" name="hint_${i}"><br><br>
            `;
            questionsContainer.innerHTML += questionBlock;
        }
    } else {
        alert("Please enter a valid number of questions.");
    }
}

// Handling form submission and saving the test
document.getElementById('generateTestForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(event.target);
    const numQuestions = formData.get('numQuestions');
    
    // Gather all the test data
    testData.subject = formData.get('subject');
    testData.numQuestions = numQuestions;
    testData.time = formData.get('time');
    testData.questions = [];

    for (let i = 1; i <= numQuestions; i++) {
        const questionData = {
            question: formData.get(`question${i}`),
            options: [
                formData.get(`option1_${i}`),
                formData.get(`option2_${i}`),
                formData.get(`option3_${i}`),
                formData.get(`option4_${i}`)
            ],
            correct: formData.get(`correct_${i}`),
            hint: formData.get(`hint_${i}`)
        };
        testData.questions.push(questionData);
    }

    // Save the test data in localStorage
    localStorage.setItem('testData', JSON.stringify(testData));
    alert('Test saved successfully!');

    // Redirect to the test page
    window.location.href = 'test.html';
});
