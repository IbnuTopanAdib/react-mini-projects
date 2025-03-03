import TextInput from "./Inputs/TextInput";
import TextArea from "./Inputs/TextArea";
import { useState } from "react";


function InputProject({ onAddProject, onCancelAddProject }) {

    const [formData, setFormData] = useState({
        name: "",
        description: "",
        dueDate: "",
    });

    const [errors, setErrors] = useState({});

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value,
            }
        })
        setErrors({});
    }

    function handleError() {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = "Project name is required"
        if (!formData.description.trim()) newErrors.description = "Project description is required"
        if (!formData.dueDate.trim()) newErrors.dueDate = "Project due date is required"
        return newErrors
    }

    function handleSubmit(event) {
        event.preventDefault()
        const errors = handleError()
        if (Object.keys(errors).length > 0) {
            setErrors(errors)
            return;
        }
        onAddProject(formData);

        setFormData({ projectName: "", projectDescription: "", projectDueDate: "" });
    }

    return (
        <div className="flex flex-col w-full max-w-3xl p-6 mx-auto bg-white rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
                <TextInput
                    name="name"
                    label="Project Name"
                    placeholder="Enter project name"
                    value={formData.name || ""}
                    error={errors.name}
                    onChange={handleChange}
                />
                <TextArea
                    name="description"
                    label="Project Description"
                    value={formData.description || ""}
                    error={errors.description}
                    placeholder="Describe your project..."
                    onChange={handleChange}
                />
                <TextInput
                    name="dueDate"
                    label="Project Due Date"
                    value={formData.dueDate || ""}
                    error={errors.dueDate}
                    type="date"
                    onChange={handleChange}
                />

                <div className="flex items-center justify-between mt-4 gap-2">
                    <button
                        className="w-full py-2 text-white bg-stone-500 rounded-lg"
                        type="button"
                        onClick={onCancelAddProject}
                    >Cancel
                    </button>

                    <button
                        className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                        type="submit"
                    >
                        Submit Project
                    </button>
                </div>
            </form>
        </div>
    );
}

export default InputProject;
