const canvas = document.getElementById('myChart');
const context = canvas.getContext('2d');

// Valor de cada barra.
const data = [10, 20, 30, 40, 50];

// Ancho de las barras.
const barWidth = 40;

// Distancia entre las barras.
const barSpacing = 10;

// Dibujar cada barra.
data.forEach((value, index) => {
    // Calcular la posición x de la barra.
    const x = index * (barWidth + barSpacing);

    // Dibujar la barra.
    context.fillRect(x, canvas.height - value, barWidth, value);
});