import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';
import Newscomponent from './Newscomponent';
import { LoaderIcon } from 'lucide-react';
const News = () => {
  const [Datu, setDatu] = useState([]);

  const Getdata = async () => {
    try {
      const news = await axios.get("http://newsapi.org/v2/everything?q=health&from=2024-10-25&sortBy=popularity&apiKey=ce145d000c3644819251eb53b10b5d0a");
      console.log(news.status);
      if(news.status=="ok"||news.status==200)
      {
        alert("Fetched!"+news.status);
      }
      setDatu(news.data.articles);
    } catch (err) {
      console.error("Error fetching data:", err);
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
        {Datu.length > 0 ? (
          Datu.filter((item) => item.urlToImage).map((item, index) => (
            <Newscomponent
              key={index}
              title={item.title}
              description={item.description}
              img={item.urlToImage}
              url={item.url}
            />
          ))
        ) : (
          <div className="text-center animate-spin"><LoaderIcon/></div>
        )}
      </div>
    </div>
  );
};

export default News;