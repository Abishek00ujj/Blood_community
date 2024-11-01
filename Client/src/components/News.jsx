import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Newscomponent from './Newscomponent';
import { LoaderIcon } from 'lucide-react';

const News = () => {
  const [Datu, setDatu] = useState([]);
  const [loading, setLoading] = useState(true);

  const Getdata = async () => {
    setLoading(true);
    try {
      const news = await axios.get(
        "https://newsapi.org/v2/everything?q=health&from=2024-10-25&sortBy=popularity&pageSize=10&apiKey=ce145d000c3644819251eb53b10b5d0a"
      );
      setDatu(news.data.articles);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Getdata();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="w-full h-auto flex justify-center animate-pulse">
        <p className="font-mono text-2xl">LIVE HEALTH NEWS</p>
      </div>
      <div className="w-screen h-auto flex flex-wrap justify-center p-4">
        {loading ? (
          <div className="text-center animate-spin"><LoaderIcon /></div>
        ) : (
          Datu.filter((item) => item.urlToImage).map((item, index) => (
            <Newscomponent
              key={index}
              title={item.title}
              description={item.description}
              img={item.urlToImage}
              url={item.url}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default News;
