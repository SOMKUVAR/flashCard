const ContainerWithShadow = (props) => {
    return (
        <div className="block p-6 rounded-lg shadow-lg bg-white my-5" onClick={props.onClick}>
            {props.children}
        </div>
    )
}

export default ContainerWithShadow;