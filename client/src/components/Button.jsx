
function Button({ mapType, setMapType }) {
    return (
        <div className="absolute top-2 left-2 flex">
            <button
                onClick={() => setMapType("roadmap")}
                className={`px-3 py-1 bg-white ${mapType === "roadmap"
                    ? "text-subHeadLogo"
                    : "text-black"
                    }`}
            >
                Map
            </button>

            <button
                onClick={() => setMapType("hybrid")}
                className={`px-3 py-1 border bg-white ${mapType === "hybrid"
                    ? "text-subHeadLogo"
                    : "text-black"
                    }`}
            >
                Satellite
            </button>
        </div>
    )
}

export default Button
