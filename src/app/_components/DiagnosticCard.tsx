type DiagnosticCardProps = {
    title: string;
    symptoms: string;
    cause: string;
};

const DiagnosticCard: React.FC<DiagnosticCardProps> = ({ title, symptoms, cause }) => {
    return (
        <div className="flex flex-col gap-3 p-6 rounded-xl bg-[#E9C46A] text-black">
            <h3 className="text-2xl font-bold">{title}</h3>
            <div>
                <h4 className="text-sm font-semibold uppercase">Symptoms</h4>
                <p className="text-sm leading-relaxed">{symptoms}</p>
            </div>
            <div>
                <h4 className="text-sm font-semibold uppercase">Cause</h4>
                <p className="text-sm leading-relaxed">{cause}</p>
            </div>
        </div>
    );
};

export default DiagnosticCard;