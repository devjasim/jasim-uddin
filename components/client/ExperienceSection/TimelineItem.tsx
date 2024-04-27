const StatusItem = ({ children }: { children: React.ReactElement }) => {
    return (
        <div className="flex items-start relative timeline-item">
            <span className="w-3 h-3 rounded-full timeline-icon bg-primary flex absolute top-0 items-center justify-center" />
            <div className={`flex-grow border-opacity-20 timeline-card pb-6 md:max-w-lg`}>
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default StatusItem;
