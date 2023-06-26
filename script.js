
    // Script to open and close sidebar
    function w3_open() {
      document.getElementById("mySidebar").style.display = "block";
    }
    
    function w3_close() {
      document.getElementById("mySidebar").style.display = "none";
    }
    
    // Fetch news articles from API
    fetchNewsArticles();
    
    async function fetchNewsArticles() {
      const apiKey = "YOUR_API_KEY"; // Replace "YOUR_API_KEY" with your actual API key
    
      try {
        const response = await fetch(
          `https://newsdata.io/api/1/news?apikey=pub_251821a5862143abb92ca579639cc6a9d3310&q=free%20news%20api `
        );
        const data = await response.json();
    
        const articles = data.articles;
    
        const rootDiv = document.getElementById("root");
        rootDiv.innerHTML = ""; // Clear existing content
    
        articles.forEach((article) => {
          const { title, description, urlToImage } = article;
    
          const articleDiv = document.createElement("div");
          articleDiv.classList.add("w3-quarter");
    
          const imageElement = document.createElement("img");
          imageElement.src = urlToImage;
          imageElement.alt = title;
          imageElement.style.width = "100%";
    
          const titleElement = document.createElement("h3");
          titleElement.textContent = title;
    
          const descriptionElement = document.createElement("p");
          descriptionElement.textContent = description;
    
          articleDiv.appendChild(imageElement);
          articleDiv.appendChild(titleElement);
          articleDiv.appendChild(descriptionElement);
    
          rootDiv.appendChild(articleDiv);
        });
      } catch (error) {
        console.error("Error fetching news articles:", error);
      }
    }
    