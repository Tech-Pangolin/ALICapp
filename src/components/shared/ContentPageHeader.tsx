

const ContentPageHeader: React.FC<{src: string, alt: string}> = ({src, alt}) => {
    return (
        <div>
            <img src={src} alt={alt} className="w-100 img-fluid" style={{marginBottom: '50px'}} />
        </div>
    );
};

export default ContentPageHeader;