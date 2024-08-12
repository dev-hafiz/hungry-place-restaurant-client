const FoodCategory = () => {
  return (
    <div className="lg:container  mx-auto  mt-32 mb-24  relative box-border">
      <h3 className="headinTwo text-center pb-4  relative before:absolute before:bg-[#CF2424] before:h-1 before:w-20 before:content-''  before:bottom-0 before:left-1/2 before:-translate-x-1/2">
        Food Categories
      </h3>
      <div className="flex flex-wrap justify-around ">
        <div className="relative  md:mx-0 mx-5 isolate flex flex-col justify-end overflow-hidden rounded-2xl text-start  pt-28 max-w-sm  mt-16">
          <img
            src="https://images.unsplash.com/photo-1496662559123-ac291228fb6c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Deshi Food Image"
            className="absolute object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-700/40  "></div>
          <div className="z-10  py-2 ml-4 mb-3 text-sm font-medium  outline-none transition-all duration-100 ease-in-out border-l-4 border-l-rose-600 ">
            <div className="ml-2 mr-4 mb-1">
              <h4 className="card-title  mb-1">Deshi Foods</h4>
              <div className="card-des leading-6 ">
                Deshi food brings blissful satisfaction, with every bite
                offering joy and contentment.
              </div>
            </div>
          </div>
        </div>
        <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl text-start  pt-28 max-w-sm  mt-16">
          <img
            src="https://images.unsplash.com/photo-1561758033-f8ff74d6494a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Fast Food Image"
            className="absolute object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-700/40  "></div>
          <div className="z-10  py-2 ml-4 mb-3 text-sm font-medium  outline-none transition-all duration-100 ease-in-out border-l-4 border-l-rose-600 ">
            <div className="ml-2 mr-4 mb-1">
              <h4 className="card-title   mb-1">Fast Foods</h4>
              <div className=" card-des leading-6">
                Juicy burgers devoured quickly, leaving plates clean and diners
                fully satisfied all around
              </div>
            </div>
          </div>
        </div>
        <div className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl text-start  pt-28 max-w-sm  mt-16">
          <img
            src="https://images.unsplash.com/photo-1563245372-918a54a875af?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Chinese Food Image"
            className="absolute  object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-700/40  "></div>
          <div className="z-10  py-2 ml-4 mb-3 text-sm font-medium  outline-none transition-all duration-100 ease-in-out border-l-4 border-l-rose-600 ">
            <div className="ml-2 mr-4 mb-1">
              <h4 className=" card-title mb-1">Chinese Foods</h4>
              <div className=" card-des leading-6 ">
                Delight in aromatic and diverse Chinese cuisine, where every
                dish offers a unique experience.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCategory;
