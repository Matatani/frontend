type UploadBarProps = {
    fileName: string;
};

const UploadBar: React.FC<UploadBarProps> = ({ fileName }) => {
    return (
        <div className="flex items-center justify-between p-3 px-4 border border-gray-200 rounded-xl">
            <div className="flex items-center gap-3 text-gray-600">
                <span>{fileName} uploaded</span>
            </div>
            <button className="px-5 py-2 font-medium text-white transition-colors bg-gray-800 rounded-lg hover:bg-gray-700">
                Upload
            </button>
        </div>
    );
};

export default UploadBar;