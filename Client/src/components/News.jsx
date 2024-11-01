import React, { useEffect, useState, Suspense, useCallback } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import { LoaderIcon } from 'lucide-react';

const Newscomponent = React.lazy(() => import('./Newscomponent'));

const News = () => {
  const [Datu, setDatu] = useState([]);
  const [loading, setLoading] = useState(true);

  const Getdata = useCallback(async () => {
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
  }, []);

  useEffect(() => {
    Getdata();
  }, [Getdata]);

  return (
    <div>
      <Navbar />
      <div className="w-full h-auto flex justify-center animate-pulse">
        <p className="font-mono text-2xl">LIVE HEALTH NEWS</p>
      </div>
      
      <div className="w-screen h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {loading ? (
          <div className="text-center animate-spin"><LoaderIcon /></div>
        ) : (
          <Suspense fallback={<div className="text-center animate-spin"><LoaderIcon /></div>}>
            {Datu.filter((item) => item.urlToImage).map((item, index) => (
              <Newscomponent
                key={index}
                title={item.title}
                description={item.description}
                img={item.urlToImage}
                url={item.url}
              />
            ))}
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default News;
