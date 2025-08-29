export default function() {
    const about = document.createElement("div");
    about.classList.add("about");

    const aboutHeader = document.createElement("div");
    aboutHeader.classList.add("about-header");
    aboutHeader.innerHTML = `<h1>About Us</h1>
                             <p>Crafting flavors, creating memories.</p>`;

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");
    aboutContainer.innerHTML = `    <div class="about-image">
      <img src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80" alt="Restaurant Interior">
    </div>
    <div class="about-text">
      <h2>Our Story</h2>
      <p>
        Since opening our doors, we’ve been dedicated to bringing authentic flavors to the heart of the city. 
        Every dish is crafted with the freshest ingredients, passion, and a touch of creativity.
      </p>

      <h2>Our Philosophy</h2>
      <p>
        We believe food is more than just nourishment—it’s an experience that brings people together. 
        That’s why we focus on quality, hospitality, and creating a warm atmosphere for every guest.
      </p>
    </div>`;
    
    


    about.append(aboutHeader, aboutContainer);
    const content = document.getElementById("content");
    content.append(about);
}