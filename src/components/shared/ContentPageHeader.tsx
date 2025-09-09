import './ContentPageHeader.css';

const ContentPageHeader: React.FC<{src: string, title: string}> = ({src, title}) => {
    return (
        <div 
            className="position-relative w-100 content-page-header"
            style={{
                backgroundImage: `url(${src})`
            }}
        >
            {/* Gradient overlay */}
            <div className="position-absolute w-100 h-100" />
            
            {/* Text overlay */}
            {title && <div className="position-absolute w-100 h-100 d-none d-lg-flex align-items-center align-items-md-end justify-content-center justify-content-md-start p-3">
                <div className="position-absolute w-45 h-25 text-overlay-bg d-flex align-items-center justify-content-center" id="title-text-overlay">
                    <h1 className="title-text">
                        {title}
                    </h1>
                </div>
            </div>}
            {title && <div className="position-absolute w-100 h-100 d-flex d-lg-none align-items-center align-items-md-end justify-content-center justify-content-md-start p-3">
                <div className="d-flex align-items-center justify-content-center" id="title-text-overlay-mobile">
                    <h1 className="title-text">
                        {title}
                    </h1>
                </div>
            </div>}
        </div>
    );
};

export default ContentPageHeader;