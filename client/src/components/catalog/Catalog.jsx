import { Button } from "../ui/button";

export default function Catalog() {
    return (
      <div className="p-6 bg-[#f173e7] border-0">
        <div className="container mx-auto px-6">
          <div className="catalog-section mb-12">
            <h2 className="text-3xl font-semibold text-center mb-8">Name of Section</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="shadow-lg rounded-2xl overflow-hidden hover:bg-white transition duration-200">
                <img
                  src="459197011_8585675771444150_1964434466116972985_n.jpg"
                  alt="Article"
                  className="w-full h-48 object-cover rounded-lg mb-4 hover:scale-105 transition duration-200"
                />
                <h3 className="text-1xl font-semibold text-center mb-8">Комплект за Кръщене</h3>
                <div className="flex justify-center gap-8 flex-wrap p-4">
                  <Button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200">
                    Details
                  </Button>
                  <Button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition duration-200">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  