const books = [
    { title: "El Quijote", img: "img/quijote.jpg" },
    { title: "Cien Años de Soledad", img: "img/cien_anos.jpg" },
    { title: "Orgullo y Prejuicio", img: "img/orgullo.jpg" },
    { title: "1984", img: "img/1984.jpg" },
];

const bookList = document.getElementById("bookList");

// Función para renderizar libros de forma aleatoria
function renderBooks() {
    const shuffledBooks = [...books].sort(() => Math.random() - 0.5); // Orden aleatorio
    bookList.innerHTML = ""; // Limpia la lista actual
    shuffledBooks.forEach((book) => {
        const bookItem = document.createElement("div");
        bookItem.className = "book-item";
        bookItem.innerHTML = `
            <img src="${book.img}" alt="${book.title}">
            <p>${book.title}</p>
        `;
        bookList.appendChild(bookItem);
    });
}

// Cambia los libros cada 5 segundos
renderBooks();
setInterval(renderBooks, 8000);
