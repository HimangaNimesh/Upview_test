"use client";
import { CartIcon, DownArrow } from '@/assets/icons/icons';
import { useEffect, useState } from 'react';
import './Navbar.css';
import Image from 'next/image';
import axios from 'axios';

export const Navbar = () => {
  const [logo, setLogo] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://my-json-server.typicode.com/kodplex/pr-re-ec-products/db');
        setLogo(response.data.ecommerce.logo);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <main className="navbarWrapper">
        <Image src={logo} alt='itemImage' width={100} height={100} className='logo'/>
        <div>
            <button type='button' className='cartButton'>
              <CartIcon />
              <div className='cartText'>Cart</div>
              <DownArrow />
            </button>
        </div>
    </main>
  );
}
