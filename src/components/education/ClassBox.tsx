
interface Props{
    courseName: string
}

const ClassBox: React.FC<Props> = ({courseName}) => {

    return (
        <div className="classBox">
            <div className="classTitle">
                <h2>{courseName}</h2>
            </div>
        </div>
    )
}