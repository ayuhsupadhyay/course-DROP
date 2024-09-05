import loginImg from "../assets/Images/login.webp";
import Template from "../Components/core/Auth/Template";
import { login } from "../services/operations/authAPI";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TbCornerDownRightDouble } from "react-icons/tb";
import { BsLightningChargeFill } from "react-icons/bs";
import { motion } from "framer-motion"; // Import Framer Motion for animations

function Login() {
  const [showDemo, setShowDemo] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      {/* Demo Box */}
      {showDemo && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex justify-center items-center z-30"
        >
          <div className="relative bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-2xl shadow-2xl flex flex-col items-center max-w-md mx-auto">
            <button
              onClick={() => setShowDemo(false)}
              className="absolute top-2 right-2 text-white hover:text-gray-200 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="24" height="24">
                <circle cx="50" cy="50" r="45" fill="#ffffff" stroke="#ffffff" strokeWidth="2" />
                <circle cx="50" cy="50" r="20" fill="#ffffff" />
              </svg>
            </button>
            <div className="flex flex-col items-center gap-4">
              <p className="text-2xl font-bold text-white flex items-center">
                Experience Our Platform <BsLightningChargeFill size={24} />
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={() => dispatch(login("ayush.2101009cs@iiitbh.ac.in", "123", navigate))}
                  className="bg-yellow-400 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-500 transition"
                >
                  <TbCornerDownRightDouble className="text-lg inline" />
                  Instructor Demo
                </button>
                <button
                  onClick={() => dispatch(login("ayushupadhyay345@gmail.com", "123", navigate))}
                  className="bg-yellow-400 text-white font-semibold px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-500 transition"
                >
                  <TbCornerDownRightDouble className="text-lg inline" />
                  Student Demo
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
      <Template
        title="Welcome Back"
        description1="Build skills for today, tomorrow, and beyond."
        description2="Education to future-proof your career."
        image={loginImg}
        formType="login"
      />
    </>
  );
}

export default Login;
