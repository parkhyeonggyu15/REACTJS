import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios"

//로그아웃 : 진입 즉시 bn/
const Logout = ()=>{
    const navigate = useNavigate();
    useEffect(()=>{
        const performLogout = async()=>{
            try{
                await axios.post("http://localhost:8080/logout",{},{withCredentials:true});
            }catch(error){
                console.log("로그아웃 실패!",error);
            }finally{
                navigate("/login");  //성공/실패 무관하게 로그인으로
            }
        }
        performLogout();
    },[navigate]);
    return(
        <div>
            <h1>LOGOUT PAGE</h1>
            <p>로그아웃 처리중...</p>
        </div>
    )
}
export default Logout