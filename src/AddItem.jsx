function AddItem(props) {
    const {color} = props;
    return (
        <div className="
        flex border-[#a27b5c]
        border-4 py-2 px-4 rounded shadow-2xl
        m-2" style={{ backgroundColor: `${color}` }}>
            <div
                className="text-white
            font-semibold">
                {color}
            </div>
        </div>
    );

}
export default AddItem;