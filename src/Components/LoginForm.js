import React,{useState} from 'react'
import './LoginForm.css'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"
import CloseIcon from '@material-ui/icons/Close';
import ReportProblemRoundedIcon from '@material-ui/icons/ReportProblemRounded';
import { TextField } from '@material-ui/core'
import VisibilityOffRoundedIcon from '@material-ui/icons/VisibilityOffRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import FormSubmit from "../Components/FormSubmit"

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false)
    const onSubmit = () => {
        
    }
    return (
        <div className="loginScreen">
          <div className="loginScreen__info">
              <h4>Login or create an account 🌟</h4>
           </div>            
              <div className="loginScreen_right">
                <form onSubmit={handleSubmit(onSubmit)} className="loginForm">
                    <div className="loginScreen_inputContainer">
                        <TextField
                            id="outlined-basic"
                            variant="outlined"
                            label="Email"
                            type="email"
                            name="email"
                            InputLabelProps={{ style: { color: "rgba(0,0,0,.56)" } }}
                            inputProps={{ style: { fontWeight: "800" } }}
                            className="loginScreen_input"
                            {...register("email", { required: true })}
                            />
                           {errors.email && (
                            <div className="loginScreen_error">
                                <CloseIcon fontSize="small" />
                                <span style={{color:"red"}}>Enter your email.</span>
                                <ReportProblemRoundedIcon fontSize="small" className="loginScreen_reportError"/>
                            </div>
                        )}
                    </div>
                    <div className="loginScreen_inputContainer">
                        <TextField
                            id="outlined-basic"
                            label="Password"
                            variant="outlined"
                            type={showPassword?"text":"password"}
                            name="password"
                            InputLabelProps={{ style: { color: "rgba(0,0,0,.56)" } }}
                            inputProps={{ style: { fontWeight: "600" } }}
                            className="loginScreen_input"
                            {...register("password", { required: true })}
                            />
                            {showPassword ?
                                (<VisibilityRoundedIcon className="loginScreen_visibilityIcon" onClick={() => setShowPassword(!showPassword)} />)
                                : (<VisibilityOffRoundedIcon className="loginScreen_visibilityIcon" onClick={() => setShowPassword(!showPassword)} />)
                            }
                           {errors.password && (
                            <div className="loginScreen_error">
                                <CloseIcon fontSize="small" />
                                <span style={{color:"red"}}>Enter your password.</span>
                                <ReportProblemRoundedIcon fontSize="small" className="loginScreen_reportError"/>
                            </div>
                        )}
                    </div>
                    <div className="loginScreen_links">
                        <Link to="#">Forgot your username ?</Link>
                        <Link to="#">Forgot your password ?</Link>
                        <Link to="/signup" className="new_one">Create new account</Link>
                    </div>
                    <FormSubmit name="Sign in" type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
