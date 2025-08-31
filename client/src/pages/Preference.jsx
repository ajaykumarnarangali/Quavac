import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Preference() {

    const [pressureUnit, setPressureUnit] = useState(() => {
        const saved = localStorage.getItem('preference');
        return saved ? JSON.parse(saved).pressureUnit : "KPA";
    });
    const [distanceUnit, setDistanceUnit] = useState(() => {
        const saved = localStorage.getItem('preference');
        return saved ? JSON.parse(saved).distanceUnit : "Kilometers";
    });
    const [temperatureUnit, setTemperatureUnit] = useState(() => {
        const saved = localStorage.getItem('preference');
        return saved ? JSON.parse(saved).temperatureUnit : "Fahrenheit";
    });
    const [timeFormat, setTimeFormat] = useState(() => {
        const saved = localStorage.getItem('preference');
        return saved ? JSON.parse(saved).timeFormat : "24-hour";
    });
    const [dateFormat, setDateFormat] = useState(() => {
        const saved = localStorage.getItem('preference');
        return saved ? JSON.parse(saved).dateFormat : "DD-MM-YYYY";
    });
    const [language, setLanguage] = useState(() => {
        const saved = localStorage.getItem('preference');
        return saved ? JSON.parse(saved).language : "English";
    });
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('preference');
        return saved ? JSON.parse(saved).theme : "Dark";
    });


    const renderRadio = (value, selectedValue, setSelected, labelText) => (
        <label key={value} className="mr-4 flex items-center cursor-pointer">
            <input
                type="radio"
                name={labelText}
                value={value}
                checked={selectedValue === value}
                onChange={() => setSelected(value)}
                className="peer hidden"
            />
            <span className="w-4 h-4 border-2 border-gray-400 rounded-full mr-2 flex items-center justify-center
                   peer-checked:border-teal-600 transition-colors">
                <span className={`w-2.5 h-2.5 rounded-full bg-teal-600 ${selectedValue === value ? "block" : "hidden"}`}></span>
            </span>
            {value}
        </label>
    );

    const navigate = useNavigate();

    const handlePrefernce = () => {
        const preference = {
            pressureUnit,
            distanceUnit,
            temperatureUnit,
            timeFormat,
            dateFormat,
            language,
            theme
        };
        localStorage.setItem('preference', JSON.stringify(preference));
        navigate('/home');
    }

    return (
        <div className="w-full min-h-screen bg-subHeadColor flex flex-col gap-4 text-white py-12 px-8">
            <div className="flex flex-col gap-2">
                <h2 className="text-xl font-bold mb-2">Account Preferences</h2>
                <p className="text-sm mb-4">Please setup your account preferences.</p>
            </div>
            <hr className="border-black mb-4" />

            <div>
                <p className="mb-2">Select your pressure unit:</p>
                <div className="flex">
                    {["KPA", "Bar", "inHg"].map((unit) =>
                        renderRadio(unit, pressureUnit, setPressureUnit, "pressureUnit")
                    )}
                </div>
            </div>

            <div>
                <p className="mb-2">Select your distance unit:</p>
                <div className="flex">
                    {["Kilometers", "Miles"].map((unit) =>
                        renderRadio(unit, distanceUnit, setDistanceUnit, "distanceUnit")
                    )}
                </div>
            </div>

            <div>
                <p className="mb-2">Select your temperature unit:</p>
                <div className="flex">
                    {["Celsius", "Fahrenheit"].map((unit) =>
                        renderRadio(unit, temperatureUnit, setTemperatureUnit, "temperatureUnit")
                    )}
                </div>
            </div>

            <div>
                <p className="mb-2">Select your time format:</p>
                <div className="flex">
                    {["24-hour", "12-hour"].map((unit) =>
                        renderRadio(unit, timeFormat, setTimeFormat, "timeFormat")
                    )}
                </div>
            </div>

            <div>
                <p className="mb-2">Select your date format:</p>
                <div className="flex">
                    {["DD-MM-YYYY", "MM-DD-YYYY"].map((unit) =>
                        renderRadio(unit, dateFormat, setDateFormat, "dateFormat")
                    )}
                </div>
            </div>

            <hr className="border-black" />
            <div className="w-full max-w-sm">

                <div className="mb-6">
                    <label className="block text-sm mb-2">Select your interface language:</label>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="w-full p-3 bg-transparent outline-none border-b border-b-slate-500"
                    >
                        <option className="text-black">English</option>
                        <option className="text-black">Spanish</option>
                        <option className="text-black">French</option>
                    </select>
                </div>

                <div className="mb-6">
                    <label className="block text-sm mb-2">Template</label>
                    <select
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        className="w-full p-3 bg-transparent outline-none border-b border-b-slate-500"
                    >
                        <option className="text-black">Dark</option>
                        <option className="text-black">Light</option>
                    </select>
                </div>

                <button className="w-fit p-2 rounded-sm text-black bg-[#7db343] font-semibold transition-colors"
                    onClick={handlePrefernce}>
                    CONFIRM
                </button>
            </div>

        </div>
    );
}

export default Preference;
