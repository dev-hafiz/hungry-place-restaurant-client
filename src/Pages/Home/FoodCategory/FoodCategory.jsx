const FoodCategory = () => {
  return (
    <div className="lg:container  mx-auto  mt-32 mb-24  relative">
      <h3 className="headinTwo text-center pb-4  relative before:absolute before:bg-[#CF2424] before:h-1 before:w-20 before:content-''  before:bottom-0 before:left-1/2 before:-translate-x-1/2">
        Food Categories
      </h3>
      <div className="flex flex-wrap justify-around ">
        <button className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl text-start  pt-28 max-w-sm  mt-16">
          <img
            src="https://images.unsplash.com/photo-1496662559123-ac291228fb6c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Deshi Food Image"
            className="absolute object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-700/40  "></div>
          <div className="z-10  hover:bg-[#CF2424]   transition-all duration-3000 ease-linear px-8 pb-5">
            <h4 className=" mt-5 text-3xl font-bold text-white">Deshi Foods</h4>
            <div className=" overflow-hidden text-sm leading-6 text-gray-300">
              Deshi food bliss ends, contentment in every flavor.
            </div>
          </div>
        </button>
        <button className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl text-start  pt-28 max-w-sm  mt-16">
          <img
            src="https://images.unsplash.com/photo-1561758033-f8ff74d6494a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fast Food Image"
            className="absolute object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-700/40  "></div>
          <div className="z-10  hover:bg-[#CF2424]   transition-all duration-3000 ease-linear px-8 pb-5">
            <h4 className=" mt-5 text-3xl font-bold text-white">Fast Foods</h4>
            <div className=" overflow-hidden text-sm leading-6 text-gray-300">
              Juicy burgers devoured, leaving empty plates.
            </div>
          </div>
        </button>
        <button className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl text-start  pt-28 max-w-sm  mt-16">
          <img
            src="https://images.unsplash.com/photo-1563245372-918a54a875af?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Chinese Food Image"
            className="absolute  object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-700/40  "></div>
          <div className="z-10  hover:bg-[#CF2424]   transition-all duration-3000 ease-linear px-8 pb-5">
            <h4 className=" mt-5 text-3xl font-bold text-white">
              Chinese Foods
            </h4>
            <div className=" overflow-hidden text-sm leading-6 text-gray-300">
              Delight in aromatic, diverse Chinese cuisine.
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default FoodCategory;
