import Link from "next/link";

import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

import ProductCard from "@/components/ProductCard";
import ErrorComponent from "@/components/ErrorComponent";

import { serverSideFetch } from "@/misc/fetchOperations";

async function ProductsPage() {
  try {
    const response = await new Promise((res, rej) => {
      setTimeout(() => {
        res({ error: true, message: "QWE", body: {} });
      }, 20000);
    });
    const { error, message, body: products } = response;
  } catch (err) {
    return <p>CATCH</p>;
  }

  return (
    <>
      <div className="flex items-center gap-4 text-4xl mb-10">
        <h1>Products</h1>
        <Link
          href={"/admin/products/add"}
          title="Create New Product"
          className="bg-teal-800 hover:bg-teal-700 active:bg-teal-600 text-white rounded-full"
        >
          <Icon path={mdiPlus} size={1.5} />
        </Link>
      </div>
    </>
  );
}

export default ProductsPage;
