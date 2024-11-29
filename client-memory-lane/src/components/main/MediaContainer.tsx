import { useEffect, useRef, useState } from "react";

type MediaContainerProps = {
    imagePath: string
    text: string
};



export default function MediaContainer({imagePath, text} : MediaContainerProps) {

    const [parentDivHeight, setParentDivHeight] = useState(300)
    const randomMargin = Math.floor(Math.random() * 6)

    const imgRed = useRef(null)

    function onImageLoad(event : React.SyntheticEvent<HTMLImageElement>) {
        const image  = event.target as HTMLImageElement

        if (image.height < parentDivHeight) {
            setParentDivHeight(image.height)
        }

        if (image.width / image.height < 0.8) {
            setParentDivHeight(450)
        }
    }

    return (

        <>
        <div className="bg-blue-200 mb-20 w-[90%] flex" style={{maxHeight: `${parentDivHeight}px`, marginLeft: `${randomMargin}rem`}}>

            <div className="bg-red-300 p-2 max-w-[60%] max-h-full">
                <img src={imagePath} onLoad={onImageLoad} ref={imgRed} className="max-w-full max-h-full flex-shrink-0"/>
            </div>

            <div className="bg-black w-[2px] h-[80%] mx-10 self-center"></div>

            <div className="bg-blue-500 flex-1 self-center mr-10 overflow-y-auto max-h-[70%]">
                {text}
            </div>

        </div>
        </>
    )
}