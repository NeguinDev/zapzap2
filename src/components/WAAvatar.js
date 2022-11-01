import React, { setError, useState } from "react";

export function WAAvatar(src) {
    const [error, setError] = useState(false)

    return error ? <MdPerson /> : <C.Avatar src={src} onError={() => setError(true)} />
}
