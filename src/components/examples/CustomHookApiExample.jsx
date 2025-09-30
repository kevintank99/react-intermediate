import { useState } from "react";
import useFetchData from "../../hooks/useFetchData";

export default function ProductList() {
  const [page, setPage] = useState(1);
  const limit = 5; // items per page

  const { data: products, loading, error } = useFetchData(
    "https://api.escuelajs.co/api/v1/products",
    page,
    limit
  );

  if (loading) return <h2 className="text-xl font-bold text-black dark:text-black">Loading...</h2>;

  if (error) return <p className="text-black dark:text-black">Error fetching products</p>;

  return (
    <div className="p-4 bg-white  min-h-screen">
      <h2 className="text-lg font-semibold mb-4 text-black dark:text-black">
        Products (Page {page})
      </h2>

      <table className="w-full border-collapse border border-black dark:border-black">
        <thead>
          <tr className="bg-black dark:bg-white">
            <th className="border border-black dark:border-black p-2 text-white dark:text-black">ID</th>
            <th className="border border-black dark:border-black p-2 text-white dark:text-black">Title</th>
            <th className="border border-black dark:border-black p-2 text-white dark:text-black">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
             
            >
              <td className="border border-black dark:border-black p-2 text-black dark:text-black">{product.id}</td>
              <td className="border border-black dark:border-black p-2 text-black dark:text-black">{product.title}</td>
              <td className="border border-black dark:border-black p-2 text-black dark:text-black">${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 border border-black dark:border-white bg-black text-white rounded disabled:opacity-50"
        >
          Prev
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-3 py-1 border border-black dark:border-white bg-black text-white rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}

