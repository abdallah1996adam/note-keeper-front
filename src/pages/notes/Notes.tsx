import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MainScreen } from "../../components";
import notes from "../../data/note";

const Notes: React.FC = () => {
  const deleteHandler = (noteId: number | string) => {};
  return (
    <MainScreen title="welcome back Abdallah">
      <Link to="/createnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Card style={{ margin: 10 }} key={note._id}>
          <Card.Header style={{ display: "flex" }}>
            <span
              // onClick={() => ModelShow(note)}
              style={{
                color: "black",
                textDecoration: "none",
                flex: 1,
                cursor: "pointer",
                alignSelf: "center",
                fontSize: 18,
              }}
            ></span>

            <div>
              <Button href={`/note/${note._id}`}>Edit</Button>
              <Button
                variant="danger"
                className="mx-2"
                onClick={() => deleteHandler(note._id)}
              >
                Delete
              </Button>
            </div>
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0"></blockquote>
          </Card.Body>
        </Card>
      ))}
    </MainScreen>
  );
};

export default Notes;
