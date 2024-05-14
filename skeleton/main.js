document.addEventListener('DOMContentLoaded', function () {
    // Fetch superpower data
    fetch('https://raw.githubusercontent.com/Infinity014/superpowerdb/main/superpowers.json')
        .then(response => response.json())
        .then(data => {
            // Process the fetched data
            console.log(data);
        })
        .catch(error => {
            console.error('Error fetching superpower data:', error);
        });

    // Wait for the DOM to fully load before accessing the search form
    const searchForm = document.getElementById('codeForm');
    console.log("bob1");
    if (searchForm) { // Check if searchForm is found
        console.log("bob44");
        document.getElementById("bb").addEventListener('click', function (event) {

            console.log("bob");
            event.preventDefault(); // Prevent default form submission behavior
            const searchInput = document.getElementById('codeInput').value.trim();
            const redirectUrl = `./skeleton/search.html?q=${encodeURIComponent(searchInput)}`;
            window.location = redirectUrl;
        });
    }
});
