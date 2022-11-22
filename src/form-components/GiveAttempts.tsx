import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Row } from "react-bootstrap";

interface attemptsProps {
    attemptsRequested: string;
    attemptsLeft: string;
    setAttemptsLeft: (newAttemptsLeft: string) => void;
}

interface requestAttemptsState {
    attemptsRequested: string;
    setAttemptsRequested: (newAttemptsRequested: string) => void;
}

function RequestAttempts({
    attemptsRequested,
    setAttemptsRequested
}: requestAttemptsState): JSX.Element {
    function updateAttemptsRequested(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        setAttemptsRequested(event.target.value);
    }
    return (
        <div>
            <Form.Group>
                <Form.Control
                    type="number"
                    value={attemptsRequested}
                    onChange={updateAttemptsRequested}
                />
            </Form.Group>
        </div>
    );
}

function UseButton({
    attemptsLeft,
    setAttemptsLeft
}: attemptsProps): JSX.Element {
    const attempts = parseInt(attemptsLeft) || 0;
    let isDisabled = false;
    if (attempts <= 0) {
        isDisabled = !isDisabled;
    }
    return (
        <Button
            onClick={() => setAttemptsLeft(String(attempts - 1))}
            name={"use"}
            disabled={isDisabled}
        >
            use
        </Button>
    );
}

function GainButton({
    attemptsRequested,
    attemptsLeft,
    setAttemptsLeft
}: attemptsProps): JSX.Element {
    const attempts_left = parseInt(attemptsLeft) || 0;
    const attempts_requested = parseInt(attemptsRequested) || 0;
    return (
        <div>
            <Button
                onClick={() =>
                    setAttemptsLeft(String(attempts_left + attempts_requested))
                }
                name={"gain"}
            >
                gain
            </Button>
        </div>
    );
}

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<string>("3");
    const [attemptsRequested, setAttemptsRequested] = useState<string>("0");

    return (
        <div>
            <div>
                <h3>Attempts Left</h3>
                <p>{attemptsLeft}</p>
            </div>
            <h3>Give Attempts</h3>
            <RequestAttempts
                attemptsRequested={attemptsRequested}
                setAttemptsRequested={setAttemptsRequested}
            />
            <div>
                <Row>
                    <Col>
                        <UseButton
                            attemptsRequested={attemptsRequested}
                            attemptsLeft={attemptsLeft}
                            setAttemptsLeft={setAttemptsLeft}
                        />
                    </Col>
                    <Col>
                        <GainButton
                            attemptsRequested={attemptsRequested}
                            attemptsLeft={attemptsLeft}
                            setAttemptsLeft={setAttemptsLeft}
                        />
                    </Col>
                </Row>
            </div>
        </div>
    );
}
