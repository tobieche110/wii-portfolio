const BannerChannel = ({ image, imageAlt }) => {
    return (
        <div className="ec-striped-bg bg-white rounded-lg w-full channel-height">
            <img
                src={image}
                alt={imageAlt}
                className="object-cover rounded-lg border border-gray-400"
                style={{ width: "26rem", height: "14rem" }}
            />
        </div>
    );
};

export default BannerChannel;
