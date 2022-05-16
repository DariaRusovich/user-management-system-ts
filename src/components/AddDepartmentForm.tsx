import { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchNewDepartment } from '../redux/departments/actions';
import { IDepartment } from '../types/departments';

const AddDepartmentForm: FC = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const dispatch = useDispatch();
  const createNewDepartment = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newDepartment: IDepartment = {
      name: name,
      description: description,
    };
    dispatch(fetchNewDepartment(newDepartment));
  };

  return (
    <form className="add-form form" onSubmit={createNewDepartment}>
      <fieldset>
        <legend>Add department</legend>
        <div className="input-wrapper">
          <input
            type="text"
            name="name"
            placeholder="IDepartment name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <div className="validation">*Required</div>
        </div>
        <div className="input-wrapper">
          <textarea
            name="description"
            placeholder="IDepartment description"
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
