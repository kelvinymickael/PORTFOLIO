const getAllCards = async (resources) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}${resources}`);

  const data = await response.json();

  return data;
};

export default getAllCards;
