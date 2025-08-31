
function NotificationPanel({ Notification, handleDelete }) {

    return (
        <div className="w-full bg-subHeadColor text-white py-4">
            <div className="flex items-center text-slate-200 justify-between py-2 border-b-2 border-b-[#303030] px-4">
                <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                        <span className="text-lg">
                            <i className="fa-solid fa-circle-info"></i>
                        </span>
                        <span className="bg-red-600 text-[8px] px-1">{Notification.info_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>
                            <i className="fa-solid fa-triangle-exclamation"></i>
                        </span>
                        <span className="bg-yellow-600 text-[8px] px-1">{Notification.warning_count}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <span>
                            <i className="fa-solid fa-file"></i>
                        </span>
                        <span className="bg-teal-600 text-[8px] px-1">{Notification.error_count}</span>
                    </div>
                </div>
                <div>
                    <span className="cursor-pointer"
                        onClick={() => { handleDelete(Notification.id) }}>
                        <i className="fa-solid fa-xmark"></i>
                    </span>
                </div>
            </div>
            <div className="flex items-end gap-3 p-3 rounded-md">
                <div className="flex gap-3 items-center">
                    <span className="text-subHeadLogo">
                        <i className="fa-solid fa-wifi"></i>
                    </span>
                    <div>
                        <p className="text-blue-400 font-medium cursor-pointer hover:underline">
                            {Notification.message}
                        </p>
                        <p className="text-gray-400 text-sm">{Notification.message}</p>
                    </div>
                </div>
                <span className="ml-auto text-gray-500 text-xs">{Notification.time}</span>
            </div>
        </div>
    );
}

export default NotificationPanel;
