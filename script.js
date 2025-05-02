
async function generateScript() {const topic = document.getElementById("topic").value;
  const response = await fetch("https://faceless-pro-backend-2-2.onrender.com/generate-script", {method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({ topic })});
  const data = await response.json();
  document.getElementById("result").textContent = data.script || data.error;}
