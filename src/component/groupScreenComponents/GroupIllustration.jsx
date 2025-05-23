import { expensesPoint } from "../../data/GroupType";
import img from "../../images/billsIcon.jpg";

function GroupIllustration() {
  return (
    <div className=" mt-6">
      <div
        className=" flex justify-between bg-white items-center rounded-3xl drop-shadow-md overflow-hidden gap-8 px-8 py-4 
            max-[800px]:flex-col max-[800px]:py-8 max-[650px]:gap-4"
      >
        <div className=" w-1/2 max-[800px]:w-full max-[800px]:h-[316px] max-[650px]:h-auto">
          <img
            src={img}
            alt="Group illustration"
            className=" w-full h-auto max-[800px]:h-full object-contain"
          />
        </div>
        <div className=" w-1/2 flex flex-col gap-2 max-[1250px]:gap-1.5 max-[800px]:w-full">
          <h2 className="text-[1.55rem]  font-bold text-gray-800 font-Nunito max-[650px]:text-[1.35rem]">
            Create a group of expenses
          </h2>
          <p className=" text-gray-500 font-Roboto tracking-wide max-[1250px]:text-[15px]">
            Groups make it easy to track shared expenses with people you split
            costs with regularly. Create customized groups for roommates, trips,
            events, or any shared financial situation.
          </p>
          <div className=" flex flex-col gap-3.5 mt-2.5 max-[1250px]:gap-3 max-[650px]:mt-1.5">
            {expensesPoint.map((expense) => {
              return (
                <div
                  key={expense.point}
                  className=" flex items-center gap-2 max-[650px]:gap-2.5"
                >
                  <div className=" bg-green-100 w-6 h-6 flex items-center justify-center rounded-full flex-shrink-0">
                    <svg
                      className="w-4 h-4 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <p className=" text-[16px] text-gray-600">{expense.point}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GroupIllustration;
