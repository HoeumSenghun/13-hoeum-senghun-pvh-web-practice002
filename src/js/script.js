function toggleSearchInput() {
    const option = document.getElementById('searchOption').value;
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');

    if (option) {
        searchInput.disabled = false;
        searchButton.disabled = false;
    } else {
        searchInput.disabled = true;
        searchButton.disabled = true;
    }
}

function searchQuote() {
    const option = document.getElementById('searchOption').value;
    const searchValue = document.getElementById('searchInput').value.trim().toLowerCase();
    const quotes = document.querySelectorAll('.quote');
    let found = false;

    quotes.forEach(quote => {
        const id = quote.getAttribute('data-id');
        const title = quote.getAttribute('data-title').toLowerCase();

        if ((option === 'id' && id === searchValue) || (option === 'title' && title.includes(searchValue))) {
            quote.style.display = 'block';
            found = true;
        } else {
            quote.style.display = 'none';
        }
    });

    if (!found) {
        document.getElementById('quoteDisplay').innerHTML = '<p class="text-red-500">No quote found.</p>';
    }
}