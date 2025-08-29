export default function() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    const menuHeader = document.createElement("div");
    menuHeader.classList.add("menu-header");

    const mainH1 = document.createElement("h1");
    mainH1.textContent = "Our Menu";
    const mainP = document.createElement("p");
    mainP.textContent = "Delicious dishes crafted with love 🍴";

    menuHeader.append(mainH1, mainP);

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    menuContainer.innerHTML = `<section class="menu-category">
      <h2>Starters</h2>
      <div class="menu-items">
        <div class="menu-item">
          <div>
            <h3>Bruschetta</h3>
            <p>Grilled bread topped with tomato, garlic, and basil.</p>
          </div>
          <span>$6</span>
        </div>
        <div class="menu-item">
          <div>
            <h3>Garlic Bread</h3>
            <p>Freshly baked bread with garlic butter.</p>
          </div>
          <span>$5</span>
        </div>
      </div>
    </section>

    <section class="menu-category">
      <h2>Main Courses</h2>
      <div class="menu-items">
        <div class="menu-item">
          <div>
            <h3>Grilled Salmon</h3>
            <p>Fresh salmon with lemon butter sauce.</p>
          </div>
          <span>$18</span>
        </div>
        <div class="menu-item">
          <div>
            <h3>Margherita Pizza</h3>
            <p>Classic pizza with tomato, mozzarella, and basil.</p>
          </div>
          <span>$14</span>
        </div>
      </div>
    </section>

    <section class="menu-category">
      <h2>Desserts</h2>
      <div class="menu-items">
        <div class="menu-item">
          <div>
            <h3>Tiramisu</h3>
            <p>Traditional Italian coffee-flavored dessert.</p>
          </div>
          <span>$8</span>
        </div>
        <div class="menu-item">
          <div>
            <h3>Cheesecake</h3>
            <p>Creamy cheesecake with strawberry topping.</p>
          </div>
          <span>$7</span>
        </div>
      </div>
    </section>`;


    menu.append(menuHeader, menuContainer);
    const content = document.getElementById("content");
    content.append(menu);
}