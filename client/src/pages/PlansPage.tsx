import PlanCard from "../Components/PlanCard";

function PlansPage() {
  return (
    <div className="flex items-center h-screen justify-center">
      <div className="w-[600px]">
        <h1 className="font-semibold text-3xl">
          Choose a plan that works for you
        </h1>
        <div className="flex mt-4">
          <PlanCard />
          <PlanCard />
        </div>
        <button className="rounded bg-red-400 p-3 text-white px-10 mt-3 w-full hover:bg-red-600">
          Purchase
        </button>
      </div>
    </div>
  );
}

export default PlansPage;
