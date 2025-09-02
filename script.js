function classifyWaste(input) {
  input = input.toLowerCase();
  let category;
  
  if (input.includes("banana") || input.includes("apple") || input.includes("peel") || input.includes("food")) {
    category = "Organic Waste ♻️";
  } else if (input.includes("bottle") || input.includes("plastic") || input.includes("can")) {
    category = "Recyclable Waste 🧴";
  } else if (input.includes("battery") || input.includes("bulb") || input.includes("e-waste") || input.includes("light")) {
    category = "Hazardous Waste ☠️";
  } else {
    category = "General Waste 🚮";
  }
  
  return category;
}

function classifyAndNavigate() {
  const input = document.getElementById("wasteInput").value;
  
  if (input.trim() === "") {
    document.getElementById("result").textContent = "Please enter an item!";
    return;
  }
  
  // Save to localStorage
  localStorage.setItem("wasteItem", input);
  
  // Navigate to result page
  window.location.href = "result.html";
}