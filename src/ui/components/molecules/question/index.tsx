import "./style.scss";

type Props = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
};

export const Question = ({ author, content }: Props) => (
  <div className="question">
    <p>{content}</p>
    <footer>
      <div className="user-info">
        <img src={author.avatar} alt={author.name} />
        <span>{author.name}</span>
      </div>
    </footer>
  </div>
);
