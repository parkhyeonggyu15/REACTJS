import { useLocation } from 'react-router-dom';

const Exception = () => {
    const location = useLocation();
    const { message, status } = location.state || {}; // 예외 정보 가져오기

    return (
        <div>
            <h1>EXCEPTION</h1>
            {status && <p>Status Code: {status}</p>}
            {message && <p>Message: {message}</p>}
        </div>
    )
}
export default Exception;

