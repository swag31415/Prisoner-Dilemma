document.addEventListener('DOMContentLoaded', function() {
    const column1 = document.getElementById('column1');
    const column2 = document.getElementById('column2');

    // Data for the cards
    const cardsData = [
        { title: 'Card 1', code: 'print("Hello, World!")', description: 'This is a description for card 1.' },
        { title: 'Card 2', code: 'for i in range(5):\n    print(i)', description: 'This is a description for card 2.' },
        { title: 'Card 3', code: 'def greet(name):\n    return f"Hello, {name}!"', description: 'This is a description for card 3.' },
        { title: 'Card 4', code: 'x = [1, 2, 3]\nprint(x)', description: 'This is a description for card 4.' },
        { title: 'Card 5', code: 'import math\nprint(math.sqrt(16))', description: 'This is a description for card 5.' },
        { title: 'Card 6', code: 'class Dog:\n    def __init__(self, name):\n        self.name = name', description: 'This is a description for card 6.' },
        { title: 'Card 7', code: 'with open("file.txt") as f:\n    data = f.read()', description: 'This is a description for card 7.' },
        { title: 'Card 8', code: 'try:\n    x = 1 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero")', description: 'This is a description for card 8.' },
        { title: 'Card 9', code: 'import json\njson_data = json.dumps({"key": "value"})', description: 'This is a description for card 9.' },
        { title: 'Card 10', code: 'lambda_func = lambda x: x + 1\nprint(lambda_func(5))', description: 'This is a description for card 10.' },
        { title: 'Card 11', code: 'from datetime import datetime\nnow = datetime.now()\nprint(now)', description: 'This is a description for card 11.' },
        { title: 'Card 12', code: 'my_list = [x**2 for x in range(10)]\nprint(my_list)', description: 'This is a description for card 12.' },
        { title: 'Card 13', code: 'def factorial(n):\n    if n == 0:\n        return 1\n    else:\n        return n * factorial(n-1)', description: 'This is a description for card 13.' },
        { title: 'Card 14', code: 'name = input("Enter your name: ")\nprint(f"Hello, {name}")', description: 'This is a description for card 14.' },
        { title: 'Card 15', code: 'import os\nprint(os.getcwd())', description: 'This is a description for card 15.' },
        { title: 'Card 16', code: 'for idx, val in enumerate(["a", "b", "c"]):\n    print(idx, val)', description: 'This is a description for card 16.' },
        { title: 'Card 17', code: 'import random\nprint(random.randint(1, 10))', description: 'This is a description for card 17.' },
        { title: 'Card 18', code: 'x = 10\ny = 20\nprint(x + y)', description: 'This is a description for card 18.' },
        { title: 'Card 19', code: 'def add(a, b):\n    return a + b\nprint(add(3, 4))', description: 'This is a description for card 19.' },
        { title: 'Card 20', code: 'from collections import Counter\nprint(Counter("hello world"))', description: 'This is a description for card 20.' }
    ];

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

    // Add cards to the columns
    cardsData.forEach((cardData, index) => {
        const card = createCard(cardData);
        if (index % 2 === 0) {
            column1.appendChild(card);
        } else {
            column2.appendChild(card);
        }
    });

    // Ensure Prism.js highlights the newly added code blocks
    Prism.highlightAll();
});
