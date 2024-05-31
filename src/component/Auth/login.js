import { useState } from 'react';
import '../../assets/scss/login.scss';
import { postLoginUser } from '../../services/apiServices';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaRegEyeSlash } from 'react-icons/fa';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        let res = await postLoginUser(email, password);

        if (res.data.status) {
            toast.success(res.data.message);
            navigate('/');
        } else {
            toast.danger(res.data.message);
        }
    }

    return (
        <div className="login-container container-fluid">
            <div className="login-header text-end p-2">
                Don't have an account yet?
                <button onClick={() => navigate('/register')} className='btn btn-outline-dark py-1 ms-2'>Sign up</button>
            </div>
            <div className='login-wrapper'>
                <div className="login-content">
                    <div className="login-title">
                        Typeform
                    </div>
                    <div className="login-welcome">
                        Hello, who’s this?
                    </div>
                    <div className="login-form">
                        <div className="form-group mb-3">
                            <label className="label-form mb-2">
                                Email
                            </label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' placeholder='abcd@gmail.com' className="form-control" />
                        </div>

                        <div className="form-group mb-2">
                            <label className="label-form mb-2">
                                Password
                            </label>
                            <div className="input-group">
                                <input onChange={(e) => setPassword(e.target.value)} value={password} type={showPassword ? 'text' : 'password'} placeholder='At least 8 characters' className="form-control" />
                                <span onClick={() => setShowPassword(!showPassword)} class="input-group-text"><FaRegEyeSlash /></span>
                            </div>
                        </div>

                        <div className='forgot-password mb-4'>
                            <a>Forgot password?</a>
                        </div>

                        <div class="d-grid gap-2 col-12 mx-auto">
                            <button onClick={() => handleSubmit()} class="btn btn-dark" type="button">Login to Typeform</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;