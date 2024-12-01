// Referencias a los elementos del DOM
const toggleAccessibilityMenu = document.getElementById('toggleAccessibilityMenu');
const accessibilityMenu = document.getElementById('accessibilityMenu');
const increaseFont = document.getElementById('increaseFont');
const decreaseFont = document.getElementById('decreaseFont');
const toggleContrast = document.getElementById('toggleContrast');
const resetSettings = document.getElementById('resetSettings');

// Variables para manejar la accesibilidad
let fontSize = 16; // Tamaño inicial de la fuente
const rootElement = document.documentElement; // Elemento raíz para aplicar cambios

// Mostrar/Ocultar el menú de accesibilidad
toggleAccessibilityMenu.addEventListener('click', () => {
    // Alternar la clase 'hidden' en el menú de accesibilidad
    accessibilityMenu.classList.toggle('hidden');
    toggleAccessibilityMenu.setAttribute(
        'aria-expanded',
        !accessibilityMenu.classList.contains('hidden')
    ); // Actualizar el estado de accesibilidad
});

// Aumentar el tamaño del texto
increaseFont.addEventListener('click', () => {
    fontSize += 2; // Incrementa el tamaño de la fuente en 2px
    rootElement.style.fontSize = `${fontSize}px`; // Aplica el nuevo tamaño
});

// Disminuir el tamaño del texto
decreaseFont.addEventListener('click', () => {
    fontSize = Math.max(12, fontSize - 2); // Disminuye, pero nunca por debajo de 12px
    rootElement.style.fontSize = `${fontSize}px`; // Aplica el nuevo tamaño
});

// Alternar alto contraste
toggleContrast.addEventListener('click', () => {
    rootElement.classList.toggle('high-contrast'); // Alterna la clase 'high-contrast'
    const contrastState = rootElement.classList.contains('high-contrast') ? 'high' : 'normal';
    localStorage.setItem('contrast', contrastState); // Guarda el estado en localStorage
});

// Restablecer configuración
resetSettings.addEventListener('click', () => {
    fontSize = 16; // Reinicia el tamaño de la fuente a 16px
    rootElement.style.fontSize = ''; // Restablece el tamaño de la fuente
    rootElement.classList.remove('high-contrast'); // Quita el alto contraste
    localStorage.setItem('contrast', 'normal'); // Guarda el estado normal en localStorage
});

// Restaurar configuración guardada al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedContrast = localStorage.getItem('contrast');
    if (savedContrast === 'high') {
        rootElement.classList.add('high-contrast'); // Restaura el alto contraste si estaba activo
    }
});
