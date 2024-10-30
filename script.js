// База данных вопросов и ответов
const responses = {
    "как дела": "У меня всё отлично, спасибо, что спросили!",
    "какое настроение": "Настроение отличное!",
    "как настрой": "Полный энтузиазма!",
    "чем ты занимаешься": "Отвечаю на ваши вопросы!",
    "как тебя зовут": "Меня зовут Ассистент.",
    "сколько тебе лет": "Я всего лишь программа, но благодарю за интерес!",
    "какое сегодня число": () => new Date().toLocaleDateString(),
    "какое сегодня время": () => new Date().toLocaleTimeString(),
    // Добавьте более 100 подобных пар вопросов и ответов
};

function getResponse() {
    const userInput = document.getElementById("userInput").value.toLowerCase();
    const responseElement = document.getElementById("response");
    
    // Пытаемся найти ответ на заданный вопрос
    let response = responses[userInput];
    
    // Если ответ найден в виде функции, вызываем ее
    if (typeof response === "function") {
        response = response();
    }
    
    // Если ответ не найден, возвращаем сообщение о неизвестном вопросе
    responseElement.innerText = response || "Извините, я не знаю, как ответить на этот вопрос.";
    
    // Очищаем поле ввода после каждого запроса
    document.getElementById("userInput").value = "";
}