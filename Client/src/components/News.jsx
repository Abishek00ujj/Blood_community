import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Newscomponent from './Newscomponent';
import { LoaderIcon } from 'lucide-react';

const News = () => {
  const [Datu, setDatu] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10); 
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const Getdata = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/everything?q=diet&from=2024-12-05&sortBy=popularity&apiKey=3440fa16b8254c3e96c6575ea694297a`
      );

      if (news.status === "ok" || news.status === 200) {
        // alert("Fetched!" + news.status);
      }
      setDatu(news.data.articles);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const loadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prevCount) => prevCount + 10); 
      setIsLoadingMore(false);
    }, 1000); 
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
        {Datu.length > 0 ? (
          Datu.slice(0, visibleCount)
            .filter((item) => item.urlToImage)
            .map((item, index) => (
              <Newscomponent
                key={index}
                title={item.title}
                description={item.description}
                img={item.urlToImage}
                url={item.url}
              />
            ))
        ) : (
          <div className="text-center animate-spin">
            <LoaderIcon />
          </div>
        )}
      </div>
      {visibleCount < Datu.length && (
        <div className="w-full flex justify-center my-4">
          {isLoadingMore ? (
            <div className="animate-spin">
              <LoaderIcon />
            </div>
          ) : (
            <button
              className="text-black px-4 py-2 rounded bg-green-500 p-3"
              onClick={loadMore}
            >
              Load More
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default News;
