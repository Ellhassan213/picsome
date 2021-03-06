import React, {useContext} from "react"

import Image from "../components/Image"
import {Context} from "../Context"
import {getClass} from "../utils"

const Photos = () => {
    const {allPhotos} = useContext(Context)
    
    const imageElements = allPhotos.map((img, i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))
    
    return (
        <main className="photos" data-testid="photos">
            {imageElements}
        </main>
    )
}

export default Photos