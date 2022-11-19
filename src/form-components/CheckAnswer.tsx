import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface AnswerBoxState {
    answer: string;
    setAnswer: (newAnswer: string) => void;
}

export function AnswerBox({ answer, setAnswer }: AnswerBoxState): JSX.Element {
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group>
                <Form.Label>Input Answer</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
        </div>
    );
}

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const answerBox = <AnswerBox answer={answer} setAnswer={setAnswer} />;
    if (expectedAnswer == answer) {
        return (
            <div>
                <div>{answerBox}</div>
                ✔️
            </div>
        );
    } else
        return (
            <div>
                <div>{answerBox}</div>❌
            </div>
        );
}
