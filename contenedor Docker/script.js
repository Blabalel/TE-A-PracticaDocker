document.addEventListener('DOMContentLoaded', () => {
    const btnSaludo = document.getElementById('btnSaludo');
    
    btnSaludo.addEventListener('click', () => {
        alert('¡Bienvenido al sitio del equipo TRICODESISTEMS! Todo listo para empaquetar con Docker.');
    });
});