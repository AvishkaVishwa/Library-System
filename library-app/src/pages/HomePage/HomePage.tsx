import { useSelector } from "react-redux";
import { RootState } from "../../redux/reduxStore";
import { LoginRegisterModal } from "../../features/authentication";

export default function HomePage():JSX.Element {

    const displayLogin = useSelector((state: RootState) => state.modal.displayLogin);
    return (
        <div className ="page">
           {displayLogin ? <LoginRegisterModal /> : <></>}
        </div>
    )
} 