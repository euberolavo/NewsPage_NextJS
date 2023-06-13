export default async function handler(req, res) {
    try {
      // const response = await fetch('https://newsapi.org/v2/everything?q=apple&from=2023-06-11&to=2023-06-11&sortBy=popularity&apiKey=c3ac317f3b854003aa5a80fec4b5ba34');
      const response = await fetch('https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=8fb3ed24478c93ee7131270e8b65aac8');
      const news = await response.json();
  
      res.status(200).json(news);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao obter as notícias' });
    }
  }
  