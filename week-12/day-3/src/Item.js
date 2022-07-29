function Item(props) {
    const { title } = props;

    return (
        <div className="item">
            <div className="item-title">{title}</div>
            <div className="item-icon">
                <img src="/assets/images/Group.svg" alt="" />
            </div>
        </div>
    );
}

export default Item;