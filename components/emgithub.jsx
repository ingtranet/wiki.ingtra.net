/* https://github.com/chimin/blog/blob/41facac06362f1e35805703bb955279173276771/src/app/comps/EmbedGithub.tsx */
import { useRef, useEffect } from 'react'

export default function Emgithub({ target }) {
    const divRef = useRef()

    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://emgithub.com/embed-v2.js?target=${target}&style=tokyo-night-dark&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on`
        divRef.current.appendChild(script)
        return () => script.remove()
    }, []);

    return <div className='emgithub-container' ref={divRef} style={{backgroundColor: 'rgb(26, 27, 38)', borderRadius: '6px'}} />
}
