import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

interface PrimaryButtonProps {
    to: string;
    children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ to, children }) => (
    <NavLink to={to}>
        <button className="group relative h-14 w-full sm:w-48 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-400 p-[1px] transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem] hover:shadow-cyan-500">
            <div className="relative h-full w-full rounded-full bg-blue-950 px-8 transition-all duration-300 group-hover:bg-blue-900/90">
                <div className="absolute inset-0">

                </div>

                <span className={`absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 transition-opacity duration-300`}></span>

                <div className="relative flex h-full items-center justify-center gap-2">
                    <span className="font-sf-bold text-white">{children}</span>
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19 12H4.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>

        </button>

    </NavLink>
);

export default PrimaryButton;