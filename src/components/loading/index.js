import React from "react"
import { Spinner, LockBody, ReleaseBody, Picture } from "./styles/loading"

function Loading({ src, ...restOfProps }) {
    return (
        <Spinner {...restOfProps}> 
            <LockBody />
            <Picture src={`/images/users/${src}.png`} />
        </Spinner>
    )
}

Loading.ReleaseBody = function LoadingReleaseBody() {
    return <ReleaseBody />
}

export default Loading