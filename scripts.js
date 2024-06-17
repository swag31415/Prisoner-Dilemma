document.addEventListener('DOMContentLoaded', function() {
    const column1 = document.getElementById('column1');
    const column2 = document.getElementById('column2');
    const dataURL = "https://script.google.com/macros/s/AKfycbzkYmeYJ-b4yaK5eH7xm3kUWCgc7lmBefBJfwuL5kZTTB4EtJ3YvSKCW7auABUOmMY1Gg/exec?path=Sheet1&action=read";

    // Function to create a card element
    function createCard(cardData) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-title">${cardData.title}</div>
            <pre class="code-block"><code class="language-python">${cardData.code}</code></pre>
            <div class="card-description">${cardData.description}</div>
        `;
        return card;
    }

    // Function to process the fetched data and create cards
    function processAndCreateCards(data) {
        data.forEach((entry, index) => {
            const title = entry['Email Address'].split('@')[0];
            const code = entry['Upload your code!'];
            const description = entry['Timestamp'];
            if (title && code && description) {
                const cardData = {
                    title: title,
                    code: code,
                    description: description
                };
                const card = createCard(cardData);
                if (index % 2 === 0) {
                    column1.appendChild(card);
                } else {
                    column2.appendChild(card);
                }
            }
        });

        // Ensure Prism.js highlights the newly added code blocks
        Prism.highlightAll();
    }

    // Fetch data from the provided URL
    fetch(dataURL)
        .then(response => response.json())
        .then(json => {
            processAndCreateCards(json.data);
        })
        .catch(error => console.error('Error fetching data:', error));
});
