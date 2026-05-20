// const dropdown = document.querySelector(".dropdown");
// const button = document.querySelector(".dropdown-btn");

// button.addEventListener("click", () => {
//   dropdown.classList.toggle("open");
// });

// const sortSelect = document.getElementById("sort-btn");
// const productsContainer = document.getElementById("products");

// if (!sortSelect || !productsContainer) {
//   console.warn("Sort select or products container not found.");
// } else {
//   sortSelect.addEventListener("change", () => {
//     const products = Array.from(productsContainer.querySelectorAll(".product"));

//     const value = sortSelect.value;

//     if (value === "low-high") {
//       products.sort((a, b) => {
//         return a.dataset.price - b.dataset.price;
//       });
//     } else if (value === "high-low") {
//       products.sort((a, b) => {
//         return b.dataset.price - a.dataset.price;
//       });
//     } else if (value === "name") {
//       products.sort((a, b) => {
//         return a.dataset.name.localeCompare(b.dataset.name);
//       });
//     }

//     /* Re-add sorted products */
//     products.forEach((product) => {
//       productsContainer.appendChild(product);
//     });
//   });
// }

const sortButtons = document.querySelectorAll(".sort-btn");
const productsContainer = document.getElementById("products");

function sortProducts(type) {
  const products = Array.from(productsContainer.querySelectorAll(".product"));

  if (type === "low-high") {
    products.sort((a, b) => a.dataset.price - b.dataset.price);
  } else if (type === "high-low") {
    products.sort((a, b) => b.dataset.price - a.dataset.price);
  } else if (type === "name") {
    products.sort((a, b) => a.dataset.name.localeCompare(b.dataset.name));
  }

  products.forEach((product) => productsContainer.appendChild(product));
}

sortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sortProducts(button.dataset.sort);
  });
});
