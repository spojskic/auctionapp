import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../utilities/productsApi";

const ProductOverviewPage = () => {
  const [product, setProduct] = useState("");
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await getProductById(id);
      setProduct(response.data);
    })();
  }, []);

  return (
    <div>
      <p>
        {product.id} - {product.productName} - {product.startDate}
      </p>
    </div>
  );
};

export default ProductOverviewPage;