import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios"


const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    useEffect(() => {

        const validateToken = async () => {
            try {
                const resp = await axios.get("http://localhost:8080/validate", {withCredentials : true});
                console.log("토큰검증 성공 : ",resp);
                navigate("/");
            } catch (error) {
                console.log("토큰검증실패..", error);
            }
        }
        validateToken();

    }, [navigate])

    const handleLogin = async () => {
        try {
            const resp = await axios.post(
                "http://localhost:8080/login",
                { username, password },
                { headers: { "Content-Type": "application/json" }, withCredentials: true }

            );
            alert("로그인 성공:", resp.data);
            console.log(resp.data)
            navigate("/");  //성공시 / 경로로 이동
        } catch (error) {
            console.log("로그인 실패:", error.response ? error.response.data : error);
            alert("로그인 실패! 다시 시도해주세요."); //실패 시 메시지 표시
        }
    }

    return (
        <div>
            <h1>LOGIN PAGE</h1>
            USERNAME : <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} /><br />
            PASSWORD : <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} /><br />
            <button onClick={handleLogin}>LOGIN</button>
        </div>
    )
}
export default Login