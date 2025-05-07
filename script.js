// Таймер до свадьбы
function updateCountdown() {
    const weddingDate = new Date("June 28, 2025 15:00:00").getTime();
    const now = new Date().getTime();
    const distance = weddingDate - now;
  
    document.getElementById("days").textContent = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, '0');
    document.getElementById("hours").textContent = String(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, '0');
    document.getElementById("minutes").textContent = String(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
    document.getElementById("seconds").textContent = String(Math.floor((distance % (1000 * 60)) / 1000)).padStart(2, '0');
  
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "Свадьба началась!";
    }
  }
  
  const timer = setInterval(updateCountdown, 1000);
  
  // Форма подтверждения
  document.getElementById("guestForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const attending = document.querySelector("#guestForm input[type='checkbox']").checked;
  
    if (name && attending) {
      alert(`Спасибо, ${name}! Ждём вас на свадьбе.`);
      document.getElementById("name").value = "";
    } else {
      alert("Пожалуйста, заполните все поля.");
    }
  });