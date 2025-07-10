import DefultButton from "../../components/buttons/DefultButton";

const Status = () => {
  return (
    <main className="overflow-y-auto bg-white">
      <div className="container px-6 mx-auto grid">
        <h2 className="my-6 text-2xl font-semibold text-[#10244b]">
          Dashboard
        </h2>
        <div
          className="flex flex-col md:flex-row bg-white w-full md:h-70 rounded-lg px-5 py-3 my-3"
          style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          <div className="md:w-1/2 w-full flex flex-col gap-2 mb-4 md:mb-0 order-2 md:order-1 ">
            <div className="md:h-1/3 flex items-center">
              <h2 className="text-lg md:text-2xl font-bold text-gray-800">
                EXAMS TIME
              </h2>
            </div>

            <div className="md:h-1/3">
              <p className="text-sm lg:text-base  text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium incidunt tempora distinctio est placeat voluptate.
              </p>
            </div>

            <div className="md:h-1/3">
              <DefultButton name={"View Exam Trips"} />
            </div>
          </div>

          <div className="md:w-1/2 w-full h-48 md:h-full overflow-hidden rounded-lg order-1 md:order-2 mb-2 md:mb-0">
            <img
              src="/src/assets/images/101940575_072a3d.png"
              alt="image exam tools"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Status;
