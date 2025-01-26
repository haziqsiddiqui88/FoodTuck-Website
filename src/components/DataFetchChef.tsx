import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';


const DataFetchFood = async () => {
  const query = await client.fetch(
    `*[_type == "food"]{
        _id,
        name,
        price,
        description,
        tags,
        available,
        "imageUrl": image.asset->url
    }`
  );
  console.log(query);

  return (
    <div className="bg-white  mt-5 ">
      <h1 className="text-2xl font-bold mb-6 flex  ">Food</h1>
      <div className="flex flex-wrap  justify-between gap-6">
        {query.map((food: any) => {
          return (
            <div
              key={food._id}
              className="bg-gray-100 rounded-lg shadow-lg p-4 w-[300px] flex flex-col items-center"
            >
              <Image
                src={urlFor(food.imageUrl).url()}
                alt={food.name}
                width={300}
                height={200}
                className="rounded-md shadow hover:shadow-lg transition"
              />
              <h2 className="text-lg font-semibold text-gray-800 mt-4">
                {food.name}
              </h2>
              <p className="text-gray-600 text-sm mt-1">${food.price}</p>
              <p className="text-gray-500 text-xs mt-2">{food.tags}</p>
              <p className="text-gray-700 text-sm mt-2">{food.description}</p>
              <p
                className={`text-sm font-medium mt-3 ${
                  food.available ? "text-green-600" : "text-red-600"
                }`}
              >
                {food.available ? "Available" : "Not Available"}
              </p>
              <div className='flex flex-row gap-20'>
              <button>Buy Now</button>
              <button>Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default DataFetchFood;