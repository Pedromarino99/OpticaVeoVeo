let boton = document.getElementById("calcular");

boton.addEventListener("click", function() {
  let precio = Number(document.getElementById("producto").value);
  let cantidad = Number(document.getElementById("cantidad").value);
  let promo = document.getElementById("promo").value;
  let resultado = document.getElementById("resultado");

  if (!precio || !cantidad || !promo) {
    resultado.innerHTML = "<p>Por favor, completá todos los campos.</p>";
    return;
  }

  let total = precio * cantidad;
  let descuento = 0;

  // Cálculos según promoción elegida
  if (promo === "mitad" && cantidad >= 2) {
    descuento = precio * 0.5;
  } else if (promo === "3x2" && cantidad >= 3) {
    descuento = precio;
  } else if (promo === "10" && total > 30000) {
    descuento = total * 0.1;
  }

  let totalFinal = total - descuento;

  resultado.innerHTML = `
    <p>Total sin descuento: $${total}</p>
    <p>Descuento: $${descuento}</p>
    <p><strong>Total final: $${totalFinal}</strong></p>
  `;
});

