import { SECTIONS, TASKS } from '../content'
import SectionHead from './SectionHead'

export default function Tasks() {
  return (
    <section className="section" id="tasks">
      <div className="container">
        <SectionHead title={SECTIONS.tasks} />

        <ol className="tasks">
          {TASKS.map((task, i) => (
            <li className="card task" key={task}>
              <span className="task__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="task__text">{task}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
