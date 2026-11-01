import { Hourglass, CircleDot } from "lucide-react";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <div className="logo-icon">
                    <Hourglass size={21} />
                </div>

                <span>SEMESTER<span className="logo-highlight">.</span></span>
            </div>

            <div className="status">
                <CircleDot size={10} />
                <span>LIVE COUNTDOWN</span>
            </div>
        </header>
    );
}

export default Header;