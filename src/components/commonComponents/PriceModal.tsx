interface PriceModalProps {
    // title: string;
    productid: string;
}

const PriceModal: React.FC<PriceModalProps> = ({productid}) => {
    return (
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">HI</h3>
                <p className="py-4">Press ESC key or click on ✕ button to close</p>
            </div>
        </dialog>
    )
}

export default PriceModal