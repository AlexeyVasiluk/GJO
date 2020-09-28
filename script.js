// const ul = document.querySelector('ul');
// const button = document.querySelector('button');
const submitBtn = document.getElementById('submitBtn');
const answer = document.getElementById('item');
const theme = document.getElementById('h1');
const questionText = document.getElementById('question_text');
const table = document.getElementById('wrapper').id;
let counter = 0;
let questionNumber = 1;
let userAnswerArray = [];
const questionsArray = [
    'Как создать кнопку, которая удаляется при нажатии на неё, и создаются две новые кнопки в этом же месте.',
    'Как можно запустить обработчик в фазе захвата, а не в фазе всплытия?',
    'Каким образом можно предотвратить множественный вызов обработчика для одного события?'
];
const answersArray = [
    'Можно решить это добавив обработчик события вместе с кнопкой для удаления и добавить новые. Однако, мы можем снизить количество навешиваний событий. Если мы добавим обработчик к родительскому элементу вместо кнопки, то у нас не будет необходимости добавлять обработчик при каждом создании кнопки. Итак, мы будем пользоваться преимуществами всплытия.',
    'В методах addEventListener и removeEventLister есть третий опциональный параметр. Вы можете установить его в true или false в зависимости от того хотите или нет использовать фазу захвата.',
    'Если слушатель события прикреплён к одному и тому же типу (click, keydown, и т.д.) элемента, вы можете вызвать event.stopImmediatePropagation() в первом обработчике и другие не будут выполнены.'
];

questionText.innerText = questionsArray[counter]; // create first question

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    userAnswerArray.push(answer.value);
    localStorage.setItem(theme.innerText, JSON.stringify(userAnswerArray));
    answer.value = '';
    counter++;
    questionText.innerText = questionsArray[counter];

    if (counter >= questionsArray.length) {
        const dataLocalStorage = JSON.parse(localStorage.getItem(theme.innerText));
        for (var i = 0; i < 3; i++) {
            tableMaker('<div>Вопрос №' + questionNumber + '</div><div class="your-answer">Ваш ответ: ' + dataLocalStorage[i] + '</div><div class="right-answer">Рекомендуемый ответ: ' + answersArray[i] + '</div><br>', table);
            questionNumber++;
        }

        function tableMaker(text, aim) {
            let node = document.getElementById(aim);
            const div = document.createElement('div');
            div.innerHTML = text;
            node.appendChild(div);
        }

        document.getElementById('question_wrapper').style.display = "none";
        document.getElementById('mailText').value = document.getElementById('wrapper').innerHTML;
        document.getElementById('spin_subscribe').style.display = "block";
    }

    if(document.getElementById('mailText').value) {
        localStorage.clear();
    }
});
