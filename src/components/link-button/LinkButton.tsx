import Link from 'next/link'
import './link-button.css'

interface Props{
    route: string
    buttonType: string
    label: string
}

export const LinkButton: React.FC<Props> = ({route, buttonType, label}):JSX.Element => {

    return(
        <Link href={route}>
            <div id={buttonType} className="button">
                <p>{label}</p>
            </div>
        </Link>
        
    )
}