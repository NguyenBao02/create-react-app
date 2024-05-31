import { useState } from "react";
import { postRegisterUser } from "../../services/apiServices";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
const SignUp = (props) => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        let res = await postRegisterUser(email, username, password);
        if (res.data.status) {
            navigate('/login')
            toast.success(res.data.message);
        } else {
            toast.danger(res.data.message);
        }
    }

    return (
        <div className="login-container container-fluid">
            <div className="login-header text-end p-2">
                Already have an account yet?
                <button onClick={() => navigate('/login')} className='btn btn-outline-dark py-1 ms-2'>Log In</button>
            </div>
            <div className='login-wrapper'>
                <div className="login-content">
                    <div className="login-title">
                        Typeform
                    </div>
                    <div className="login-welcome">
                        Hello, register an account
                    </div>
                    <div className="login-form">
                        <div className="form-group mb-3">
                            <label className="label-form mb-2">
                                Email
                            </label>
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='abcd@gmail.com' className="form-control" />
                        </div>

                        <div className="form-group mb-3">
                            <label className="label-form mb-2">
                                Username
                            </label>
                            <input value={username} onChange={(e) => setUsername(e.target.value)} type='email' placeholder='Eric' className="form-control" />
                        </div>

                        <div className="form-group mb-3">
                            <label className="label-form mb-2">
                                Password
                            </label>
                            <div className="input-group">
                                <input value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'text' : 'password'} placeholder='At least 8 characters' className="form-control" />
                                <span onClick={() => setShowPassword(!showPassword)} class="input-group-text"><FaRegEyeSlash /></span>
                            </div>
                        </div>

                        <div class="d-grid gap-2 col-12 mx-auto mt-4">
                            <button onClick={() => handleSubmit()} class="btn btn-dark" type="button">Register to Typeform</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;