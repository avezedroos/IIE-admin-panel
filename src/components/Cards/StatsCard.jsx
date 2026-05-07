export const StatsCard = ({ title, value, icon, className }) => {
    return (
        <div className={`card stats-card ${className}`}>
            <div className="card-icon">{icon}</div>
            <div className="statsCard-detaile">
                <h2>{value}</h2>
                <p>{title}</p>
            </div>
        </div>
    );
};