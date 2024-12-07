import { ReactNode } from "react";

interface Props {
  heading: ReactNode;
  message: ReactNode;
  foot: ReactNode;
}

const StickyNote = ({ heading, message, foot }: Props) => {
  return (
    <>
                        <section className="note_body">
                            <div className="note_content">
                                <h2>{heading}</h2>
                                <p>{message}</p>
                            </div>
                            <div className="note_timestamp">
                                <p>{foot}</p>
                            </div>
                        </section>
    </>
  );
};

export default StickyNote;
