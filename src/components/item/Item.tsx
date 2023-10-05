import Image from 'next/image';
import './Item.css'
import { GrayStarIcon, GreenStarIcon } from '@/assets/icons/icons';

interface ItemProps {
    item: {
      id: string;
      name: string;
      description: string;
      price: number;
      status: string;
      rating: number;
      ratedBy: number;
      image: string;
    };
  }

const Item: React.FC<ItemProps> = ({ item }) => {

  const greenStarsCount = item.rating;
  const grayStarsCount = 5 - greenStarsCount;

  const greenStars = Array.from({ length: greenStarsCount }).map((_, index) => (
    <GreenStarIcon key={index} />
  ));

  const grayStars = Array.from({ length: grayStarsCount }).map((_, index) => (
    <GrayStarIcon key={index} />
  ));
return (
    <div className="itemWrapper">
        <div className='imageWrapper'>
            <Image src={item.image} alt='itemImage' width={200} height={200} />
        </div>
        <div className='top'>
          <h3>{item.name}</h3>
          <div className='price'><sup>$</sup><h3>{item.price}</h3><sup>00</sup></div>
        </div>
        <div className='des'>{item.description}</div>
        <div>{greenStars}{grayStars}</div>
        <button type='button' className='addBtn'>Add to Cart</button>
    </div>
);
};

export default Item;