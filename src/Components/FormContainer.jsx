function FormContainer({ studentName, setStudentName, program, setProgram, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="studentName">Student Name</label>
            <input
                type="text"
                id="studentName"
                placeholder="Enter student name"
                value={studentName}
                onChange={(event) => setStudentName(event.target.value)}
                required
            />

            <label htmlFor="program">Program</label>
            <input
                type="text"
                id="program"
                placeholder="Enter program"
                value={program}
                onChange={(event) => setProgram(event.target.value)}
                required
            />

            <button type="submit">Add Student</button>

        </form>
    );
}

export default FormContainer;