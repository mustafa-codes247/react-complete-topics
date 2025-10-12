
import GrandChild from './GrandChild';
import C8Counter from './C8Counter';

// using props and useState
const Child = () => {
  // defing
  const course=['java','python','data science'];
  
  const values = {
  course: "MEAN",
  programming: course,
};

  return (
  
    <div>
      <h1 className='text-center bg-yellow-300'>using props in child</h1>
      <GrandChild course={'MERN'} programming={course} value={values} />
<C8Counter programming={course} value={values} />
    </div>
    
)}

export default Child
