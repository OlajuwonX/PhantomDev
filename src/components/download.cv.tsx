
interface DownloadCVButtonProps {
    fileUrl: string; // link to file in the public folder
    fileName?: string; // "cv.pdf"
}

const DownloadCVButton: React.FC<DownloadCVButtonProps> = ({ fileUrl, fileName = "cv.pdf" }) => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = fileName; // forces download with this name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            onClick={handleDownload}
            className="px-5 py-2 rounded-xl mt-5 bg-green-700 font-semibold hover:bg-green-600 cursor-pointer transition-all z-10"
        >
            📄 Download CV
        </button>
    );
};

export default DownloadCVButton;
