
import useCounter from "./useCounter";
import UseNavigate from "./UseNavigate";

const CustomHook = () => {
  const { count, increment, decrement } = useCounter(0);

  return (
    <>
      <div className="flex justify-center text-center my-5">
        <div>
         <h1 className="text-center "><span className="bg-gray-300 rounded-lg px-2 py-2">Custom Hook</span></h1>
          <h1>
            And reused in other component by importing/calling it in that
            component
          </h1>
        </div>
      </div>

      
      <div className="flex justify-center my-3 text-3xl">
        <button onClick={decrement} className="mx-2 text-3xl">-</button>
        {count}
        <button onClick={increment} className="mx-2 text-3xl">+</button>
      </div>

      <div>
        <h1 className="text-center "><span className="bg-gray-300 rounded-lg px-2 py-2">useNavigate</span></h1>
       <h1 className="text-center ">we use it to redirect user without using ("link to=") </h1>
       <UseNavigate/>
      </div>
    </>
  );
};

export default CustomHook;
