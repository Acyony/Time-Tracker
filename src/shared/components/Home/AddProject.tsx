'use client';

import {useState} from "react";
import {useRouter} from "next/navigation";
import {Project} from "next/dist/build/swc/types";

export const AddProject = () => {
    const [projectName, setProjectName] = useState('');
    const [projects, setProjects] = useState<Project[]>([]);
    const router = useRouter();

    const handleSubmit = async () => {
        if (!projectName.trim()) {
            alert("Project name is required!");
            return;
        }

        try {
            const newProject = {
                name: projectName,
                time: 0, // Default time as 0 initially
            };

            const response = await fetch('/api/projects', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newProject),
            });

            if (!response.ok) {
                throw new Error('Failed to save the project');
            }

            const savedProject = await response.json();
            setProjects((prevProjects) => [...prevProjects, savedProject]);
            console.log("savedProject", savedProject);
            // Redirect to the TimeTracker page
            router.push(`/projects/${savedProject.id}`);
        } catch (error) {
            console.error('Error saving project:', error);
        }
    };

    return (
        <div className="d-flex col-sm-12 gap-3">
            <input
                type="text"
                className="form-control"
                placeholder="Enter Project Name"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
            />
            <button
                type="button"
                className="btn btn-primary ps-3"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
};

export default AddProject;
