import "./FancyButton.css"

interface IProps {
    text: string;
    handleClick: () => void
}

export const FancyButton = ({text = "Hover IT", handleClick}: IProps) => {

    return (
        <button className="name noselect" onClick={handleClick}>{text}</button>
    )
}