import React, { useContext, useMemo } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'


const FoodDisplay = ({category}) => {

    const{food_list, searchQuery}= useContext(StoreContext)

    const filteredList = useMemo(() => {
      return food_list.filter((item) => {
        const matchesCategory = category==="All" || category===item.category;
        const matchesSearch = !searchQuery || 
          item.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });
    }, [food_list, category, searchQuery]);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top Dishes near you</h2>
      {filteredList.length === 0 ? (
        <p className="food-display-empty">
          {searchQuery 
            ? `No dishes found matching "${searchQuery}"`
            : "No dishes available in this category"}
        </p>
      ) : (
        <div className="food-display-list">
          {filteredList.map((item,index)=>{
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          })}
        </div>
      )}
    </div>
  )
}

export default FoodDisplay
