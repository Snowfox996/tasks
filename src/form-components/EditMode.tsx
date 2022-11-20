import React, { useState } from "react";
import { Form, FormGroup } from "react-bootstrap";

interface EditProps {
    isStudent: boolean;
    isEdit: boolean;
    name: string;
    setName: (newName: string) => void;
    setIsEdit: (newIsEdit: boolean) => void;
    setIsStudent: (newIsStudent: boolean) => void;
}

function EditComp({
    name,
    isEdit,
    isStudent,
    setName,
    setIsStudent,
    setIsEdit
}: EditProps): JSX.Element {
    function updateEdit(event: React.ChangeEvent<HTMLInputElement>) {
        setIsEdit(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setIsStudent(event.target.checked);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                id="is-edit-mode"
                checked={isEdit}
                onChange={updateEdit}
            />
            <h3>
                {name} {isStudent ? "is a student" : "is not a student"}
            </h3>
            <div>
                {isEdit ? (
                    <div>
                        <Form.Group controlId="name">
                            <Form.Control
                                type="text"
                                disabled={isEdit ? false : true}
                                value={name}
                                onChange={updateName}
                            />
                        </Form.Group>
                        <Form.Check
                            type={"checkbox"}
                            id="is-student-check"
                            label={"student"}
                            checked={isStudent}
                            onChange={updateStudent}
                        />
                    </div>
                ) : (
                    <p></p>
                )}
            </div>
        </div>
    );
}

export function EditMode(): JSX.Element {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setIsStudent] = useState<boolean>(true);
    return (
        <div>
            <h3>Edit Mode</h3>
            <EditComp
                name={name}
                setName={setName}
                isStudent={isStudent}
                setIsStudent={setIsStudent}
                isEdit={isEdit}
                setIsEdit={setIsEdit}
            ></EditComp>
        </div>
    );
}
