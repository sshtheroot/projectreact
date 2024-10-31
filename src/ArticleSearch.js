import React, { useState } from "react";

function ArticleSearch() {
  const [keyword, setKeyword] = useState("");  
  const [articles, setArticles] = useState([]);  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!keyword.trim()) {
      setError("Please enter a keyword.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://crawler-microservice-latest.onrender.com/${keyword}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      setArticles(data); 
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Find Artile</h1>
      
   
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Enter keyword"
      />
      <button onClick={handleSearch}>Search</button>

 
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
           
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleSearch;
