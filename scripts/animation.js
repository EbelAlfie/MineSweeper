export const exitAnimation = [
    { 
        transform: "translateY(10px)"
    },
    { 
        transform: "translateY(-10px)"
    },
    { 
        transform: "translateY(-20px)"
    },
    { 
        transform: "translateY(-100vh)",
        display: "none",
    },
]

export const enterAnimation = [
    {
        display: "block",
        opacity: "0.1"
    },
    {
        opacity: "0.4"
    },
    {
        opacity: "0.6"
    },
    {
        opacity: "0.8"
    },
    {
        opacity: "1.0"
    }
]