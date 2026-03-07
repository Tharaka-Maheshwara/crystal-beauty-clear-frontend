import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import mediaUpload from "../../utils/mediaUpload";

export default function EditProductForm() {
  const locationDate = useLocation();
  if (locationDate.state == null) {
    toast.error("Please select a product to edit");
    window.location.href = "/admin/products";
  }

  const [productId, setProductId] = useState(locationDate.state.productId);
  const [name, setName] = useState(locationDate.state.name);
  const [altNames, setAltNames] = useState(
    locationDate.state.altName.join(","),
  );
  const [price, setPrice] = useState(locationDate.state.price);
  const [labledPrice, setLabledPrice] = useState(
    locationDate.state.labeledPrice,
  );
  const [description, setDescription] = useState(
    locationDate.state.description,
  );
  const [stock, setStock] = useState(locationDate.state.stock);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  async function handleSubmit() {
    const promisesArray = [];
    for (let i = 0; i < images.length; i++) {
      const promise = mediaUpload(images[i]);
      promisesArray.push(promise);
    }

    try {
      let result = await Promise.all(promisesArray);

      if (images.length == 0) {
        result = locationDate.state.images;
      }

      const altNamesInArray = altNames.split(",");
      const product = {
        name: name,
        altName: altNamesInArray,
        price: price,
        labeledPrice: labledPrice,
        description: description,
        stock: stock,
        images: result,
      };

      const token = localStorage.getItem("token");
      console.log(token);

      await axios.put(
        import.meta.env.VITE_BACKEND_URL + "/api/product/" + productId,
        product,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        },
      );
      toast.success("Product updated successfully");
      navigate("/admin/products");
    } catch (error) {
      toast.error("Product editing failed");
      console.log(error);
    }
  }
  return (
    <div className="w-full h-full rounded-lg flex justify-center items-center   ">
      <div className="w-[500px] h-[600px] bg-white rounded-lg shadow-lg flex flex-col items-center ">
        <h1 className="text-3xl font-bold text-gray-700 m-[10px]">
          Edit Products
        </h1>

        <input
          disabled
          value={productId}
          onChange={(e) => {
            setProductId(e.target.value);
          }}
          className="w-[400px] h-[50px] border border-gray-300 rounded-xl text-center m-[5px]"
          placeholder="product ID"
        />

        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="w-[400px] h-[50px] border border-gray-300 rounded-xl text-center m-[5px]"
          placeholder="Product Name "
        />

        <input
          value={altNames}
          onChange={(e) => {
            setAltNames(e.target.value);
          }}
          className="w-[400px] h-[50px] border border-gray-300 rounded-xl text-center m-[5px]"
          placeholder="Alternative Names"
        />

        <input
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          className="w-[400px] h-[50px] border border-gray-300 rounded-xl text-center m-[5px]"
          type="number"
          placeholder="Price"
        />

        <input
          value={labledPrice}
          onChange={(e) => {
            setLabledPrice(e.target.value);
          }}
          className="w-[400px] h-[50px] border border-gray-300 rounded-xl text-center m-[5px]"
          type="number"
          placeholder="Labled Price"
        />

        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="w-[400px] h-[50px] border border-gray-300 rounded-xl text-center m-[5px]"
          placeholder="Description"
        />

        {/*images*/}

        <input
          type="file"
          onChange={(e) => {
            setImages(e.target.files);
          }}
          multiple
          className="w-[400px] h-[50px] border border-gray-300 rounded-xl text-center m-[5px]"
          placeholder="Product-Images"
        />

        {/*stock*/}
        <input
          value={stock}
          onChange={(e) => {
            setStock(e.target.value);
          }}
          className="w-[400px] h-[50px] border border-gray-300 rounded-xl text-center m-[5px]"
          type="number"
          placeholder="Stock"
        />

        <div className="w-full h-[100px] flex justify-center items-center rounded-lg">
          <Link
            to={"/admin/products"}
            className="px-5 py-2.5 text-sm font-medium text-white bg-red-500 border border-gray-300 rounded-lg w-[200px] h-[50px] text-center hover:bg-red-600 hover:text-white focus:ring-4 focus:ring-gray-100 transition-all"
          >
            Cancel
          </Link>
          <button
            onClick={handleSubmit}
            className="px-5 py-2.5 text-sm cursor-pointer font-medium text-white bg-green-500 border h-[50px] border-gray-300 rounded-lg w-[200px] m-1 text-center hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-gray-100 transition-all"
          >
            Edit Product
          </button>
        </div>
      </div>
    </div>
  );
}
