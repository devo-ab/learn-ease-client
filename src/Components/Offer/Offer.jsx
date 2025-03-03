import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div>
      <div className="p-6 py-12 bg-orange-500 mt-10">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to
              <br className="sm:hidden" />
              50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span>Discount on course! Use code:</span>
              <span className="font-bold text-lg">LEARN50</span>
            </div>
            <Link><button className="btn hover:text-black px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-900 text-gray-50 border-gray-600">
              Enroll Now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
