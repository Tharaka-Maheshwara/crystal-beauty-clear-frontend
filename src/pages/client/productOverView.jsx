import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import toast from "react-hot-toast";

export default function ProductOverView() {
  const params = useParams();
  console.log(params.id);
  if (params.id == null) {
    window.location.href = "/products";
  }

  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (status == "loading") {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/product/" + params.id)
        .then((res) => {
          console.log(res);
          setProduct(res.data);
          setStatus("loaded");
        })
        .catch(() => {
          toast.error("Product not found");
          setStatus("error");
        });
    }
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center">
      {status === "loading" && <Loader />}
      {status === "loaded" && (
        <div className="w-full h-full">Product Loaded</div>
      )}
      {status === "error" && <div>Error</div>}
    </div>
  );
}
