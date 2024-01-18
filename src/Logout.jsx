import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useEffect } from "react";

function Logout() {
    const navigate = useNavigate();
    const auth = getAuth();
    useEffect(() => {signOut(auth).then(() => {
        navigate("/login");
    });
});
return null;
}

export default Logout;