export default function RenderingList({
  topics,
  activeIndex,
  toggleAccordion,
}) {
  return (
    <div className="box">
      {topics.map((topic, index) => (
        <div key={index}>
          <div className="title">
            <h2 onClick={() => toggleAccordion(index)}>{topic.title}</h2>
          </div>
          {activeIndex === index && <p>{topic.description}</p>}
        </div>
      ))}
    </div>
  );
}
