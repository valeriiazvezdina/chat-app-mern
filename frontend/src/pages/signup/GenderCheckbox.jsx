export default function Login() {
    return (
        <>
            <div className="flex justify-around">
                <div className="form-control">
                    <label className="label cursor-pointer gap-2">
                        <span className="label-text">Female</span>
                        <input
                            type="checkbox"
                            // defaultUnchecked
                            className="checkbox"
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer gap-2">
                        <span className="label-text">Male</span>
                        <input
                            type="checkbox"
                            // defaultUnchecked
                            className="checkbox"
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label className="label cursor-pointer gap-2">
                        <span className="label-text">Other</span>
                        <input
                            type="checkbox"
                            // defaultUnchecked
                            className="checkbox"
                        />
                    </label>
                </div>
            </div>
        </>
    );
}
