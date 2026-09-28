// Precios base estimados (puedes cambiarlos según tu moneda local)
const PRICE_CAMERA = 60;
const PRICE_SMART_LOCK = 120;
const PRICE_ALARM = 200;
const PRICE_HUB = 150;

// Referencias a los elementos del DOM
const camerasInput = document.getElementById('cameras');
const smartLocksInput = document.getElementById('smart-locks');
const alarmInput = document.getElementById('alarm-system');
const hubInput = document.getElementById('automation-hub');
const totalPriceElement = document.getElementById('total-price');
const whatsappBtn = document.getElementById('whatsapp-btn');

// Función para calcular el total
function calculateTotal() {
    const camerasCount = parseInt(camerasInput.value) || 0;
    const locksCount = parseInt(smartLocksInput.value) || 0;
    const hasAlarm = alarmInput.checked;
    const hasHub = hubInput.checked;

    let total = (camerasCount * PRICE_CAMERA) + (locksCount * PRICE_SMART_LOCK);

    if (hasAlarm) total += PRICE_ALARM;
    if (hasHub) total += PRICE_HUB;

    totalPriceElement.textContent = `$${total}  COP`;
    return total;
}

// Escuchar cambios en los insumos para actualizar en tiempo real
camerasInput.addEventListener('input', calculateTotal);
smartLocksInput.addEventListener('input', calculateTotal);
alarmInput.addEventListener('change', calculateTotal);
hubInput.addEventListener('change', calculateTotal);

// Enviar el detalle directamente por WhatsApp
whatsappBtn.addEventListener('click', () => {
    const total = calculateTotal();
    const phone = "3132652670"; // Reemplaza con tu número de teléfono con código de país

    const message = `Hola, realizé una cotización en su sitio web:%0A` +
        `- Cámaras: ${camerasInput.value}%0A` +
        `- Cerraduras inteligentes: ${smartLocksInput.value}%0A` +
        `- Alarma: ${alarmInput.checked ? 'Sí' : 'No'}%0A` +
        `- Central de Domótica: ${hubInput.checked ? 'Sí' : 'No'}%0A` +
        `*Total Estimado:* $${total} USD%0A%0A` +
        `Quisiera más información sobre la instalación.`;

    const whatsappUrl = `https://wa.me/${phone}?text=${message}`;
    window.open(whatsappUrl, '_blank');
});