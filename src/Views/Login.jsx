import "../Styles/login.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginForm from "../components/Form";
function Login() {

    return (
      <div className="backgroundImgLogin">
        <div className="backgroundColorLogin">
      <Header></Header>
      <LoginForm></LoginForm>
      <Footer></Footer>
        


        </div>
      </div>
    )
  }
  
  export default Login
  