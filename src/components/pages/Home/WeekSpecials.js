import { Link } from 'react-router-dom';
import bruschettaImage from './assets/bruschetta.jpg';
import greekSaladImage from './assets/greek-salad.jpg';
import lemonDessertImage from './assets/lemon-dessert.jpg';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from './MealCard';

const meals = [
  {
    name: 'Greek Salad',
    image: greekSaladImage,
    price: '$14.99',
    description: `Experience a burst of Mediterranean flavors with our Greek Salad, featuring crisp lettuce, vibrant bell peppers, and plump olives, all topped with creamy Chicago-style feta cheese and finished with crunchy garlic and rosemary croutons for that perfect crunch.`,
  },
  {
    name: 'Bruschetta',
    image: bruschettaImage,
    price: '$4.99',
    description: `elight in our Bruschetta, where perfectly grilled bread meets a fragrant blend of garlic, salt, and high-quality olive oil, creating a simple yet irresistible appetizer that captures the essence of Italian cuisine`,
  },
  {
    name: 'Lemon Dessert',
    image: lemonDessertImage,
    price: '$8.99',
    description: `Savor a slice of nostalgia with our Lemon Dessert, crafted from a cherished family recipe. Each ingredient is thoughtfully chosen for authenticity, delivering a refreshing and zesty treat that feels like a warm hug from grandma.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <Link className="button-primary" to={pages.get('orderOnline').path}>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) =>
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default WeekSpecials;
