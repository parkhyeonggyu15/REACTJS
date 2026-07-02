import { useState, useEffect } from "react"
import axios from "axios"

const User = () => {
    const [userinfo, setUserInfo] = useState(null);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchUserInfo = async () => {
            try {
                const resp = await axios.get("http://localhost:8080/user",{withCredentials:true}); //쿠키의 JWT로 BN이 인증
                setUserInfo(resp.data);     // { username,role}
                setError(null);
            } catch (err) {
                console.error("User info fetch error:", err);
                setError("사용자 정보를 가져오는 데 실패했습니다.");
            }
        };
        fetchUserInfo();
    })
    return (
        <div>
            <h1>USER PAGE</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {userinfo && (
                <div>
                    <p>Username : {userinfo.username}</p>
                    <p>Role : {userinfo.role}</p>
                </div>
            )}
        </div>
    )
}
export default User