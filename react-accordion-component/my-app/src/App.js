import Accordion from './Accordion';
import './Accordion.css';

const topics = [
  {
    title: 'Hypertext Markup Language',
    description:
      'Hypertext markup language (html) is the standard markup language for creating web pages and web applications. With cascading style sheets (CSS) and javascript, it forms a triad of cornerstone technologies for the world wide web.',
  },
  {
    title: 'Cascading Style Sheets',
    description:
      'Cascading style sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like html. CSS is a cornerstone technology of the world wide web alongside html and javascript.',
  },
  {
    title: 'JavaScript',
    description:
      'Javascript, often abbreviated as js, is a high-level interpreted programming language that conforms to the ECMAScript specification. Javascript has curly bracket syntax, dynamic typing, prototype-based object orientation and first class functions.',
  },
];

function App() {
  return (
    <div className="container">
      <Accordion topics={topics} />
    </div>
  );
}

export default App;
