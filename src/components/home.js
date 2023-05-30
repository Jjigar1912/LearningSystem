import "../components/home.css";
    const move = ()=>{
        const signupbtn = document.querySelector('.signupBtn');
        const signinbtn = document.querySelector('.signupBtn');
        const formBx = document.querySelector('.formBx');
        const body = document.querySelector('.container1');
        formBx.classList.add("active");
        body.classList.add('active');
    }
    const moveLeft = ()=>{
        const signupbtn = document.querySelector('.signupBtn');
        const signinbtn = document.querySelector('.signupBtn');
        const formBx = document.querySelector('.formBx');
        const body = document.querySelector('.container1');
        body.classList.remove('active');
        formBx.classList.remove("active");
    }


const home = ()=>{
    
    return(
        <>
            <div className="container1">
                <div className="container2">
                    <div className="bluebg">
                        <div className="box signin">
                            <h2>Already Have an Account ? </h2>
                            <button className="signinbutton" onClick={moveLeft}>Sign in</button>
                        </div>
                        <div className="box signup">
                            <h2>Don't Have an Account ?</h2>
                            <button className="signupBtn" onClick={move}>Sign up</button>
                        </div>
                    </div>
                    <div className="formBx">
                        <div className="form signin">
                            <form>
                                <h3>Sign In</h3>
                                <input type="text" placeholder="Username" />
                                <input type="password" placeholder="Password" />
                                <input type="submit" value="Login" />
                                <a href="#" className="forgot">Forgot Password</a>
                            </form>
                        </div>
                        <div className="form signup">
                            <form>
                                <h3>Sign Up</h3>
                                <input type="text" placeholder="Username" />
                                <input type="email" placeholder="Email Address" />
                                <input type="password" placeholder="Password" />
                                <input type="password" placeholder="Confirm Password" />
                                <input type="submit" value="Register" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default home;