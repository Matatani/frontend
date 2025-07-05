type TreatmentCardProps = {
    title: string;
    description: string;
};

const TreatmentCard: React.FC<TreatmentCardProps> = ({ title, description }) => {
    return (
        <div className="p-6 text-white rounded-xl bg-[#2A3D2F]/60 backdrop-blur-sm">
            <div className="mb-4 text-lg font-bold">{title}</div>
            <p className="">{description}</p>
        </div>
    );
};

export default TreatmentCard;