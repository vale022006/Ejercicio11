// Mostrar popup solo si el usuario NO aceptó antes
if (!localStorage.getItem("cookieAccepted")) {
  document.getElementById("cookiePopup").style.display = "flex";
}

// Botón aceptar
document.getElementById("acceptCookies").addEventListener("click", () => {
  localStorage.setItem("cookieAccepted", "true");
  document.getElementById("cookiePopup").style.display = "none";
});

// Botón cerrar (solo oculta, NO guarda consentimiento)
document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("cookiePopup").style.display = "none";
});
