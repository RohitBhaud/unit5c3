import { useState } from "react"
import { axios } from "axios"

export const Admin = () => {

  const [employee, setEmployee] = useState({
    employee_name: "",
    employee_id: "",
    status: ["Terminated", "Working"],
    title: ["Jr Software Developer", "Sr Software Developer", "Team Lead"],
    salary: "",
    username: "",
    password: "",
    tasks: "",

  });



  return (
    <form className="createEmployee" onSubmit={handleSubmit}>
      <input type="text" onChange={handle} placeholder="Employee Name" name="employee_name" value={employee.employee_name} />

      <input type="text" onChange={handle} placeholder="Employee id" name="employee_id" value={employee.employee_id} />

      <select name="title">
        <option value="intern" onChange={handle}>Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input type="number" onChange={handle} placeholder="Salary" name="salary" value={employee.salary} />
      <input type="text" onChange={handle} placeholder="Image" name="image" />
      <input type="text" onChange={handle} placeholder="User Name" name="username" value={employee.username} />
      <input type="password" onChange={handle} placeholder="Password" name="password" value={employee.password} />
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
        onChange={handle}
        value={employee.tasks}
      />
      <select name="status" onChange={handle} id="status">
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select name="team" onChange={handle} id="team">
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input className="createUser" type="submit" value={"submit"} />
    </form>
  );
};
