import HomePageContainer from "./homepage.styles";
import { useSelector } from "react-redux";

const HomePage = () => {
  // Every time you want to get data from the store,use "useSelector" hook and access the slice name("products" in this case) on the "state" object received
  const productsSlice = useSelector((state) => state.products);
  return (
    <HomePageContainer>
      {productsSlice.loading && <div>Loading Products</div>}
      {productsSlice.products.map((product) => (
        <div
          key={product.id}
          style={{ borderStyle: "solid", marginBottom: "10px" }}
        >
          <p>
            <span style={{ color: "red" }}>ID:{product.id}</span>
          </p>
          <img src={product.url} alt="Red dot" style={{ width: "200px" }} />
        </div>
      ))}
    </HomePageContainer>
  );
};

export default HomePage;
