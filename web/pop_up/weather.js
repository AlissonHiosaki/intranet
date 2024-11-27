const apiKey = "f516fded8c1c374a79870db7f2f3ac60"; // Insira aqui sua chave de API OpenWeatherMap
const city = "Sertãozinho,BR"; // Cidade e país (formato padrão OpenWeatherMap)

// Função para buscar os dados de clima
async function getWeather() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('weatherPopup').style.display = 'block';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Erro ao buscar os dados");
        const data = await response.json();

        // Exibindo as informações no popup
        document.getElementById('weatherInfo').innerHTML = `
            <strong>Local:</strong> ${data.name}, ${data.sys.country}<br>
            <strong>Temperatura:</strong> ${data.main.temp}°C<br>
            <strong>Sensação Térmica:</strong> ${data.main.feels_like}°C<br>
            <strong>Condição:</strong> ${data.weather[0].description}<br>
            <strong>Umidade:</strong> ${data.main.humidity}%<br>
            <strong>Vento:</strong> ${data.wind.speed} km/h
        `;
    } catch (error) {
        document.getElementById('weatherInfo').innerHTML = `
            <strong>Erro:</strong> Não foi possível carregar as informações.<br>
            Verifique sua conexão e tente novamente.
        `;
        console.error(error);
    }
}

// Função para fechar o popup
function closeWeatherPopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('weatherPopup').style.display = 'none';
}