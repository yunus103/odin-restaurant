export default function() {
    const section = document.createElement('section');
    section.classList.add("hero");
    const heroText = document.createElement('div');
    heroText.classList.add("hero-text");
    

    const h1Hero = document.createElement("h1");
    const pHero = document.createElement("p");
    const aHero = document.createElement("a");
    aHero.classList.add("btn");

    h1Hero.textContent = "Welcome to Turkıye Cuisine";
    pHero.textContent = "Where fine dining meets unforgettable flavors.";
    aHero.textContent = "Explore Menu";

    heroText.append(h1Hero, pHero, aHero);

    const heroImage = document.createElement("div");
    heroImage.classList.add("hero-image");
    const imgHero = document.createElement("img");
    imgHero.src = "https://images.unsplash.com/photo-1504674900247-0877df9cc836";

    heroImage.append(imgHero);

    section.append(heroText, heroImage);
    const content = document.getElementById("content");
    content.append(section);
}