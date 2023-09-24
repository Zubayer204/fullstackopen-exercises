const Header = ({ course }) => <h2>{course}</h2>

const Total = ({ sum }) => <p><b>total of {sum} exercises</b></p>

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Content = ({ parts }) => 
  <>
    {
      parts.map((part) => {
        return <Part key={part.id} part={part} />
      })
    }
  </>

const Course = ({ course }) => {
  const calculate_total_exercises = (total, parts) => {
    return total + parts.exercises
  }
  const total_exercises = course.parts.reduce(calculate_total_exercises, 0)
  console.log("total_exercises", total_exercises);
  const parts = course.parts;
  return (
    <div>
      <Header course={course.name} />
      <Content parts={parts} />
      <Total sum={total_exercises} />
    </div>
  )
}

export default Course;