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

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <h1>Web Development Curriculum</h1>
      {
        courses.map((course) => <Course key={course.id} course={course} />)
      }
    </>
  )
}


export default App