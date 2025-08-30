import Background from "../components/Background"
import LoginForm from "../components/LoginForm"

function Login() {
    return (
        <div className="w-full flex justify-center items-center md:items-start h-screen
         bg-gradient-to-r from-teal-600 via-cyan-700 to-blue-800 py-16 px-3 md:px-0">
            <Background />
            <LoginForm/>
        </div>
    )
}

export default Login