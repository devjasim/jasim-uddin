const StatusItem = ({ status, date, description, completed }: { status: string; date: string; description: string; completed: boolean }) => {
    return (
        <div className="flex items-start relative timeline-item">
            <span className="w-3 h-3 rounded-full timeline-icon bg-primary bg-opacity-80 flex absolute top-0 items-center justify-center" />
            <div className={`flex-grow border-opacity-20 timeline-card pb-6 md:max-w-md`}>
                <div className="content">
                    <h4 className="text-lg font-semibold">{status}</h4>
                    <p className="text-sm">{description}</p>
                    <span className="text-xs text-gray-500">{date}</span>
                </div>
            </div>
        </div>
    );
};

export default StatusItem;
