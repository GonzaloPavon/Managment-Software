import  { API } from  '../../config.js';
import axios from 'axios';
import  React,  { useState, useEffect  } from  'react';
import  PaginationList  from  './PaginationList';
import  Porducts  from  './Products';

const PorductList = () =>  {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await axios.get(`${API}/products`);
      setProducts(res.data);
      setLoading(false);
    };
    getProducts();
  }, []);

  const onChangeKeyword = (e) => {
    setKeyword(e.target.value)
    console.log(keyword);
  }

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.filter(product => product.productName.includes(keyword)).slice(indexOfFirstProduct, indexOfLastProduct);

    return(
      <div  className="PLScreen">
        <div  className="PLCard">
          <div  className="PLCardContainer">
            <div  className="PLHeader">
              <input  type="text"
                      placeholder="Buscar productos ..."
                      onChange={onChangeKeyword}
                      className="PLSearchBar"/>
              <h4 className="PLTitle">Productos:</h4>
            </div>
            <div  className="PLProducts">
              <Porducts loading={loading}
                        products={currentProducts}/>
            </div>
            <div  className="PLPagination">
              <PaginationList productsPerPage={productsPerPage}
                              totalProducts={products.length}
                              paginate={paginate}/>
            </div>
          </div>
        </div>
      </div>
    )
}

export default PorductList;
