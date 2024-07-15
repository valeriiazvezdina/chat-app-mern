export default function GenderCheckbox({ onCheckboxChange, selectedGender }) {
    return (
        <>
            <div className="flex justify-around">
                <div className="form-control">
                    <label
                        className={`label cursor-pointer gap-2 ${selectedGender === 'female' ? 'selected' : ''}`}
                    >
                        <span className="label-text">Female</span>
                        <input
                            type="checkbox"
                            className="checkbox"
                            checked={selectedGender === 'female'}
                            onChange={() => onCheckboxChange('female')}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label
                        className={`label cursor-pointer gap-2 ${selectedGender === 'male' ? 'selected' : ''}`}
                    >
                        <span className="label-text">Male</span>
                        <input
                            type="checkbox"
                            className="checkbox"
                            checked={selectedGender === 'male'}
                            onChange={() => onCheckboxChange('male')}
                        />
                    </label>
                </div>
                <div className="form-control">
                    <label
                        className={`label cursor-pointer gap-2 ${selectedGender === 'other' ? 'selected' : ''}`}
                    >
                        <span className="label-text">Other</span>
                        <input
                            type="checkbox"
                            className="checkbox"
                            checked={selectedGender === 'other'}
                            onChange={() => onCheckboxChange('other')}
                        />
                    </label>
                </div>
            </div>
        </>
    );
}
