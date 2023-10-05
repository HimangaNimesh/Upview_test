"use client";
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import axios from 'axios';
import Item from '@/components/item/Item';
import { Navbar } from '@/components/navBar/Navbar';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  status: string;
  rating: number;
  ratedBy: number;
  image: string;
}

export default function Home() {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://my-json-server.typicode.com/kodplex/pr-re-ec-products/db');
        setData(response.data.ecommerce.products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={styles.main}>
      <Navbar />
      <h2>Best Sellers</h2>
      <div className="grid">
        {data.map(item => (
          <Item key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
