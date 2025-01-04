function TextInput({ label, type = "text", placeholder, error, ...props }) {
    return (
        <div className="flex flex-col mb-4">
            <label className="mb-2 text-sm font-bold uppercase text-gray-700">
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                className={`w-full p-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                {...props}
            />
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
}

export default TextInput;