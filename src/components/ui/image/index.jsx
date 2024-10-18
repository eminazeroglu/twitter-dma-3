import classNames from "classnames";
import { useEffect, useState } from "react";

function Image(
    {
        src,
        alt,
        className,
        imgClassName,
        type = 'cover',
        failSrc = '/default_image.jpg'
    }
) {

    const [imgSrc, setImgSrc] = useState(src)

    const handleError = () => {
        setImgSrc(failSrc)
    }

    useEffect(() => {
        setImgSrc(src)
    }, [src])

    return (
        <figure className={classNames(
            className || ''
        )}>
            <img
                className={classNames(
                    'size-full',
                    {
                        'object-cover': type === 'cover',
                        'object-contain': type === 'contain',
                    },
                    imgClassName || ''
                )}
                src={imgSrc}
                alt={alt}
                onError={handleError}
            />
        </figure>
    );
}

export default Image;