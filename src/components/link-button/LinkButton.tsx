import Link from 'next/link'
import './link-button.css'
export const LinkButton = (props: any) => {

    return(
        <Link href={'/experience'}>
            <div className="button">
                <p>{props.label}</p>
            </div>
        </Link>
        
    )
}