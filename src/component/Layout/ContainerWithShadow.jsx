

const ContainerWithShadow = (props) => {
    return (
        <div className="block p-6 rounded-lg shadow-lg bg-white my-5">
            {props.children}
        </div>
    )
}

export default ContainerWithShadow;