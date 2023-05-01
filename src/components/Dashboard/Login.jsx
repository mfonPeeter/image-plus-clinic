import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="pb-44 bg-[#efefef]">
      <div className="flex justify-center px-2">
        <div className="w-full mt-10 pb-8 border border-t-0 border-gray-400 rounded sm:w-9/12 md:w-8/12 xl:w-1/2">
          <h3 className="w-full py-2 mb-8 text-center text-2xl text-white font-bold bg-[#f97729]">
            Login
          </h3>
          <form className="flex flex-col space-y-4 px-6 text-lg sm:px-10">
            <div className="flex items-center justify-between space-x-2 sm:space-x-0">
              <label htmlFor="email">E-Mail Address</label>
              <input
                className="py-1 px-3 w-[65%] bg-transparent border border-gray-400 rounded"
                id="email"
                type="email"
              />
            </div>
            <div className="flex items-center justify-between space-x-2 sm:space-x-0">
              <label htmlFor="password">Password</label>
              <input
                className="py-1 px-3 w-[65%] bg-transparent border border-gray-400 rounded"
                id="password"
                type="password"
              />
            </div>
            <div className="flex justify-center space-x-2">
              <input id="remember" type="checkbox" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <div className="flex justify-center">
              <button className="px-4 py-2 w-96 text-[#f97729] text-sm uppercase font-bold border-2 border-[#f97729] rounded transition-colors duration-200 hover:text-white hover:bg-[#f97729]">
                Login
              </button>
            </div>
            <Link
              className="inline-block text-base underline text-blue-500 text-center"
              to="/login"
            >
              Forgot Your Password
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
