//your JS code here. If required.
let clickCount = 0;
let apiCallCount = 0;
const maxCalls = 5;
const callInterval = 10000; // 10 seconds
const resultsDiv = document.getElementById('results');
const clickCountDisplay = document.getElementById('click-count');
function fetchData() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            resultsDiv.innerHTML += `<p>ID: ${data.id}</p>`; // Ensure you display the ID
        })
        .catch(error => console.error('Error fetching data:', error));
}

document.getElementById('fetch-button').addEventListener('click', () => {
    clickCount++;
    clickCountDisplay.innerText = clickCount;

    if (apiCallCount < maxCalls) {
        apiCallCount++;
        fetchData();
    } else {
        alert('Too many API calls. Please wait and try again.');
    }

    if (clickCount === 1) {
        setTimeout(() => {
            clickCount = 0;
            clickCountDisplay.innerText = clickCount;
            apiCallCount = 0; // Reset API call count after 10 seconds
        }, callInterval);
    }
});