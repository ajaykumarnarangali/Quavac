import { useState } from 'react'
import Logo from '/Quavac_1.png'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';

function LoginForm() {

    const [formData, setFormData] = useState({ email: '', password: '' });
    const { setCurrentuser } = useUser();

    const navigate = useNavigate();
    const handleChangeData = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => {
            return {
                ...prev, [name]: value
            }
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(formData);
        if (!formData.email || !formData.password) {
            alert("enter email and password");
            return;
        }
        setCurrentuser(formData);
        navigate('/home')
    }

    return (
        <div>
            <div className="w-full max-w-sm bg-white shadow-md py-6 px-8">
                <div className="flex justify-center items-center w-full h-32">
                    <img
                        src={Logo}
                        alt="Quavac Logo"
                        className="h-full w-full object-contain"
                    />
                </div>
                <form className="space-y-6"
                    onSubmit={handleLogin}>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            name='email'
                            onChange={handleChangeData}
                            value={formData.email}
                            className="mt-1 block w-full border-b-2 outline-none"
                        />
                    </div>
                    <div>
                        <label className='text-slate-400 text-sm'>Password</label>
                        <input
                            type="password"
                            name='password'
                            onChange={handleChangeData}
                            value={formData.password}
                            className="mt-1 block w-full border-b-2 outline-none bg-slate-200 py-2" />
                    </div>
                    <div className='flex flex-col gap-2'>

                        <p className="text-md text-black">
                            By entering this site you agree to our{" "}
                            <a href="#" className="text-blue-600 hover:underline font-medium text-xs">
                                Terms of Use
                                and
                                Privacy Policy
                            </a>
                            .
                        </p>

                        <button
                            type="submit"
                            className="w-full bg-[#2097f3] text-white py-3 rounded font-semibold hover:bg-blue-600"
                        >
                            LOGIN
                        </button>

                        <div className="text-sm">
                            <a href="#" className="text-blue-600 hover:underline">
                                Cannot login?
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm