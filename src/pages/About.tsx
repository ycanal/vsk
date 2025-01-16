import { use } from "react";

import { AuthenticationContext } from "../AuthenticationContext.ts";

export default function About() {
    const authStatus = use(AuthenticationContext)

    return (<div>
        <span>{authStatus.user}</span>
        About
    </div>)
}
