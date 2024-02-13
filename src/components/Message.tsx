import react from "react";

interface MessageProps {
  msg: react.ReactNode;
}
const Message = ({ msg }: MessageProps) => {
  return (
    <div className="container">
      <h6 className="display-6 text-center p-5 pt-5 pb-5">{msg}</h6>
    </div>
  );
};

export default Message;
