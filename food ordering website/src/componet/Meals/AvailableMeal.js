import Card from '../UI/Card';
import classes from './AvailableMeal.module.css'
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Dosa',
    description: 'South Indian food',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Pizza',
    description: 'Itallian Food',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Burger',
    description: 'American, raw',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeal = () => {
  const mealList = DUMMY_MEALS.map((meal) => 
  <MealItem 
  id={meal.id}
  key={meal.id}
  name={meal.name}
  description={meal.description}
  price={meal.price} />);
  return (

    <section className={classes.meals}>
      <Card >
        <ul >
          {mealList}
        </ul>
      </Card>

    </section>
  );

}
export default AvailableMeal;