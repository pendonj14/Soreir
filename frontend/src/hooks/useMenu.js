import { useState, useEffect } from 'react';
import { getMenuItems } from '../services/menuService';

export const useMenu = () => {
  const [menuData, setMenuData] = useState({});
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const items = await getMenuItems();
        const grouped = items.reduce((acc, item) => {
          const cat = item.category;
          if (!acc[cat]) acc[cat] = [];
          acc[cat].push(item);
          return acc;
        }, {});
        const cats = Object.keys(grouped);
        setMenuData(grouped);
        setCategories(cats);
        setActiveCategory(cats[0] ?? null);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  return { menuData, categories, activeCategory, setActiveCategory, loading };
};
