import react, { useContext } from "react";
import { WrapperContext } from "./App";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ Children }) {
    const { isLogin } = useContext(WrapperContext);

    if (isLogin) {
        return Children;
    }
    return <Navigate to="/Login" />;
}