"use client"

import Script from "next/script";

export default function Textarea(props) {
console.log(props.children)
    return (
        <>
            <textarea defaultValue={props.children}>
            </textarea>
            <Script src={'/tinyMCE/tinymce.min.js'}/>
            <Script strategy="lazyOnload">
                {`
                 tinymce.init({
    selector: 'textarea',
    height: 300
  });
                `}
            </Script>
        </>
    )
}

