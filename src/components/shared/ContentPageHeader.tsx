import './ContentPageHeader.css';

const ContentPageHeader: React.FC<{src: string, alt: string, title: string}> = ({src, alt, title}) => {
    return (
        <div 
            className="position-relative w-100 content-page-header"
            style={{
                backgroundImage: `url(${src})`
            }}
        >
            {/* Gradient overlay */}
            <div className="position-absolute w-100 h-100 content-page-header-gradient" />
            
            {/* Text overlay */}
            <div className="position-absolute w-100 h-100 d-flex align-items-end justify-content-center p-lg-5 p-3">
                <h1 className="text-white text-center mb-lg-0 mb-3 display-1 d-lg-block d-none fw-bold">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default ContentPageHeader;