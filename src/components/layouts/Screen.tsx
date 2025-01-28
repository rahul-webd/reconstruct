import { ReactNode } from "react";

interface ScreenProps {
    children?: ReactNode
}

const Screen = ({
    children
}: ScreenProps) => {

    return (
        <div
            style={{
                display: "grid",
                position: "fixed",
                inset: 0,
                placeItems: "center",
                backgroundColor: "#d9e2e8"
            }}>
            {children}
        </div>
    )
}

export default Screen;