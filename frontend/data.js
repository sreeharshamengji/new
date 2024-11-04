// Save generated test to Local Storage
function saveTestData(testData) {
    const tests = JSON.parse(localStorage.getItem('tests')) || [];
    tests.push(testData);
    localStorage.setItem('tests', JSON.stringify(tests));
    alert('Test saved successfully!');
  }
  
  // Load subjects for Test Page
  function loadTestSubjects() {
    const tests = JSON.parse(localStorage.getItem('tests')) || [];
    const content = document.getElementById('content');
    content.innerHTML = '<h2>Select Test</h2>';
  
    tests.forEach((test, index) => {
      content.innerHTML += `
        <div class="test-item">
          <p>Subject: ${test.subject}</p>
          <p>Time: ${test.time} minutes</p>
          <button onclick="startTest(${index})">Start Test</button>
        </div>
      `;
    });
  }
  
  // Save Upcoming Tests (optional if needed)
  function saveUpcomingTest(test) {
    const upcoming = JSON.parse(localStorage.getItem('upcomingTests')) || [];
    upcoming.push(test);
    localStorage.setItem('upcomingTests', JSON.stringify(upcoming));
  }
  