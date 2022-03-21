import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewDepartment } from '../redux/departments/actions';
import { departmentsSelector } from '../redux/departments/selectors';
import { IDepartment } from '../types/departments';

const AddDepartmentForm: FC = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
//   const { department } = useSelector(departmentsSelector);
//   const dispatch = useDispatch()
//   useEffect(() => {
//     dispatch(fetchNewDepartment())
//   })
  const createNewDepartment = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newDepartment: IDepartment = {
      name: name,
      description: description,
    };
    console.log(newDepartment);
    
  };

  return (
    <form className="add-form form" onSubmit={createNewDepartment}>
      <fieldset>
        <legend>Add department</legend>
        <div className="input-wrapper">
          <input
            type="text"
            name="name"
            placeholder="Department name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className="validation">*Required</div>
        </div>
        <div className="input-wrapper">
          <textarea
            name="description"
            placeholder="Department description"
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <div className="validation">*Required</div>
        </div>
        <div className="btns-wrap">
          <button type="submit" className="btn btn-success">
            Add department
          </button>
          <button type="reset" className="btn btn-danger">
            Cancel
          </button>
        </div>
      </fieldset>
    </form>
  );
};

export default AddDepartmentForm;
