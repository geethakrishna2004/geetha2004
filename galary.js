// Add your JavaScript code here
const gallery = document.getElementById("gallery");

// Sample artwork data
const artworkData = [
    {
        title: "Artwork 1",
        image: "artwork1.jpg",
        description: "A beautiful painting."
    },
    {
        title: "Artwork 2",
        image: "artwork2.jpg",
        description: "A stunning sculpture."
    },
    // Add more artwork data here
];

// Function to display artwork
function displayArtwork() {
    gallery.innerHTML = "";
    artworkData.forEach((artwork, index) => {
        const artworkDiv = document.createElement("div");
        artworkDiv.className = "artwork";
        artworkDiv.innerHTML = `
            <img src="${artwork.image}" alt="${artwork.title}">
            <h2>${artwork.title}</h2>
            <p>${artwork.description}</p>
        `;
        gallery.appendChild(artworkDiv);
    });
}

displayArtwork();
