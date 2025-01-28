// Design
// https://www.uidesigndaily.com/posts/sketch-webshop-components-button-card-day-1149
import Screen from "../layouts/Screen";

const textColor = '#0e0e0c'
const btnColor = '#0b0a08'
const btnTextColor = '#ffa2ad'

const Sm = () => {

    return (
        <Screen>
            <div
                style={{
                    height: 320,
                    width: 320,
                    backgroundColor: "#ebf0f3",
                    borderRadius: 16,
                    display: "grid",
                    placeContent: "center",
                    textAlign: "center",
                }}
                className="font-poppins">
                <p
                    style={{
                        marginBottom: 22,
                        fontWeight: 500,
                        fontSize: 18,
                        color: textColor
                    }}>
                    Legend essential
                </p>
                <p
                    style={{
                        fontSize: 28,
                        color: textColor,
                        fontWeight: 600,
                        marginBottom: 40
                    }}>
                    $345
                </p>
                <button
                    style={{
                        backgroundColor: btnColor,
                        color: btnTextColor,
                        padding: '16px 32px 16px 32px',
                        fontWeight: 500,
                        fontSize: 15
                    }}>
                    Add to cart
                </button>
            </div>
        </Screen>
    )
}

export default Sm;