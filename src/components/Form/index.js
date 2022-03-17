import Filters from '../Filters'
import TodoList from '../TodoList'
import "./styles.scss";


export default function Form() {

  return (
    <>
      <form action="" method="POST" className="form" id="form-1">
        <h1>REDUX & REDUX TOOLKIT</h1>
         <Filters />
         <TodoList />
      </form>
    </>
  );
}
