async function fetchNews() {
    const API_URL = "https://newsdata.io/api/1/news?apikey=pub_7506637ead280e283b7840079829e46f89753&q=news&country=in&language=en&category=education";

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        
        const newsContainer = document.getElementById("newsList");
        newsContainer.innerHTML = ""; // Clear previous content

        data.results.forEach(article => {
            const newsItem = document.createElement("div");
            newsItem.classList.add("news-item");

            const image = document.createElement("img");
            image.src = article.image_url || "https://via.placeholder.com/80";
            image.alt = "News Image";

            const link = document.createElement("a");
            link.href = article.link;
            link.target = "_blank";
            link.innerText = article.title;

            newsItem.appendChild(image);
            newsItem.appendChild(link);
            newsContainer.appendChild(newsItem);
        });
    } catch (error) {
        console.error("Error fetching news:", error);
        document.getElementById("newsList").innerHTML = "<p>Failed to load news. Try again later.</p>";
    }
}

fetchNews();
