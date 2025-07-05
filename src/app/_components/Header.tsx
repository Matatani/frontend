type HeaderProps = {
    title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
        <header className="flex items-center justify-between mb-8">
            <h2 className="text-5xl font-bold">{title}</h2>
        </header>
    );
};

export default Header;