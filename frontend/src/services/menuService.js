const API_URL = `${import.meta.env.VITE_API_URL}/menu`;

export const getMenuItems = async () => {
  const response = await fetch(`${API_URL}/all`);
  if (!response.ok) throw new Error('Failed to fetch menu items');
  return await response.json();
};
