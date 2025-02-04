document.addEventListener("DOMContentLoaded", () => {
    loadTools();
    loadDarkMode();
});

// List of tools (only names, no need to specify links or images manually)
const toolNames = ["screen_recorder", "video_to_audio"];

function loadTools() {
    let toolContainer = document.getElementById("toolContainer");
    toolContainer.innerHTML = "";

    toolNames.forEach(tool => {
        let toolCard = document.createElement("div");
        toolCard.className = "tool-card";
        toolCard.innerHTML = `
            <a href="tools/${tool}.html">
                <img src="images/${tool}.png" alt="${tool}">
                <h3>${formatToolName(tool)}</h3>
            </a>
        `;
        toolContainer.appendChild(toolCard);
    });
}

// Function to format tool names (e.g., "screenrecorder" → "Screen Recorder")
function formatToolName(tool) {
    return tool.replace(/([a-z])([A-Z])/g, '$1 $2') // Add space before uppercase
               .replace(/_/g, ' ') // Replace underscores with spaces
               .replace(/\b\w/g, char => char.toUpperCase()); // Capitalize first letter
}

// Search function
function searchTools() {
    let query = document.getElementById("searchBox").value.toLowerCase();
    let filteredTools = toolNames.filter(tool => tool.includes(query));
    let toolContainer = document.getElementById("toolContainer");

    toolContainer.innerHTML = "";

    if (filteredTools.length === 0) {
        toolContainer.innerHTML = `<p>No tools found.</p>`;
    } else {
        filteredTools.forEach(tool => {
            let toolCard = document.createElement("div");
            toolCard.className = "tool-card";
            toolCard.innerHTML = `
                <a href="tools/${tool}.html">
                    <img src="images/${tool}.png" alt="${tool}">
                    <h3>${formatToolName(tool)}</h3>
                </a>
            `;
            toolContainer.appendChild(toolCard);
        });
    }
}

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode") ? "enabled" : "disabled");
});

// Load dark mode preference
function loadDarkMode() {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
    }
}
