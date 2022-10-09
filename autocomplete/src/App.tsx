import { useState, useEffect } from 'react';
import { fetchProducts } from './api';
import { Autocomplete } from './components/Autocomplete';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  const [products, setProducts] = useState([]);

  const getOptions = async () => {
    const res = await fetchProducts();
    setProducts(res);
  };

  const handleSelectOption = (option: any) => {
    console.log(option);
  };

  useEffect(() => {
    getOptions();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Autocomplete
        onSelect={handleSelectOption}
        placeHolder={'products'}
        options={products}
      />
    </>
  );
}

export default App;
