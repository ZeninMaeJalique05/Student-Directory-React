import { useState } from 'react';

import HeaderContainer from './Components/HeaderContainer.jsx';
import FormContainer from './Components/FormContainer.jsx';
import ListContainer from './Components/ListContainer.jsx';

import './App.css';

function App() {

    const [studentName, setStudentName] = useState('');
    const [program, setProgram] = useState('');
    const [students, setStudents] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();

        const newStudent = {
            id: Date.now(),
            name: studentName,
            program: program
        };

        setStudents([...students, newStudent]);

        setStudentName('');
        setProgram('');
    };

    const removeStudent = (id) => {
        setStudents(students.filter(student => student.id !== id));
    };

    return (
        <>
            <HeaderContainer />

            <main>

                <FormContainer
                    studentName={studentName}
                    setStudentName={setStudentName}
                    program={program}
                    setProgram={setProgram}
                    handleSubmit={handleSubmit}
                />

                <ListContainer
                    students={students}
                    removeStudent={removeStudent}
                />

            </main>
        </>
    );
}

export default App;