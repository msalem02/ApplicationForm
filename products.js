const PRODUCTS = [
  {
    id: "task-manager",
    name: "Task Manager",
    category: "Productivity",
    short: "Organize tasks and track progress in one dashboard.",
    description:"Task Manager helps teams plan, assign, and track work efficiently. Set priorities, deadlines, and track progress in real time.",
    price: "$19 / month",
  },
  {
    id: "shop-builder",
    name: "Shop Builder",
    category: "E-Commerce",
    short: "Create online stores without writing code.",
    description:"Shop Builder provides drag-and-drop tools for building responsive online stores, managing inventory, and processing payments.",
    price: "$39 / month",
  },
  {
    id: "mail-blast",
    name: "Mail Blast",
    category: "Marketing",
    short: "Send email campaigns to customers with ease.",
    description:"Mail Blast lets you design newsletters, automate sending schedules, and track email performance with analytics.",
    price: "$29 / month",
  },
  {
    id: "accounting-pro",
    name: "Accounting Pro",
    category: "Finance",
    short: "Manage invoices, taxes, and financial reports.",
    description:"Accounting Pro automates payroll, expense tracking, invoicing, and tax calculations for small and medium-sized businesses.",
    price: "$49 / month",
  },
  {
    id: "secure-login",
    name: "Secure Login",
    category: "Security",
    short: "Add authentication and 2FA to your applications.",
    description:"Secure Login protects your apps with passwordless login, multi-factor authentication, and single sign-on.",
    price: "$59 / month",
  },
  {
    id: "ai-writer",
    name: "AI Writer",
    category: "AI Tools",
    short: "Generate emails, blogs, and product descriptions.",
    description:"AI Writer uses advanced language models to help you produce marketing content, emails, and articles in minutes.",
    price: "$15 / month",
  },
  {
    id: "chat-support",
    name: "Chat Support",
    category: "Customer Service",
    short: "Live chat widget for your website or app.",
    description:"Chat Support connects your customers to your team instantly, allowing you to handle questions, feedback, and support tickets.",
    price: "$25 / month",
  },
  {
    id: "video-meet",
    name: "Video Meet",
    category: "Communication",
    short: "Host online meetings with HD video and screensharing.",
    description:"Video Meet provides secure HD video calls, breakout rooms, and shared whiteboards for remote teams and online classrooms.",
    price: "$12 / month",
  },
  {
    id: "file-drive",
    name: "File Drive",
    category: "Storage",
    short: "Store, share, and sync files across devices.",
    description:"File Drive offers cloud file storage with team sharing, access permissions, and automatic backups.",
    price: "$9 / month",
  },
];


const routes = {
  home: () => `
    <header class="page-header">
      <div class="page-kicker">Product catalog</div>
      <h1 class="page-title">Explore our products</h1>
      <p class="page-subtitle">
        Browse products and click on any card to see more information.
      </p>
    </header>

    <section id="view-catalog">
      <div class="catalog-toolbar">
        <input
          type="search"
          id="search"
          class="search-input"
          placeholder="Search products…"
        />
      </div>
      <div class="products-grid" id="products-grid"></div>
    </section>

    <section id="view-details" style="display:none;">
      <div class="details-header">
        <button class="back-btn" id="back-to-catalog">← Back to catalog</button>
      </div>

      <article class="details-card">
        <div>
          <div class="product-tag" id="details-category"></div>
          <h2 class="details-title" id="details-name"></h2>
          <p class="details-subtitle" id="details-short"></p>

          <div>
            <h3 class="details-section-title">What it does</h3>
            <p id="details-long"></p>
          </div>
        </div>

        <aside class="details-side">
          <div>
            <div class="details-section-title">Plan</div>
            <div class="details-price" id="details-price"></div>
          </div>
        </aside>
      </article>
    </section>
  `,

  docs: () => `
    <header class="page-header">
      <div class="page-kicker">Documentation</div>
      <h1 class="page-title">TechCo Developer</h1>
      <p class="page-subtitle">Simple example docs page.</p>
    </header>

    <section class="docs-intro">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit facere, necessitatibus aperiam nobis tempora ea itaque tenetur eveniet nesciunt! Molestias omnis, nihil sapiente dolorum, nisi reiciendis consequatur voluptates, mollitia animi architecto obcaecati aut quisquam totam repellendus. Inventore ducimus rerum, vitae laborum voluptate culpa, veritatis commodi rem nulla repellat non sequi, adipisci a. Earum harum, dolor libero quis porro quas perferendis eaque rerum ullam quaerat totam culpa tempore illum laboriosam repudiandae excepturi reprehenderit provident sed unde nesciunt. Aut libero veritatis ad facere aspernatur impedit id, hic fuga doloremque corporis! Animi earum labore sapiente totam voluptas? Fuga omnis ab est. Voluptatem animi voluptates dicta fugiat dolorem consequatur ullam ab a sequi sit nisi officiis doloribus aliquam repellendus minus beatae quidem, qui, natus molestias cupiditate suscipit reprehenderit quaerat! Laudantium delectus consectetur, iure tempora ratione maxime debitis quos dolorem officia eaque aliquam assumenda iste, numquam cum rem vitae. Accusamus laboriosam facilis dicta quisquam placeat minus quia molestias fugit modi rerum nobis necessitatibus, odio esse provident temporibus optio eligendi porro quod sapiente libero repellat dolore minima excepturi dolores. Amet ad, illum dolore quam possimus sint nemo commodi omnis quod iure. Id saepe suscipit ab rerum, illo ullam pariatur ducimus quos nostrum cupiditate vel sequi asperiores! Similique deleniti perspiciatis error eum esse iure porro consequuntur doloribus neque, dolor voluptatibus blanditiis voluptas ipsa non distinctio? Nobis totam, repellendus beatae quas nisi exercitationem autem sapiente quis quidem illum animi enim dolorum. Nisi possimus voluptate delectus. Quis blanditiis maxime dolor praesentium? Porro eos veritatis cupiditate iure ab voluptatum iusto.</p>
    </section>
  `,
};



function renderRoute(routeName) {
  const app = document.getElementById("app");
  const routeFn = routes[routeName] || routes.home;
  app.innerHTML = routeFn();

  const links = document.querySelectorAll(".navMenu a[data-nav]");
  links.forEach(link => {
    const nav = link.dataset.nav; 
    if (nav === "home" && routeName === "home") {
      link.classList.add("active");
    } else if (nav === "Services" && routeName === "docs") {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
  if (routeName === "home") {
    initProductsPage();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navMenu a[data-nav]");

  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const nav = this.dataset.nav;
      if (nav === "home") {
        renderRoute("home");
      } else {
        renderRoute("docs");
      }
    });
  });
  renderRoute("home");
});



let currentSearch = "";

function initProductsPage() {
  const searchInput = document.getElementById("search");
  const grid = document.getElementById("products-grid");
  const backBtn = document.getElementById("back-to-catalog");

  showCatalog();

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      currentSearch = this.value.toLowerCase();
      showCatalog();
    });
  }

  if (backBtn) {
    backBtn.addEventListener("click", function () {
      const catalog = document.getElementById("view-catalog");
      const details = document.getElementById("view-details");
      if (catalog && details) {
        catalog.style.display = "";
        details.style.display = "none";
      }
    });
  }

  function showCatalog() {
    if (!grid) return;
    grid.innerHTML = "";

    const filtered = PRODUCTS.filter(p => {
      if (currentSearch === "") return true;
      return (
        p.name.toLowerCase().includes(currentSearch) ||
        p.short.toLowerCase().includes(currentSearch) ||
        p.description.toLowerCase().includes(currentSearch)
      );
    });
    if (filtered.length === 0) {
      const msg = document.createElement("p");
      msg.textContent = "No products found.";
      grid.appendChild(msg);
      return;
    }
    filtered.forEach(product => {
      const card = document.createElement("article");
      card.className = "product-card";
      card.innerHTML = `
        <span class="product-tag">${product.category}</span>
        <h3 class="product-name">${product.name}</h3>
        <p class="product-desc">${product.short}</p>
        <div class="product-meta">
          <span class="price">${product.price}</span>
          <span class="pill">View details →</span>
        </div>
      `;

      card.addEventListener("click", function () {
        showDetails(product);
      });

      grid.appendChild(card);
    });
  }
}

function showDetails(product) {
  const catalog = document.getElementById("view-catalog");
  const details = document.getElementById("view-details");

  if (!catalog || !details) return;
  catalog.style.display = "none";
  details.style.display = "";

  const cat = document.getElementById("details-category");
  const name = document.getElementById("details-name");
  const short = document.getElementById("details-short");
  const long = document.getElementById("details-long");
  const price = document.getElementById("details-price");

  if (cat) cat.textContent = product.category;
  if (name) name.textContent = product.name;
  if (short) short.textContent = product.short;
  if (long) long.textContent = product.description;
  if (price) price.textContent = product.price;
}



