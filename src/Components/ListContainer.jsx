function ListContainer({ students, removeStudent }) {
    return (
        <section>
            <h2>Students</h2>

            <div id="studentContainer">

                {students.map((student) => (
                    <div className="student-card" key={student.id}>

                        <h3>{student.name}</h3>

                        <p>Program: {student.program}</p>

                        <button
                            className="remove-button"
                            onClick={() => removeStudent(student.id)}
                        >
                            Remove
                        </button>

                    </div>
                ))}

            </div>
        </section>
    );
}

export default ListContainer;