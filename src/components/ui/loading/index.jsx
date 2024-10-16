function LoadingIcon({size = 20, color = '#fff'}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
            width={size}
            height={size}
            style={{
                shapeRendering: "auto",
                display: "block",
                background: "rgba(255, 255, 255, 0)"
            }}
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g>
                <circle
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray="50.26548245743669 50.26548245743669"
                    stroke={color}
                    strokeWidth={8}
                    r={32}
                    cy={50}
                    cx={50}
                >
                    <animateTransform
                        values="0 50 50;360 50 50"
                        keyTimes="0;1"
                        dur="1s"
                        repeatCount="indefinite"
                        type="rotate"
                        attributeName="transform"
                    />
                </circle>
                <g />
            </g>
            {/* [ldio] generated by https://loading.io */}
        </svg>

    );
}

export const Loading = ({loading = false, children}) => {

    if (!loading) return children;

    return (
        <div className="p-20 flex items-center justify-center">
            <LoadingIcon color="#1D9BF0" size={40}/>
        </div>
    )
}

export default LoadingIcon;