import HomePageContainer from "./homepage.styles";
import { useSelector } from "react-redux";

const HomePage = () => {
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
          <img src={product.url} alt={"img"} style={{ width: "200px" }} />
        </div>
      ))}
    </HomePageContainer>
  );
};

export default HomePage;
