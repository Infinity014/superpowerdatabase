document.addEventListener('DOMContentLoaded', function () {
    // Get search query from URL parameter
    const searchParams = new URLSearchParams(window.location.search);
    const searchInput = searchParams.get('q');

    // Fetch superpower data
    fetch('https://raw.githubusercontent.com/Infinity014/superpowerdb/main/superpowers.json')
        .then(response => response.json())
        .then(data => {
            // Process the fetched data
            console.log(data);

            // Find the superpower with the searched name
            const searchedSuperpower = data.find(superpower => superpower.name === searchInput);

            if (searchedSuperpower) {
                // Display search results on the page
                const searchResults = document.getElementById('searchResults');
                const title = document.createElement('h2');
                title.textContent = `Name: ${searchedSuperpower.name}`;
                const description = document.createElement('p');
                description.textContent = `Description: ${searchedSuperpower.description}`;
                const abilities = document.createElement('p');
                abilities.textContent = `Abilities: ${searchedSuperpower.abilities.join(', ')}`;
                searchResults.appendChild(title);
                searchResults.appendChild(description);
                searchResults.appendChild(abilities);
             } else {
                console.log('Superpower not found!');
            }
        })
        .catch(error => {
            console.error('Error fetching superpower data:', error);
        });

    // Search form event listener
    const searchForm = document.getElementById('searchForm');
    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const searchInput = document.getElementById('searchInput').value.trim();
        window.location.href = `search.html?q=${searchInput}`;
    });

    // Go back button event listener
    const goBackButton = document.getElementById('goBackButton');
    goBackButton.addEventListener('click', function () {
        window.location.href = '../index.html';
    });
});
