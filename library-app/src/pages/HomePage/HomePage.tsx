import { LoginForm } from "../../features/authentication/components/LoginForm/LoginForm";

export default function HomePage():JSX.Element {
    return (
        <div className ="page">
            Home page 
            <LoginForm toggleRegister={() => { /* implement toggleRegister functionality here */ }} /> 
        </div>
    )
}