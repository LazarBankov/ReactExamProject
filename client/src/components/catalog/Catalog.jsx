import { Button } from "../ui/button";

export default function Catalog() {
    return (
      <div className="p-6">
        <div className="container mx-auto px-6">
          <div className="catalog-section mb-12">
            <h2 className="text-3xl font-semibold text-center mb-8">Name of Section</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="article-item bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="#"
                  alt="Article"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Article Name</h3>
                <div className="flex justify-between">
                  <Button className="details-button bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                    Details
                  </Button>
                  <Button className="bg-primary text-primary-foreground shadow-xs hover:bg-primary/90">
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
  